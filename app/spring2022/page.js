"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const src1 = "/images/basketball.gif";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210880.81793418247!2d-122.12125320084824!3d37.26219523871554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e33d42fdfca95%3A0xe32126b1b6af1f34!2sBowlero%20San%20Jose!5e0!3m2!1sen!2sus!4v1687325922905!5m2!1sen!2sus";
  const caption1 = "You are so freaking cute when you play basketball hehe";
  const src2 = "/images/album.JPG";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45059.85826633401!2d-122.48778639832202!3d37.82158187031386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586deffffffc3%3A0xcded139783705509!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1687325889026!5m2!1sen!2sus";
  const caption2 = "Please write an album and make this the cover LOL";
  const src3 = "/images/grad.jpeg";
  const location3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8489.541147057598!2d-71.1033148407145!3d42.344984178419246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f63f253f6f%3A0xa2800dcb647a5504!2sFenway%20Park!5e0!3m2!1sen!2sus!4v1687325848201!5m2!1sen!2sus";

  const caption3 = "I was graduating and wanting to see youuuuu";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Spring 2022!!
          <br />
          Although we were so far away, going back to the east coast made me
          realize that I wanted you
          <br />
          Then, I came back and flirted HARD lol
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
