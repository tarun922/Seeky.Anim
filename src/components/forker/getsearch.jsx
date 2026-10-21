/*
import { FetchAnilist } from "./tool";

export const get_search = async (query, pageNum = 1, perpage = 30) => {
  const search_q = `
   query {
      Page(page: ${pageNum}, perPage: ${perpage}) {
        pageInfo {
          hasNextPage
        }
        media(search: ${JSON.stringify(query)}, type: ANIME, sort: SEARCH_MATCH) {
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

  return FetchAnilist(search_q)
}
*/

import { FetchAnilist } from "./tool";
import Fuse from "fuse.js";

let animeCataloguePromise;

const getAnimeCatalogue = async () => {
  if (!animeCataloguePromise) {
    animeCataloguePromise = fetch("/Seeky.anime.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not load Seeky.anime.json");
        }
        return res.json();
      })
      .catch((error) => {
        animeCataloguePromise = null;
        throw error;
      });
  }

  return animeCataloguePromise;
};

const getAnimeDetails = async (anime) => {
  try {
    const response = await fetch(
      `https://animap.id/api/anilist/${anime.anilist_id}`
    );

    if (!response.ok) {
      throw new Error("AniMap request failed");
    }

    const a = await response.json();

    return {
      id: a.anilist_id ?? anime.anilist_id,
      title: {
        english: a.title_english || anime.title,
        romaji: a.title_romaji || anime.title,
      },
      description: a.description || "",
      bannerImage: a.banner_image || "",
      coverImage: {
        extraLarge: a.cover_image || "",
        large: a.cover_image || "",
      },
      episodes: a.episodes ?? null,
      averageScore: null,
      characters: {
        nodes: [],
      },
    };
  } catch {
    // Details unavailable hone par bhi anime result return hoga.
    return {
      id: anime.anilist_id,
      title: {
        english: anime.title,
        romaji: anime.title,
      },
      description: "",
      bannerImage: "",
      coverImage: {
        extraLarge: "",
        large: "",
      },
      episodes: null,
      averageScore: null,
      characters: {
        nodes: [],
      },
    };
  }
};

const getSearchFallback = async (query, pageNum, perpage) => {
  const catalogue = await getAnimeCatalogue();

  const fuse = new Fuse(catalogue, {
    keys: ["title"],
    threshold: 0.4,
    ignoreLocation: true,
    includeScore: true,
    minMatchCharLength: 2,
  });

  const results = query.trim()
    ? fuse.search(query.trim())
    : [];

  const start = (pageNum - 1) * perpage;
  const matchedAnime = results
    .slice(start, start + perpage)
    .map((result) => result.item);

  const media = await Promise.all(
    matchedAnime.map(getAnimeDetails)
  );

  return {
    data: {
      Page: {
        pageInfo: {
          hasNextPage: results.length > start + perpage,
        },
        media,
      },
    },
  };
};

export const get_search = async (
  query,
  pageNum = 1,
  perpage = 30
) => {
  const search_q = `
    query {
      Page(page: ${pageNum}, perPage: ${perpage}) {
        pageInfo {
          hasNextPage
        }
        media(
          search: ${JSON.stringify(query)}
          type: ANIME
          sort: SEARCH_MATCH
        ) {
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
    return await FetchAnilist(search_q);
  } catch (error) {
    console.warn(
      "AniList search failed. Using local fuzzy search + AniMap.",
      error
    );

    return getSearchFallback(query, pageNum, perpage);
  }
};
