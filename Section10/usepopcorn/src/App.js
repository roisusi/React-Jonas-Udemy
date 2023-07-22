import NavBar from "./components/Nav/NavBar";
import Main from "./components/Main/Main";
import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./Data";
import Logo from "./components/Nav/Logo";
import Search from "./components/Nav/Search";
import NumResult from "./components/Nav/NumResults";
import Box from "./components/Main/Box";
import WatchBox from "./components/Main/WatchBox";
import MovieList from "./components/Main/MovieList";
import WatchSummary from "./components/Main/WatchSummary";
import WatchMovieList from "./components/Main/WatchMovieList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResult movies={movies} />
      </NavBar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchSummary watched={watched} />
          <WatchMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
