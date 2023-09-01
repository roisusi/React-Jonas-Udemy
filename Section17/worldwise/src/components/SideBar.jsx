import React from "react";
import styles from "../css/Sidebar.module.css";
import Logo from "../pages/Logo.jsx";
import AppNav from "./AppNav.jsx";
import { Outlet } from "react-router-dom";

function SideBar(props) {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      {/*like children*/}
      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
