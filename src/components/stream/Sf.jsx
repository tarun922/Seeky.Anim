import axios from "axios"

const Get_S = async (id, ep, dubbed = false){
  try {
    const res = await axios.get(`http://127.0.0.1:8050/info?id=${id}`)
    const zsh = res.data.data.title.english
    const title = await axios.get(`http://127.0.0.1:8050/reslove?title=${zsh}`)
    const showid = title.data.showId
    const data = await axios.get(`http://127.0.0.1:8050/stream?showId=${showid}&ep=${ep}&all=true`)
    return data.data
  } catch {
    return null
  }
}
