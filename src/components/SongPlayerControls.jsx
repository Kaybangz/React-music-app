import React from "react";
import {
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

function SongPlayerControls() {
  return (
    <div className="song_player_controls">
      <button className="prev_btn"><MdSkipPrevious/></button>
      <button className="play_btn"><MdPlayArrow/></button>
      <button className="next_btn"><MdSkipNext/></button>
    </div>
  );
}

export default SongPlayerControls;
