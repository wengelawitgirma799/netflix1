import React, { useEffect, useState } from 'react';
import requests from '../../../utils/Requests';
import axios from '../../../utils/Axios';
import "./banner.css"
const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request.data.results); // Check if the data is fetched correctly
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + '...':str;
  }

  return (
    <div
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button_play'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        {/* Uncomment and use the truncate function if needed */}
        { <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>}
      </div>
      <div className='banner_fadeBottom' />
    </div>
  );
};

export default Banner;
