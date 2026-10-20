import { House } from 'lucide-react';
import { UserRoundArrowLeft } from 'lucide-react';
import { Search } from 'lucide-react';
import { FolderDown } from 'lucide-react';
import { ListVideo } from 'lucide-react';
import style from "./left.module.css";

const LeftBar = () => {
  return (
    <div className={style["leftbar"]}>
      <div className={style["home"]}>
        <button className={style["button"]}>
          <House></House>
        </button>

      </div>
      <div className={style["search"]}>
        <button className={style["button"]}>
             <Search></Search>
        </button>

      </div>
      <div className={style["downloads"]}>
        <button className={style["button"]} >
           <FolderDown></FolderDown>
        </button>

      </div>
      <div className={style["playlist"]}>
        <button className={style["button"]}>
             <ListVideo></ListVideo>
        </button>

      </div>
      <div className={style["user"]}>
        <button className={style["button"]}>
          <UserRoundArrowLeft></UserRoundArrowLeft>
        </button>

      </div>
    </div>
  )
}

export default LeftBar
