import Card from "../../feed/Acard/Card"
import Carsol_sp from "../../feed/Carsol/carsol_support"
import Cleaner from "../../feed/cleaner/cleaner"
import style from "./home.module.css"

const Home = (data) => {

  return (
    <div className={style["homepage"]}>
      { Carsol_sp(Cleaner(data)[0]) }
      {Card(data)}
    </div>
  )

}

export default Home
