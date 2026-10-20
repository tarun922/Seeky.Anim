import axios from "axios";



export async function FetchAnilist(query, variables = {}) {
  try {
    const response = await axios.post('https://graphql.anilist.co', {
      query: query,
      variables: variables
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });

    // Axios wraps the API's JSON response inside a 'data' object
    return response.data;
  } catch (error) {
    console.error('AniList API Error:', error.response ? error.response.data : error.message);
    throw error;
  }
}
