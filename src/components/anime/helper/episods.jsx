import style from "../anime.module.css"
import Eps from "./eps"


const Episodes = ({ episodes , id }) => {
  if (episodes == null) {
    return (
      <div> blank </div>
    )
  }
  return (
    <div className={style["episods-grid"]}>
      {episodes.map((ep,i) => {
          return (
            <Eps ep = {ep} id = {id} epn={i+1}/>
        ) })}
    </div>

  )
}

export default Episodes
