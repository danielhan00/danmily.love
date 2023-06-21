"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const src1 = "/images/ring.png";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9373.131104808746!2d127.01264260457658!3d37.5141417394328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca37a0fe2d579%3A0x4d7dba7195ce7353!2sSinbanpo%20Xi!5e0!3m2!1sen!2sus!4v1687325250288!5m2!1sen!2sus";
  const caption1 = "OOTD and Snapchats are so cuteeeeee";
  const src2 = "/images/bori.jpg";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203133.33399009233!2d-121.98090251102262!3d37.29612108389466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1687325150771!5m2!1sen!2sus";
  const caption2 = "Chilling with Bori";
  const src3 = "/images/kiss.gif";
  const location3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203133.33399009233!2d-121.98090251102262!3d37.29612108389466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcae48af93ff5%3A0xb99d8c0aca9f717b!2sSan%20Jose%2C%20CA!5e0!3m2!1sen!2sus!4v1687325150771!5m2!1sen!2sus";
  const caption3 = "Actually a genius idea lol";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Spring 2023 ... all long distance
          <br />
          This is the biggest test so far of our long distance skills.
          <br />
          This time apart has only strengthened our relationship and made me
          love you more hehe
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
