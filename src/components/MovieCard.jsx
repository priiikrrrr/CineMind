import React, { useState } from 'react'
import { IMG_CDN_URL } from '../utils/constants'
import PlayTrailer from './PlayTrailer';
const MovieCard = ({posterPath,movieId}) => {
  if(!posterPath) return null;
  const [togglePlayTrailer,settogglePlayTrailer]=useState(false);
  const handleClick=()=>{
    // console.log(movieId)
    settogglePlayTrailer(true);
  }
  return (<div>

    {
      togglePlayTrailer ? <PlayTrailer settogglePlayTrailer={settogglePlayTrailer} movieId={movieId} /> :
      
      <div className='w-12 md:w-48 cursor-pointer' onClick={handleClick}>
      <img src={IMG_CDN_URL + posterPath} alt="Movie Card" />
      </div>
    }
    </div>
  )
}

export default MovieCard