import WatchMovie from "./WatchMovie";

export default function WatchMovieList({ watched, onRemovedMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchMovie
          movie={movie}
          key={movie.imdbID}
          onRemovedMovie={onRemovedMovie}
        />
      ))}
    </ul>
  );
}
