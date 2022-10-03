import React from "react";

function SongPlayerDetails({ song }) {
  return (
    <div className="song_player_details">
      <div className="song_cover">
        <img
          src="https://media.istockphoto.com/photos/bright-artwork-beautiful-romantic-girl-on-drawn-colorful-floral-picture-id1360697473?b=1&k=20&m=1360697473&s=170667a&w=0&h=YQDhjYcmNKCAsIz9Xw3VHQHz3_Lmx29cGYKqNEP8498="
          alt="cover photo"
        />
      </div>

      <h3 className="song_title">{song.title}</h3>

      <h4 className="song_artist">{song.artist}</h4>
    </div>
  );
}

export default SongPlayerDetails;
