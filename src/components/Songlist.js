import React, {Fragment} from 'react';
import SongItem from './SongItem';


const Songlist = ({songs}) =>{

  const songsList = songs.map((song, index) => {
    return (
      <SongItem song={song} key={index} index={index} />
    )
  })

  return (
    <Fragment>
    {songsList}
    </Fragment>
  )

}

 export default Songlist;
