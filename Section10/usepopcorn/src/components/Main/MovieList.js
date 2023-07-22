import { useState } from "react";
import { tempMovieData } from "../../Data";
import Movie from "./Movie";

export default function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
