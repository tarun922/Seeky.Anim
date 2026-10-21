/*
import { FetchAnilist } from "./tool";

export const get_home = async (pageNum=1,perpage=30) => {
  const home_q = `
   query {
      Page(page: ${pageNum}, perPage: ${perpage}) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            english
            romaji
          }
          description(asHtml: false)
          bannerImage
          coverImage {
            extraLarge
            large
          }
          episodes
          averageScore

          characters(page: 1, perPage: 3, sort: [ROLE, RELEVANCE]) {
            nodes {
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
      }
    }
    `;

  return FetchAnilist(home_q)
}
*/

import { FetchAnilist } from "./tool";

const FALLBACK_ANILIST_IDS = [
  16498, 113415, 101922, 1535, 5114,
  11061, 21, 20, 20958, 21827,
  20605, 9253, 11757, 1, 269,
  30276, 38000, 40748, 40028, 31964,
  37510, 38524, 42249, 44511, 40787,
  47778, 49596, 50709, 30, 1575
];

async function getHomeFallback(pageNum, perpage) {
  const start = (pageNum - 1) * perpage;
  const ids = FALLBACK_ANILIST_IDS.slice(start, start + perpage);

  const results = await Promise.allSettled(
    ids.map(async (id) => {
      const response = await fetch(
        `https://animap.id/api/anilist/${id}`
      );

      if (!response.ok) {
        throw new Error(`AniMap request failed: ${id}`);
      }

      const a = await response.json();

      return {
        id: a.anilist_id,
        title: {
          english: a.title_english,
          romaji: a.title_romaji
        },
        description: a.description || "",
        bannerImage: a.banner_image || "",
        coverImage: {
          extraLarge: a.cover_image || "",
          large: a.cover_image || ""
        },
        episodes: a.episodes ?? null,
        averageScore: null,
        characters: {
          nodes: []
        }
      };
    })
  );

  const media = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  if (media.length === 0) {
    throw new Error("AniList and AniMap fallback both failed.");
  }

  return {
    data: {
      Page: {
        media
      }
    }
  };
}

export const get_home = async (pageNum = 1, perpage = 30) => {
  const home_q = `
    query {
      Page(page: ${pageNum}, perPage: ${perpage}) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            english
            romaji
          }
          description(asHtml: false)
          bannerImage
          coverImage {
            extraLarge
            large
          }
          episodes
          averageScore
          characters(page: 1, perPage: 3, sort: [ROLE, RELEVANCE]) {
            nodes {
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
      }
    }
  `;

  try {
    return await FetchAnilist(home_q);
  } catch (error) {
    console.warn("AniList failed. Using AniMap fallback.", error);
    return await getHomeFallback(pageNum, perpage);
  }
};
