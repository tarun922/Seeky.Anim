import { House } from 'lucide-react';
import { UserRoundArrowLeft } from 'lucide-react';
import { Search } from 'lucide-react';
import { FolderDown } from 'lucide-react';
import { ListVideo } from 'lucide-react';
import style from "./left.module.css";
import { ScreenContext } from '../../context/Screen';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const LeftBar = () => {
  const { setScreen } = useContext(ScreenContext)
  const navigate=useNavigate()
  return (
    <div className={style["leftbar"]}>
      <div className={style["home"]}>
        <button className={style["button"]} onClick={() => { setScreen("home"); navigate("/") }}>
          <House></House>
        </button>

      </div>
      <div className={style["search"]} >
        <button className={style["button"]} onClick={() => { setScreen("search"); navigate("/search") }}>
             <Search></Search>
        </button>

      </div>
      <div className={style["downloads"]}>
        <button className={style["button"]} onClick={() => { setScreen("downloads") ; ; navigate("/downloads") }} >
           <FolderDown></FolderDown>
        </button>

      </div>
      <div className={style["playlist"]}>
        <button className={style["button"]} onClick={() => { setScreen("playlist"); ; navigate("/playlist") }}>
             <ListVideo></ListVideo>
        </button>

      </div>
      <div className={style["user"]}>
        <button className={style["button"]} onClick={() => { setScreen("user"); ; navigate("/settings") }}>
          <UserRoundArrowLeft></UserRoundArrowLeft>
        </button>

      </div>
    </div>
  )
}

export default LeftBar
