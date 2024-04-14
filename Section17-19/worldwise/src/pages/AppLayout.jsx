import React from "react";
import SideBar from "../components/SideBar.jsx";
import styles from "../css/AppLayout.module.css";
import Map from "../components/Map.jsx";
import User from "./User.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
