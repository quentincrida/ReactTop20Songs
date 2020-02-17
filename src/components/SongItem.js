import React from 'react';


const SongItem = (props) => {
  if(!props.song) return null;
  return (
    <section>
    <h3>
    {props.song.title}
    </h3>
    <p>Artist: {props.song.artist}</p>
    </section>
  )
}
export default SongItem;
