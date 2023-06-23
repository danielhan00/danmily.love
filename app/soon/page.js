"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";
import CountdownTimer from "/components/CountdownTimer";

export default function Home() {
  const src1 = "/images/airport.gif";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d405068.3905503911!2d126.74705946671097!3d37.517426748554236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b9a833a5efa59%3A0x8d4ba096cb5cbed4!2sIncheon%20International%20Airport!5e0!3m2!1sen!2sus!4v1687553420345!5m2!1sen!2sus";
  const caption1 = "We will recreate this video hehe";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Soon...
          <br />
          <CountdownTimer />
          <br />
          The next chapter of our lives is unfolding. Let&apos;s continue on the
          amazing path we&apos;ve started on and build a great future together.
          You mean so much to me, and I cannot wait until I can say these words
          in person.
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <ImageSlider
              imageSrc={src1}
              caption={caption1}
              mapLocation={location1}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
