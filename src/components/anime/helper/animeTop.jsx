
import style from "../anime.module.css"
const AnimeTop = (prop)=>{
  return (
    <div className={style["top"]}>
      <img className={style["glow"]} src={prop.banner} alt="" />
      <div className={style["banner"]}>
        <img src={prop.banner} alt="banner" />
      </div>
      <div className={style["overlay"]} />
      <div className={style["info"]}>
        <div className={style["B-name"]}> {prop.name }</div>
        <div className={style["B-rating"]}> { prop.rating }</div>
        <div className={style["B-ep-count"]}> {prop.episodeCount }</div>
      </div>
      <p className={style["B-discription"]}  > {prop.description}</p>
    </div>
  )
}

export default AnimeTop
