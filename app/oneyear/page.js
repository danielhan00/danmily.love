"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const danmilySrc = "/images/danmily.jpg";
  const danmilyLocation =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6374630490595!2d-121.97773162312812!3d37.39840507208262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c6db85b8ab%3A0x72af1434e8036575!2sCalifornia&#39;s%20Great%20America!5e0!3m2!1sen!2sus!4v1687235812752!5m2!1sen!2sus";
  const danmilyCaption =
    "danmily is an awesome part of our lives, make sure to not strand it on the veranda!";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          One year, HOLY CRAP!
          <br />
          p.s. I love you
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
