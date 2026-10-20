import { FetchAnilist } from "./tool"

const clean_desc = (html) =>
  (html || "No description available")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\(Source:[^)]*\)/gi, "")
    .replace(/\s+/g, " ")
    .trim()

// ani.zip se saare episodes (naam + thumbnail). Fail ho to khaali array
const get_episodes = async (id) => {
  try {
    const res = await fetch(`https://api.ani.zip/mappings?anilist_id=${id}`)
    const json = await res.json()

    return Object.entries(json?.episodes ?? {})
      .filter(([key]) => Number.isInteger(Number(key)))   // specials ("S1") hata do
      .map(([key, ep]) => ({
        number: Number(key),
        name:
          ep.title?.en ||
          ep.title?.["x-jat"] ||
          ep.title?.ja ||
          `Episode ${key}`,
        image: ep.image || null,
      }))
      .sort((a, b) => a.number - b.number)
  } catch {
    return []
  }
}

export const get_info = async (id) => {
  const info_q = `
   query {
      Media(id: ${Number(id)}, type: ANIME) {
        id
        title {
          english
          romaji
        }
        description(asHtml: false)
        bannerImage
        coverImage {
          extraLarge
        }
        episodes
        averageScore

        characters(page: 1, perPage: 5, sort: [ROLE, RELEVANCE]) {
          edges {
            role
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }

        streamingEpisodes {
          title
          thumbnail
        }
      }
    }
    `;

  // dono request ek saath
  const [res, aniEpisodes] = await Promise.all([
    FetchAnilist(info_q),
    get_episodes(id),
  ])

  const m = res?.data?.Media ?? res?.Media
  if (!m) return null

  // ani.zip khaali aaye to AniList ke streamingEpisodes se kaam chalao
  const episodes = aniEpisodes.length
    ? aniEpisodes
    : (m.streamingEpisodes ?? []).map((e, i) => ({
        number: i + 1,
        name: e.title.replace(/^Episode\s*\d+\s*-\s*/i, ""),
        image: e.thumbnail || null,
      }))

  return {
    id: m.id,
    name: m.title.english || m.title.romaji,
    episodeCount: m.episodes ?? (episodes.length || null),
    description: clean_desc(m.description),
    rating: m.averageScore != null ? m.averageScore / 10 : null,
    banner: m.bannerImage || m.coverImage.extraLarge,
    poster: m.coverImage.extraLarge,
    episodes,
    characters: m.characters.edges.map((c) => ({
      id: c.node.id,
      name: c.node.name.full,
      image: c.node.image.large,
      role: c.role,
    })),
  }
}
