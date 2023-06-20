import React, { useState } from "react";
import styles from "./NavBar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isLinkActive = (link) => {
    return location.pathname === link;
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
            <a
              href="/welcome"
              className={`${styles.dropdownItem} ${
                isLinkActive("/welcome") ? styles.active : ""
              }`}
            >
              Home Page
            </a>
            <a
              href="/oneyear"
              className={`${styles.dropdownItem} ${
                isLinkActive("/oneyear") ? styles.active : ""
              }`}
            >
              One Year!
            </a>
            <a
              href="/winter2021"
              className={`${styles.dropdownItem} ${
                isLinkActive("/winter2021") ? styles.active : ""
              }`}
            >
              Winter 2021
            </a>
            <a
              href="/spring2022"
              className={`${styles.dropdownItem} ${
                isLinkActive("/spring2022") ? styles.active : ""
              }`}
            >
              Spring 2022
            </a>
            <a
              href="/summer2022"
              className={`${styles.dropdownItem} ${
                isLinkActive("/summer2022") ? styles.active : ""
              }`}
            >
              Summer 2022
            </a>
            <a
              href="/fall2022"
              className={`${styles.dropdownItem} ${
                isLinkActive("/fall2022") ? styles.active : ""
              }`}
            >
              Fall 2022
            </a>
            <a
              href="/winter2023"
              className={`${styles.dropdownItem} ${
                isLinkActive("/winter2023") ? styles.active : ""
              }`}
            >
              Winter 2023
            </a>
            <a
              href="/spring2023"
              className={`${styles.dropdownItem} ${
                isLinkActive("/spring2023") ? styles.active : ""
              }`}
            >
              Spring 2023
            </a>
            <a
              href="/soon"
              className={`${styles.dropdownItem} ${
                isLinkActive("/soon") ? styles.active : ""
              }`}
            >
              Soon...
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
