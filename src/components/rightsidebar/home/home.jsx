import Card from "../../feed/Acard/Card"
import Carsol_sp from "../../feed/Carsol/carsol_support"
import Carsol from "../../feed/Carsol/carsol"
import Cleaner from "../../feed/cleaner/cleaner"
import style from "./home.module.css"

const Home = (data) => {

  return (
    <div className={style["homepage"]}>

      { Carsol(data) }
      {Card(data)}
    </div>
  )

}

export default Home
