import React, { useEffect, useState } from 'react';
import './row.css';
import axios from '../../../../utils/Axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube'; // Correct import for YouTube

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl); 
        console.log(request);
        setMovies(request.data.results);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className='row_posters'>
        {movies?.map((movie, index) => (
        
<img
  key={index}
  src={movie.poster_path ? `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` : 'fallback-image-url'}
  alt={movie.name}
  className={`row_poster ${isLargeRow ? 'row_posterLarge' : ''}`}
  onClick={() => handleClick(movie)} 
/>


        ))}
      </div>
      { <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div> }
    </div>
  );
};

export default Row;
