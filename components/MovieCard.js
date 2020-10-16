import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="movie">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />

      <div className="movie-details">
        <div>
          <h1 className="movie-title">Title: {movie.title}</h1>
          <p className="movie-desc">
            <em>Desc: {movie.overview}</em>
          </p>
        </div>
        <div className="movie-info">
          <p>
            <small>
              <strong>Release:</strong> {movie.release_date}
            </small>
          </p>
          <p>
            <small>
              <strong>Rating:</strong> {movie.vote_average}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
