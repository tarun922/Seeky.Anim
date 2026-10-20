import { useState } from "react";
import Carsol_sp from "./carsol_support";
import Cleaner from "../cleaner/cleaner";

const Carsol = (prop)=>{
  const [counter, setcounter] = useState(0)
  const data = Cleaner(prop)
  const id = setInterval(() => {
    if (counter < data.length) {
      setcounter(counter + 1)
    } else if (counter >= data.length) {
      setcounter(0)
    }
  }, 3000);

  return (
    <div className="mainCarsol">
      <div className="Current">
        {Carsol_sp(data[counter])}
      </div>

      <div className="counter">
        {counter}
      </div>
    </div>
  )
}

export default Carsol
