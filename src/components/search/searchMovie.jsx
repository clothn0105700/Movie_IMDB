import React from "react";
import { AiFillStar } from "react-icons/Ai";
import "./searchMovie.css";
import Noimg from "../../assets/NoImg.png";

const searchMovie = ({ result }) => {
  console.log(result);
  return (
    <div className="search-box">
      <div className="movie-box">
        {result.map((movie) => {
          return (
            <div key={movie.id} className="card-box">
              <div className="img-box">
                <img
                  src={
                    movie.poster_path == null
                      ? Noimg
                      : `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                  }
                  alt=""
                  className="search-img"
                />
                <span className="imdb-rate">
                  <AiFillStar className="star" />
                  {Math.round(movie.vote_average * 10) / 10}
                </span>
              </div>
              <div className="searh-movie-title">{movie.original_title}</div>
            </div>
          );
        })}
        {result.length !== 0 ? <div className="more">more</div> : <span></span>}
      </div>
    </div>
  );
};

export default searchMovie;
