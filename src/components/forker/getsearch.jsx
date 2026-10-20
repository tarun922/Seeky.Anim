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
