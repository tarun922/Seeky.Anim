import { useContext } from "react"

import { ScreenContext } from "../context/Screen"
import LeftBar from "./leftsidebar/left"
import RightBar from "./rightsidebar/RightBar"


const Final = () => {
  const { screen, setScreen } = useContext(ScreenContext)

  return (
    <>
      {LeftBar(setScreen)}
      {RightBar(screen)}
    </>
  )
}

export default Final
