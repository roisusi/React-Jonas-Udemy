import React from "react";
import styles from "../css/Sidebar.module.css";
import Logo from "../pages/Logo.jsx";
import AppNav from "./AppNav.jsx";

function SideBar(props) {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
