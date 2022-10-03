import { useState } from 'react'
import './App.css'
import {songs} from "./assets/songs";
import SongPlayer from './components/SongPlayer';

function App() {
  console.log(songs);

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(currentSong + 1);

  return (
    <div className="Main">
      <SongPlayer song={songs[currentSong]} nextSong={songs[nextSong]} />
    </div>
  )
}

export default App
