import { useState } from "react";
import { tempWatchedData } from "../../Data";
import WatchSummary from "./WatchSummary";
import WatchMovieList from "./WatchMovieList";

export default function WatchBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchSummary watched={watched} />
          <WatchMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
