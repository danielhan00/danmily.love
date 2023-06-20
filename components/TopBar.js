import React from "react";
import styles from "./TopBar.module.css";
import Navbar from "./NavBar.js";

const TopBar = () => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="/">
            <img
              src="/images/lockbutton.png"
              alt="'"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </div>
        <div className={styles.middle}>
          <a href="/welcome">
            <img
              src="/images/wordart.png"
              alt="'"
              style={{ width: "240px", height: "60px" }}
            />
          </a>
        </div>
        <div className={styles.right}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
