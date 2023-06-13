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
    if (isBlurred) {
      setIsBlurred(false);
      setShowMap(false);
    } else if (showMap) {
      setShowMap(false);
    } else {
      setIsBlurred(false);
      setShowMap(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {showMap ? (
          <iframe
            className={styles.map}
            src={mapLocation}
            width="500"
            height="500"
            title="Google Maps Location"
          ></iframe>
        ) : (
          <>
            <img
              className={`${styles.image} ${isBlurred ? styles.blurred : ""}`}
              src={imageSrc}
              alt="Image"
              width="500"
              height="500"
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
