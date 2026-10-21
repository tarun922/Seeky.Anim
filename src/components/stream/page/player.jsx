import { useState } from "react"
import style from "../stream.module.css"
import LecturePlayer from "./prp"
const Player = ({url , suburl , name ,epname, ep, dub  }) => {
  const [murl, mseturl] = useState(null)
  useState(() => {
    if (!url) {

        return (

          <div className={style["notfound"]}>not found </div>
        )

    }
    mseturl(url)
  }, [murl]);
  return (
    <div className={style["player-body"]}>
      <div className={style["player-top"]} >
        <div className={style["player-anime-name"]}> {name}</div>
        <div className={style["player-anime-epname"]}> {epname}</div>
        <div className={style["player-anime-ep"]}> {ep}</div>
        <div className={style["player-anime-dub"]}> {dub}</div>

      </div>
      <div className={style["player-main"]}  >
        <LecturePlayer url = {url } suburl={suburl} />
      </div>
    </div>

  )

}

export default Player
