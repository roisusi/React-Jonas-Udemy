import React from "react";
import SideBar from "../components/SideBar.jsx";
import styles from "../css/AppLayout.module.css";
import Map from "../components/Map.jsx";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
