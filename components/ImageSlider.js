import React, { useState } from "react";
import styles from "./ImageSlider.module.css";

const ImageSlider = ({ imageSrc, caption, mapLocation }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleNext = () => {
    if (isBlurred) {
      setShowMap(true);
    } else if (!showMap) {
      setIsBlurred(true);
    }
  };

  const handlePrevious = () => {
    if (showMap) {
      setShowMap(false);
      setIsBlurred(true);
    } else if (isBlurred) {
      setIsBlurred(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {showMap ? (
          <iframe
            className={styles.map}
            src={mapLocation}
            width="400"
            height="400"
            title="Google Maps Location"
          ></iframe>
        ) : (
          <>
            <img
              className={`${styles.image} ${isBlurred ? styles.blurred : ""}`}
              src={imageSrc}
              alt="Image"
              width="400"
              height="400"
            />
            {isBlurred && <div className={styles.caption}>{caption}</div>}
          </>
        )}
      </div>
      <div className={styles.buttons}>
        {isBlurred && (
          <button className={styles.button} onClick={handlePrevious}>
            Previous
          </button>
        )}
        {!showMap && (
          <button className={styles.button} onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
