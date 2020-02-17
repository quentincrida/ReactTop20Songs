import React from 'react';


// function SongItem (props){
//   return (
//     <div>
//     <h4>{props.children}</h4>
//     <p>{props.song}</p>
//     </div>
//   )
// }

const SongItem = (props) => {
  if(!props.song) return null;
  return (
    <section>
    <h3>
    {props.song.title}
    </h3>
    </section>
  )
}
export default SongItem;
