import React from "react";
import styles from "./TopBar.module.css";
import Navbar from "./NavBar.js";

const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <a href="/welcome">
          <img
            src="/images/homebutton.png"
            alt="'"
            style={{ width: "40px", height: "40px" }}
          />
        </a>
      </div>
      <div className={styles.middle}>
        <a href="/welcome">danmily &lt;3</a>
      </div>
      <div className={styles.right}>{<Navbar />}</div>
    </div>
  );
};

export default TopBar;
