import style from "./card.module.css"

const AnimeCard = (prop) => {
  return (
    <div className={style["anime-card"]}>
      <img className={style["cover-bg"]} src={prop.coverImage.extraLarge} alt="" />
      <div className={style["cover-overlay"]} />

      <div className={style.banner}>
        <img className={style["banner-img"]} src={prop.bannerImage || prop.coverImage?.large} alt={prop.title.english} />
        <div className={style["banner-blur"]} />
      </div>

      <img className={style.logo} src={prop.coverImage.large} alt={prop.title.english} />

      <div className={style.info}>
        <h2 className={style.title}>{prop.title.english}</h2>
        <span className={style["ep-count"]}>{prop.episodes} Episodes</span>
        <span className={style["avg-score"]}>{prop.averageScore} AverageScore</span>
        <p className={style.desc}>{prop.description}</p>
        <button className={style["play-btn"]}>▶ Play</button>
      </div>
    </div>
  )
}

export default AnimeCard
