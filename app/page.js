import Image from "next/image";
import styles from "./page.module.css";

function passWord() {
  var testV = 1;
  var pass1 = prompt("Please Enter Your Password", " ");
  while (testV < 3) {
    if (!pass1) {
      history.go(-1);
      var pass1 = prompt(
        "Access Denied - Password Incorrect, Please Try Again.",
        "Password"
      );
    } else if (pass1.toLowerCase() == "letmein") {
      alert("You Got it Right!");
      window.open("protectpage.html");
      break;
    }
    testV += 1;
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        This website is for danmily eyes only. If you are not danmily, do not
        enter. If you are emily, I love u!
      </div>
      <a href="/">
        <button>Visit Page Now</button>
      </a>
    </main>
  );
}
