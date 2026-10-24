import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Get_S from "./Sf"
import Player from "./page/player"
import style from "./stream.module.css"
const Stream = () => {
  const { id, ep } = useParams()
  const [data, setdata] = useState(null)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState(null)

  useEffect(() => {
    // purana response naye ko overwrite na kare
    let ignore = false

    setLoading(true)
    setErr(null)
    setdata(null)

    Get_S(id, ep)
      .then((res) => {
        if (ignore) return
        if (!res) {
          setErr("Stream nahi mili")      // Get_S null de to error dikhao
        } else {
          setdata(res)                    // res.data nahi, poora res
        }
      })
      .catch(() => {
        if (!ignore) setErr("Kuch galat ho gaya")
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [id, ep])

  return (
    <div style={style["stream-ui"]}>
      {loading && <p className={style["loading-s"]}>Loading...</p>}
      {err && <p>{err}</p>}
      {data && <Player url={data.url} suburl={data.subLink} name={data.name} epname={data.epname} ep={data.ep} dub={false} id={id} />}

    </div>
  )
}

export default Stream
