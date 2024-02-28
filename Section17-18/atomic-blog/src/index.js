import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import Appmemo from "./App-memo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*<Appmemo />*/}
  </React.StrictMode>
);
