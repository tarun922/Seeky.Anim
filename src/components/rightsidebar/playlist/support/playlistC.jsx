
import { useNavigate } from "react-router-dom"
import style from "../playlist.module.css"

const Pcard = (prop) => {
  const navigate = useNavigate()
  const work = (id) => {
    navigate(`/anime/${id}`)
  }
  return (
    <div className={style["Pcard"]}>
      <div className={style.banner}>
        <img className={style["banner-img"]} src={prop.bannerImage || prop.coverImage?.large} alt={prop.title.english} />
        <div className={style["banner-blur"]} />
      </div>
      <div className="pBanner">
        <img className={ style.pCimage} src={prop.coverImage.extraLarge} alt="" />
      </div>
      <div className={style.info}>
        <h2 className={style.title}>{prop.title.english}</h2>
        <span className={style["ep-count"]}>{prop.episodes} Episodes</span>
        <span className={style["avg-score"]}>{prop.averageScore} AverageScore</span>
        <p className={style.desc}>{prop.description.slice(0,200)}</p>
        <button onClick={() => { work(prop.id)}} className={style["play-btn"]}>▶ Play</button>
      </div>
    </div>
  )

}

export default Pcard
