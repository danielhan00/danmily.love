"use client";
import styles from "./page.module.css";
import Navbar from "/components/NavBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const danmilySrc = "/images/danmily.jpg";
  const danmilyLocation =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12682.126376195074!2d-121.8895288!3d37.3772588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcc6d22794453%3A0xc4129100629f5160!2sSan%20Jose%20Municipal%20Golf%20Course!5e0!3m2!1sen!2sus!4v1686629857362!5m2!1sen!2sus";
  const danmilyCaption =
    "danmily is an awesome part of our lives, make sure to not strand it on the veranda!";
  return (
    <main>
      <Navbar />
      <div className={styles.main}>
        <div>
          Dear Emily, we've been dating one whole year. Let's make so mamy more
          wonderful memories in the one!
        </div>
        <ImageSlider
          imageSrc={danmilySrc}
          caption={danmilyCaption}
          mapLocation={danmilyLocation}
        />
        <ImageSlider
          imageSrc={danmilySrc}
          caption={danmilyCaption}
          mapLocation={danmilyLocation}
        />
        <ImageSlider
          imageSrc={danmilySrc}
          caption={danmilyCaption}
          mapLocation={danmilyLocation}
        />
      </div>
    </main>
  );
}
