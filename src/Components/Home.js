import { React, useState } from "react";
import "./home.css";
import Popular from "./Category/Popular";
import Navbar from './Navbar';

const slides = [
  {
    id: 1,
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
  },
  {
    id: 2,
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg"
  },
  {
    id: 3,
    image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/PC_Hero_2x-toys_1._CB582765723_.jpg",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  document.title = "Amazon";

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleScroll = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <div className="content" id="home">
        <div className="slider-area">
          <img
            src={slides[currentSlide].image}
            alt="Slider"
            className="slider-image"
          />
          <div className="slider-controls">
            <button className="slider-button" onClick={handlePrev}>
              &#10094; {/* Left Arrow */}
            </button>
            <button className="slider-button" onClick={handleNext}>
              &#10095; {/* Right Arrow */}
            </button>
          </div>
        </div>
        <Popular />
      </div>
    </>
  );
}

export default Home;
