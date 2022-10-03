import React from "react";
import {
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

function SongPlayerControls({ isPlaying, setIsPlaying, skipForward, skipBackward }) {
  return (
    <div className="song_player_controls">

      <button className="prev_btn" onClick={skipBackward}>
        <MdSkipPrevious />
      </button>

      <button className="play_btn" onClick={() => setIsPlaying(!isPlaying)}>
        {
            isPlaying ? <MdPause /> : <MdPlayArrow />
        }
      </button>

      <button className="next_btn" onClick={skipForward}>
        <MdSkipNext />
      </button>
    </div>
  );
}

export default SongPlayerControls;
