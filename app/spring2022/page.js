"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const danmilySrc = "/images/danmily.jpg";
  const danmilyLocation =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12682.126376195074!2d-121.8895288!3d37.3772588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc6d22794453%3A0xc4129100629f5160!2sSan%20Jose%20Municipal%20Golf%20Course!5e0!3m2!1sen!2sus!4v1686629857362!5m2!1sen!2sus";
  const danmilyCaption =
    "danmily is an awesome part of our lives, make sure to not strand it on the veranda!";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Welcome, Emily, 수영, my love!
          <br />
          This website is dedicated to you and to our One Year Anniversary.
          <br />
          <br />
          Please navigate to this website's subpages. On each subpage, you will
          find something to remember our wonderful one year together. Below is
          an example of how I set up each picture, try it out! Enjoy!!
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
          <div className={styles.item}>
            <ImageSlider
              imageSrc={danmilySrc}
              caption={danmilyCaption}
              mapLocation={danmilyLocation}
            />
          </div>
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
