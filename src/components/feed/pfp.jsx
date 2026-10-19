const AnimeCard = (prop) => {
  return (
    <div className="anime-card">
      <img className="cover-bg" src={prop.cover} alt="" />
      <div className="cover-overlay" />

      <div className="banner">
        <img className="banner-img" src={prop.banner} alt={prop.name} />
        <div className="banner-blur" />
      </div>

      <img className="logo" src={prop.logo} alt={prop.name} />

      <div className="info">
        <h2 className="title">{prop.name}</h2>
        <span className="ep-count">{prop.episodes} Episodes</span>
        <p className="desc">{prop.desc}</p>
        <button className="play-btn">▶ Play</button>
      </div>
    </div>
  )
}

export default AnimeCard
