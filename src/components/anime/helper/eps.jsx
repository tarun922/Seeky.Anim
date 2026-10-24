
import style from "../anime.module.css"
import { Play } from 'lucide-react';
import { ArrowBigDownDash } from 'lucide-react';
import { SquarePlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const Eps = ({ ep , id ,epn}) => {
  const navigation = useNavigate()
  const work = () => {
    navigation(`/stream/${id}/${epn}`)
  }
  if (ep == null) return (
    <div>empty </div>
  )

  return (
    <div className={style["episode"]}>
      <img className={ style["episode-img"]} src={ep.image} alt="image"  />
      <div className={style["epnum"]}>
        {ep.number}
      </div>
      <div className={style["epname"]}>
        {ep.name}
      </div>
      <button className={style["play"]} onClick={()=>{work()}}>
        <Play />
      </button>
      <button className={style["download"]}>
        <ArrowBigDownDash />
      </button>
      <button className={style["add-playlist"]}>
        <SquarePlus />
      </button>
    </div>
  )

}

export default Eps
