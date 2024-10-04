"use client";

import { color } from "framer-motion";
import { useState, useEffect } from "react";

// Styles (unchanged)
const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  zIndex: 1,
  cursor: "pointer",
  color: "black",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  color: "black",
  left: "32px",
  fontSize: "45px",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
};

// Preload image function
const preloadImage = (url, callback) => {
  const img = new Image();
  img.src = url;
  img.onload = callback;
};


const ImageSlider = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  // Preload the current slide image
  useEffect(() => {
    setIsLoading(true);
    preloadImage(slides[currentIndex].url, () => setIsLoading(false));
  }, [currentIndex, slides]);

  return (
    <div style={sliderStyles} className="h-[75vh] w-full max-lg:h-[50vh] max-md:h-[40vh]">
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>

      {/* Loader with spinner and text */}
      {isLoading ? (
        <div className="flex items-center justify-center h-full" style={slideStylesWidthBackground}>
          <div className="loader">
            <div className="loader-wheel animate-spin rounded-full border-2 border-gray-500 border-t-4 border-t-white h-[50px] w-[50px] mb-2"></div>
            <div className="loader-text text-black text-center text-sm font-sans">
              Loading
              <span className="animate-[loading-text_2s_linear_infinite]">...</span>
            </div>
          </div>
        </div>
      ) : (
        <div style={slideStylesWidthBackground}></div>
      )}

      <div className="flex justify-center mt-4">
        {slides.map((slide, slideIndex) => (
          <div
            className="cursor-pointer text-2xl mx-1"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
