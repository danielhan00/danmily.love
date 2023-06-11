import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "/components/NavBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <div>welcome page!</div>
      <img
        src="/danmily.jpg"
        width={350}
        height={500}
        alt="danmily golf lol"
      ></img>
    </main>
  );
}
