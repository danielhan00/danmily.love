import React from "react";
import ImageSlider from "./ImageSlider"; // Assuming the ImageSlider component is imported from a separate file

const ImageSliderContainer = (
  img1SRC,
  caption1,
  map1,
  img2SRC,
  caption2,
  map2,
  img3SRC,
  caption3,
  map3
) => {
  return (
    <div style={{ display: "flex" }}>
      <ImageSlider imageSrc={img1SRC} caption={caption1} mapLocation={map1} />
      <ImageSlider imageSrc={img2SRC} caption={caption2} mapLocation={map2} />
      <ImageSlider imageSrc={img3SRC} caption={caption3} mapLocation={map3} />
    </div>
  );
};

export default ImageSliderContainer;
