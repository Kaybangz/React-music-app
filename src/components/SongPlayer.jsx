import React, { useState, useEffect, useRef } from "react";
import SongPlayerDetails from "./SongPlayerDetails";
import SongPlayerControls from "./SongPlayerControls";

function SongPlayer({ currentSong, setCurrentSong, nextSong, songs }) {
  
  const audioElem = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {

    if (isPlaying) 
    {
      audioElem.current.play();
    } 
    else 
    {
      audioElem.current.pause();
    }

  }, []);


  const skipForward = () => {
    setCurrentSong(() => {
      let curr = currentSong;
      curr++;

      if (curr > songs.length - 1) {
        curr = 0;
      }

      return curr;
    });
  };

  const skipBackward = () => {
    setCurrentSong(() => {
      let curr = currentSong;
      curr--;

      if (curr < 0) {
        curr = songs.length - 1;
      }

      return curr;
    });
  };

  return (
    <div className="song_player">
      <audio src={songs[currentSong].song_src} ref={audioElem}></audio>
      <h3>Now playing</h3>

      {/* Details */}
      <SongPlayerDetails song={songs[currentSong]} />

      {/* Controls */}
      <SongPlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipForward={skipForward}
        skipBackward={skipBackward}
      />

      <marquee>
        <b>Next song: </b>
        {songs[nextSong].title} by {songs[nextSong].artist}...
      </marquee>
    </div>
  );
}

export default SongPlayer;
