import style from "./playlist.module.css"
import Pcard from "./support/playlistC"
import data from "../../../context/raw"
import Cleaner from "../../feed/cleaner/cleaner"
const Playlist = () => {
  const cleaned = Cleaner(data)
  return (
    <div className={style["playlist"]}>
      <p >this is playlist page</p>
      {Pcard(cleaned[0])}
    </div>
  )
}

export default Playlist
