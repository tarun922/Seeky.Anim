import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { get_info } from "../forker/getinfo"
import AnimeTop from "./helper/animeTop"
import style from "./anime.module.css"
import Episodes from "./helper/episods"

const AnimeDetails = () => {
  const parm = useParams()
  const [data, setdata] = useState(null)
  useEffect(() => {
    let ignore = false

    get_info(parm.id).then((res) => {
      if (!ignore) setdata(res)
    })

    return () => {
      ignore = true
    }
  }, [parm.id])
  if (!data) return (
    <div className={style["loader"]}>
      <div className={style["petals"]}>
        <span className={style["petal"]} />
        <span className={style["petal"]} />
        <span className={style["petal"]} />
        <span className={style["petal"]} />
        <span className={style["petal"]} />
        <span className={style["petal"]} />
        <span className={style["petal"]} />
        <span className={style["petal"]} />
      </div>

      <div className={style["shuriken"]} />
      <p className={style["loaderText"]}>Loading</p>
      <div className={style["loaderBar"]} />
    </div>
  )
  return (
    <div className={style["detail"]} >
      <AnimeTop {...data} />
      <Episodes {...data} />
    </div>
  )

}

export default AnimeDetails
