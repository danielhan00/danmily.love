"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const src1 = "/images/nye2021.jpg";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.500590262123!2d-121.97530917952487!3d37.397590624648444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c644af8139%3A0x754361d0650d38f2!2sGreat%20America%20Amphitheater!5e0!3m2!1sen!2sus!4v1687237069048!5m2!1sen!2sus";
  const caption1 =
    "WOWWWW Remember how fun this night was? I wanted to kiss you so bad all night, and I wish I did lol";
  const src2 = "/images/sled.jpg";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1907.500590262123!2d-121.97530917952487!3d37.397590624648444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c644af8139%3A0x754361d0650d38f2!2sGreat%20America%20Amphitheater!5e0!3m2!1sen!2sus!4v1687237069048!5m2!1sen!2sus";
  const caption2 =
    "Interesting how we took couple photos before we were a couple.... hehe";
  const src3 = "/images/cows.jpg";
  const location3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.5739811987564!2d-121.85038442312646!3d37.44716767206992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcf0633098dad%3A0xd53bc0df9df543d8!2sEd%20R.%20Levin%20County%20Park!5e0!3m2!1sen!2sus!4v1687237221384!5m2!1sen!2sus";
  const caption3 =
    "Even though you don't like hiking you did this with me?? I bet you had a crush on me";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          December 2021, this is when we met!
          <br />
          What was supposed to be just a casual friendship turned into an
          awesome, loving relationship.
          <br />
          <br />
          Thinking now of us hanging out then not knowing that we would be
          dating for one whole year is crazy, and I&apos;m so glad that we were
          able to meet when we are from such different places.
          <br />I love you, baby
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
