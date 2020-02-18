import React, {Fragment} from 'react';


const SongItem = ({song, index}) => {
  
  if(!song) return null;

  return (
    <>
    <h3>
    {song.title.label}
    </h3>
    <p>Rank: {index + 1}</p>
    </>
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
