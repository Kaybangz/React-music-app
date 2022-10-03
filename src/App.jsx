import { useState, useEffect } from "react";
import "./App.css";
import { songs } from "./assets/songs";
import SongPlayer from "./components/SongPlayer";

function App() {

  const [currentSong, setCurrentSong] = useState(0);
  const [nextSong, setNextSong] = useState(currentSong + 1);

  useEffect(() => {

    setNextSong(() => {
      if (currentSong + 1 > songs.length - 1) 
      {
        return 0;
      } 
      else 
      {
        return currentSong + 1;
      }
    });
    
  }, [currentSong]);

  return (
    <div className="Main">
      <SongPlayer
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        nextSong={nextSong}
        songs={songs}
      />
    </div>
  );
}

export default App;
