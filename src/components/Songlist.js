import React, {Fragment} from 'react';
import SongItem from './SongItem';


function Songlist (props){
  const songs = props.data.map((song, index) => {
    return (
      <SongItem title = {song.title.label}key={index}>{song.title}</SongItem>
    )
  })
  return (
    <Fragment>
    {songs}
    </Fragment>
  )

}

 export default Songlist;
