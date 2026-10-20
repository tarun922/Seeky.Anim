import { Routes, Route } from 'react-router-dom';
import { Screen } from "./context/Screen"; // Default import (Vite/Fast Refresh compliant)

import Search from './components/rightsidebar/search/search';
import Downloads from './components/rightsidebar/downloads/downloads';
import Playlist from './components/rightsidebar/playlist/playlist';
import Settings from './components/rightsidebar/user/user';
import RightBar from './components/rightsidebar/RightBar';
import LeftBar from './components/leftsidebar/left';
import AnimeDetails from './components/anime/animeDetails';

const App = () => {
  return (
    // 1. Ek hi baar poore App ko Screen Provider se wrap kar diya
    <Screen>
      <div >

        {/* 2. LeftBar ko sahi component syntax se render kiya */}
        <LeftBar />

        {/* 3. Routes setup clean ho gaya */}
        <Routes>
          <Route path="/" element={<RightBar />} />
          <Route path="/search" element={<Search />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/anime/:id" element={<AnimeDetails />} />
        </Routes>
      </div>
    </Screen>
  )
};


export default App;
