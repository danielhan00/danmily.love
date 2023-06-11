"use client";
import { useRouter } from "next/navigation";
import PasswordComponent from "../components/PasswordComponent";
import styles from "./page.module.css";

const HomePage = () => {
  const handlePasswordCorrect = () => {
    console.log("Correct password entered!");
  };

  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TOP SECRET INFORMATION</h1>
      <div className={styles.passwordContainer}>
        <PasswordComponent
          correctPassword="password"
          onPasswordCorrect={handlePasswordCorrect}
          router={router}
        />
      </div>
    </div>
  );
};

export default HomePage;
