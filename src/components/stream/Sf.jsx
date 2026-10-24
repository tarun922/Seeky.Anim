import axios from "axios"

const Get_S = async (id, ep, dubbed = false)=>{
  try {
    const res = await axios.get(`http://127.0.0.1:8050/info`,{ params: { id: id } })
    const zsh = res.data.data.title.english
    const epname = res.data.data.streamingEpisodes[ep-1].title


    const title = await axios.get(`http://127.0.0.1:8050/resolve`,{ params: { title: zsh } })
    const showid = title.data.showId
    const data = await axios.get(`http://127.0.0.1:8050/stream` , { params: { showId: showid,ep:ep,all:true } })
    const updated = { ...(data.data), epname: epname, name: zsh }
    return updated
  } catch {
    return null
  }
}

export default Get_S
