"use client";
import styles from "./page.module.css";
import TopBar from "/components/TopBar";
import ImageSlider from "/components/ImageSlider.js";

export default function Home() {
  const src1 = "/images/giants.jpeg";
  const location1 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1268.8378263718012!2d-122.3897242971608!3d37.77839960044839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f8973e2a7c3%3A0xc072b7f508ff6b97!2sSuper%20Duper%20Burger!5e0!3m2!1sen!2sus!4v1687320593111!5m2!1sen!2sus";
  const caption1 =
    "The Giants game was so much fun. Stupid Freddie Freeman!! I still cannot believe that you ate the fry I offered to you";
  const src2 = "/images/gobek.JPG";
  const location2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21736.947844401424!2d126.98823687160586!3d37.512187403350644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca17fe5ca5979%3A0x63dfb7af10c467bf!2sBanpo%20Bridge%20Moonlight%20Rainbow%20Fountain!5e0!3m2!1sen!2sus!4v1687320671581!5m2!1sen!2sus";
  const caption2 = "This is the EXACT spot that I asked you out wow";
  const src3 = "/images/firstdate.JPG";
  const location3 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25849.146706772048!2d127.08067417960373!3d37.51125927340223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca50a915f665b%3A0xabeb10cd5efdfce2!2sLotte%20World%20Tower!5e0!3m2!1sen!2sus!4v1687320717487!5m2!1sen!2sus";
  const caption3 = "First date, first love, first everything!! Risotto";
  return (
    <main className={styles.disable}>
      <TopBar />
      <div className={styles.main}>
        <div className={styles.text}>
          Summer 2022!!
          <br />
          One year ago, we started dating!
          <br />
          Going all the way to Korea confirmed to me that you were the girl for
          me, and I am so, so glad that I had the courage to ask you out. It was
          truly the best decision of my life.
          <br />
          Those 2 and a half weeks in Seoul were magical, and the magic has only
          grown since then!
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
