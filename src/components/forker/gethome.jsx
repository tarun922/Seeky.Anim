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
