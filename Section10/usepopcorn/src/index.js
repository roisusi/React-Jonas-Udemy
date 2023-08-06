import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/*<App />*/}
//     <StarRating maxRating={10} />
//     <StarRating
//       size={24}
//       color={"red"}
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       defaultRating={3}
//     />
//     <Test />
//   </React.StrictMode>
// );
//
// function Test() {
//   const [movieRating, setMovieRating] = React.useState(0);
//   return (
//     <div>
//       <StarRating color={"blue"} maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie rated {movieRating} </p>
//     </div>
//   );
// }
