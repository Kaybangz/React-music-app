import React from 'react';
import SongPlayerDetails from './SongPlayerDetails';
import SongPlayerControls from './SongPlayerControls';

function SongPlayer({song, nextSong}) {
  return (
    <div className='song_player'>
        <audio></audio>
        <h3>Now playing</h3>
        
        {/* Details */}
        <SongPlayerDetails song={song}/>

        {/* Controls */}
        <SongPlayerControls />
        <p><b>Next song: </b>{nextSong.title} by {nextSong.artist}...</p>
    </div>
  )
}

export default SongPlayer