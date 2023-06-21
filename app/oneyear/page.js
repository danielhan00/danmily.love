"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const danmilySrc = "/images/cutie.JPG";
  const danmilyLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62329.45382501134!2d-74.00788498830427!3d40.78018347900156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2sCentral%20Park!5e0!3m2!1sen!2sus!4v1687322281845!5m2!1sen!2sus";
  const danmilyCaption = "The prettiest girl in the multiverse";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          One year, HOLY CRAP!
          <br />
          This year has been truly amazing. Throughout each page, I've chosen a
          few photos that I really think encapsulate our experience throughout
          the year. Enjoy!
          <br />
          p.s. You are actually so beautiful. Looking through pictures to choose
          a few was so hard because you look perfect and pretty in each one
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <ImageSlider
              imageSrc={danmilySrc}
              caption={danmilyCaption}
              mapLocation={danmilyLocation}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
