"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const src1 = "/images/christmas.JPG";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.431073946716!2d-121.8946145083316!3d37.33230200016279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fccbb29baaaaf%3A0x19745c4358315d95!2sChristmas%20In%20The%20Park!5e0!3m2!1sen!2sus!4v1687324454567!5m2!1sen!2sus";
  const caption1 =
    "Our first Christmas together was special hehe. Let's make cookies this year";
  const src2 = "/images/hamoonbae.gif";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.1794641564366!2d-122.44381173966038!3d37.43398185526393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f0b6387226d6b%3A0x26fdf75aa4885b1e!2sThe%20Ritz-Carlton%2C%20Half%20Moon%20Bay!5e0!3m2!1sen!2sus!4v1687324372838!5m2!1sen!2sus";
  const caption2 = "What a great golf swing!!!";
  const src3 = "/images/napa.JPG";
  const location3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549158.2165592341!2d-122.44231852699266!3d38.04924803789507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80845b39149c016d%3A0x1008c5618dc4ee2!2sCastello%20di%20Amorosa!5e0!3m2!1sen!2sus!4v1687324525544!5m2!1sen!2sus";
  const caption3 =
    "Drinking wine with you is so much fun, and taking wine tours is even more fun. Remember how our tour guide said Seoul? lol";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Winter 2023!!!
          <br />
          This winter was MAGICAL!
          <br />
          Getting to spend real time with you every day in America, showing you
          some of my favorite things was so great.
          <br />
          Being your tour guide and BF was lovely, and playing golf with you was
          so much fun!
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <ImageSlider
              imageSrc={src1}
              caption={caption1}
              mapLocation={location1}
            />
          </div>
          <div className={styles.item}>
            <ImageSlider
              imageSrc={src2}
              caption={caption2}
              mapLocation={location2}
            />
          </div>
          <div className={styles.item}>
            <ImageSlider
              imageSrc={src3}
              caption={caption3}
              mapLocation={location3}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
