"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const src1 = "/images/banpo.JPG";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21736.947844401424!2d126.98823687160586!3d37.512187403350644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca17fe5ca5979%3A0x63dfb7af10c467bf!2sBanpo%20Bridge%20Moonlight%20Rainbow%20Fountain!5e0!3m2!1sen!2sus!4v1687320671581!5m2!1sen!2sus";
  const caption1 =
    "I came to Korea and you got COVID!!! What a crazy time. I literally could not resist kissing you even though you got covid lol";
  const src2 = "/images/jeju.JPG";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383187.2658614414!2d128.0313172480375!3d33.25759505400765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce3544cc84045%3A0x66bc36d2981ebf31!2sJeju-do%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1687321707217!5m2!1sen!2sus";
  const caption2 =
    "Our first trip together as a couple. What an AMAZING trip this was. I cannot wait to go back and take many more amazing trips with you in the future";
  const src3 = "/images/shinsegae.JPG";
  const location3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14874.061464505668!2d126.97154096862812!3d37.5593434750934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f1587c7819%3A0xd74d3707fbcde464!2sShinsegae%20Department%20Store%20Main%20Store!5e0!3m2!1sen!2sus!4v1687321620604!5m2!1sen!2sus";
  const caption3 = "Rememeber when I literally randomly came back to Korea?";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Fall 2022 omg
          <br />
          Nearly 3 months in Seoul
          <br />
          I really cherish this time because I believe this is when our
          relationship really blossomed into the love we have today.
          <br />
          We learned so much about each other and what it takes to have a great
          relationship.
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
