// components/NavBar.js

import Link from "next/link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/welcome">For Emily</Link>
        </li>
        <li>
          <Link href="/winter2021">Winter 2021</Link>
        </li>
        <li>
          <Link href="/spring2022">Spring 2022</Link>
        </li>
        <li>
          <Link href="/summer2022">Summer 2022</Link>
        </li>
        <li>
          <Link href="/fall2022">Fall 2022</Link>
        </li>
        <li>
          <Link href="/winter2023">Winter 2023</Link>
        </li>
        <li>
          <Link href="/oneyear">One Year!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
