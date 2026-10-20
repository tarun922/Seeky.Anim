
import data from "./raw"
import Card from './components/feed/Acard/Card'
import Carsol_sp from "./components/feed/Carsol/carsol_support"
import Cleaner from "./components/feed/cleaner/cleaner"
import LeftBar from "./components/feed/leftsidebar/left"

const App = () => {
  return (
    <>
      {LeftBar()}
      {Carsol_sp(Cleaner(data)[1])}
      {Card(data)}
    </>
  )
}

export default App
