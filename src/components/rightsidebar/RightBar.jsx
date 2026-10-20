
import style from "./RightBar.module.css"
import Home from "./home/home";
import data from "../../context/raw";
import Search from "./search/search";
import Downloads from "./downloads/downloads";
import Playlist from "./playlist/playlist";
import Settings from "./user/user";
import { ScreenContext } from "../../context/Screen";
import { useContext } from "react";


const RightBar = () => {
  const { screen } = useContext(ScreenContext)

  if (screen === "home") {
    return (
      <div className={style["rightbar"]}>
        {Home(data)}
      </div>
    )
  }else if (screen === "search") {
    return (
      <div className={style["rightbar"]}>
        {Search()}
      </div>
    )
  }else if (screen === "downloads") {
    return (
      <div className={style["rightbar"]}>
        {Downloads()}
      </div>
    )
  }else if (screen === "playlist") {
    return (
      <div className={style["rightbar"]}>
        {Playlist()}
      </div>
    )
  }else if (screen === "user") {
    return (
      <div className={style["rightbar"]}>
        {Settings()}
      </div>
    )
  }

}

export default RightBar
