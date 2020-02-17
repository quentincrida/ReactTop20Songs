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


//
// if(!props.country) return null;
// return (
//   <section>
//   <h3>
//   {props.country.name}
//   </h3>
//   <p>Capital: {props.country.capital}</p>
//   <p>Population: {props.country.population}</p>
//   </section>
// )
// }
//
// export default CountryDetail;
