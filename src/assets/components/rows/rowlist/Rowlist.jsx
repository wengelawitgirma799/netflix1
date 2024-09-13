import React from 'react'
//import "./rowlist.css"
import Row from'../row/Row'
import requests from '../../../../utils/Requests'
const Rowlist = () => {
  return (
    <>  
     <Row
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}
    />
    
   <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
   <Row title="Top Rated "fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action movies "fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies "fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies "fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Tv Shows"fetchUrl={requests.fetchTvShows}/>
    <Row title="Documentaries "fetchUrl={requests.fetchDocumentaries}/>
    
    </>
    
   
    
  )
}

export default Rowlist
