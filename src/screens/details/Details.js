import React, { useState } from "react";
import Header from "../../common/header/Header";
import "./Details.css";
import BackToHome from "./BackToHome";
import MoviePoster from "./MoviePoster";
import MovieTrailer from "./MovieTrailer";
import ArtistDetails from "./ArtistDetails";

function Details(props){
  const [movieId, setMovieId] = useState(parseInt(props.location.search.split("?id=")[1]))
  return (
    <div>
      <Header showLogin={true} showBookShow={true} />
      <div className="back-to-home">
        <BackToHome />
      </div>
      <div className="main-page">
        <div className="movie-poster">
          <MoviePoster movieId={movieId} />
        </div>
        <div className="movie-trailer">
          <MovieTrailer movieId={movieId} />
        </div>
        <div className="artist-details">
          <ArtistDetails movieId={movieId} />
        </div>
      </div>
    </div>
  )
}

export default Details;