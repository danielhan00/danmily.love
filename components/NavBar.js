import React, { useState } from "react";
import styles from "/Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <button className={styles.navbarButton} onClick={toggleDropdown}>
          Menu
        </button>
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropdownItem}>
              Link 1
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 2
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 3
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 4
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 5
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 6
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 7
            </a>
            <a href="#" className={styles.dropdownItem}>
              Link 8
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
