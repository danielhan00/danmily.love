import React, { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = () => {
  const targetDate = new Date("August 24, 2023").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      {timeLeft.days > 0 ? (
        <p className={styles.countdown}>
          {timeLeft.days} {timeLeft.days === 1 ? "day" : "days"},{" "}
          {timeLeft.hours} {timeLeft.hours === 1 ? "hour" : "hours"},{" "}
          {timeLeft.minutes} {timeLeft.minutes === 1 ? "minute" : "minutes"},{" "}
          {timeLeft.seconds} {timeLeft.seconds === 1 ? "second" : "seconds"}{" "}
          left until August 24, 2023
        </p>
      ) : (
        <p className={styles.expired}>August 24, 2023 has already passed.</p>
      )}
    </div>
  );
};

export default CountdownTimer;
