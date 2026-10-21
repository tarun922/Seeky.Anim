
import { useState, useEffect } from "react";
import Carsol_sp from "./carsol_support";
import Cleaner from "../cleaner/cleaner";
import style from "./carsol.module.css"
const Carsol = (prop) => {
  const [counter, setcounter] = useState(0);
  const data = Cleaner(prop);

  useEffect(() => {
    if (!data?.length) return;

    const id = setInterval(() => {


      setcounter((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(id);
  }, [data?.length]);

  if (!data?.length) return <div>No anime data</div>;

  const currentIndex = counter % data.length;

  return (
    <div className={style["mainCarsol"]}>
      <div className={style["Current"]} key={currentIndex}>
        <Carsol_sp {...data[currentIndex]} />
      </div>

      <div className={style["counter"]}>
        {currentIndex + 1} / {data.length}
      </div>
    </div>
  );
};

export default Carsol;
