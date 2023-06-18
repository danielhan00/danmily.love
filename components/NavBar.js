import React, { useState } from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button className={styles.navbarButton} onClick={toggleDropdown}>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <a href="/welcome" className={styles.dropdownItem}>
              Home Page
            </a>
            <a href="/oneyear" className={styles.dropdownItem}>
              One Year!
            </a>
            <a href="/winter2021" className={styles.dropdownItem}>
              Winter 2021
            </a>
            <a href="/spring2022" className={styles.dropdownItem}>
              Spring 2022
            </a>
            <a href="/summer2022" className={styles.dropdownItem}>
              Summer 2022
            </a>
            <a href="/fall2022" className={styles.dropdownItem}>
              Fall 2022
            </a>
            <a href="/winter2023" className={styles.dropdownItem}>
              Winter 2023
            </a>
            <a href="/spring2023" className={styles.dropdownItem}>
              Spring 2023
            </a>
            <a href="/soon" className={styles.dropdownItem}>
              Soon...
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
