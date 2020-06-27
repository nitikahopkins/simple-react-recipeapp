import React from "react";

const AudioPlayer = ({ song }) => {
  console.log(song, song.title);
  return (
    <figure>
      <figcaption>Play {song.title} </figcaption>
      <audio className="player" src={song.src} controls autoPlay loop></audio>
    </figure>
  );
};

export default AudioPlayer;
