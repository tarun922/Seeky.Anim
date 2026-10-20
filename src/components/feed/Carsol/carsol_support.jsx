
import style from "./carsol.module.css";

const Carsol_sp = (prop) => {

  const description = prop.description


  return (
    <div className={style["element"]}>
      {/* Background image */}
      <div className={style["bg-img"]}>
        <img
          src={prop.coverImage.extraLarge}
          alt={prop.title.english || "Anime cover"}
        />
      </div>

      {/* Background overlay */}
      <div className={style["overlay"]}></div>

      {/* Top-left logo/poster */}

      <img
        className={style["logo"]}
        src={prop.coverImage.large}
        alt={prop.title.english || "Anime poster"}
      />

      {/* Top-right floating description */}
      <div className={style["top-row"]}>
        <div className={style["desc-panel"]}>
          <div className={style["desc"]}>
            {description || "No description available."}
          </div>
        </div>
      </div>

      {/* Bottom-left title */}
      <div className={style["carsol-body"]}>
        <div className={style["name"]}>
          {prop.title.english || prop.title.romaji}
        </div>
      </div>

      {/* Bottom-right: episodes, rating and Play */}
      <div className={style["bottom-actions"]}>
        <div className={style["meta-row"]}>
          {prop.episodes != null && (
            <div className={style["episode"]}>
              {prop.episodes}
            </div>
          )}

          {prop.averageScore != null && (
            <div className={style["rating"]}>
              {(prop.averageScore / 10).toFixed(1)}
            </div>
          )}
        </div>

        <button
          type="button"
          className={style["play"]}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Carsol_sp;
