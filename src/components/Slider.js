import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "react-slick";
const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          background: "#001861",
          height: "45px",
          width: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "30px",
          zIndex: 50,
          borderRadius: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          background: "#001861",
          height: "45px",
          width: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "30px",
          zIndex: 50,
          borderRadius: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  const handleBeforeChange = (oldIndex, newIndex) => {
    console.log("newwwwwwww", newIndex);
    setActiveSlideIndex(newIndex);
  };
  console.log("indexxxxxxxxxxxxxxxxx", activeSlideIndex);

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    waitForAnimate: false,
    beforeChange: handleBeforeChange,
  };
  console.log("sosaoosaoaso", activeSlideIndex);
  return (
    <Sliderr {...settings} className="overflow-hidden z-0 heroslider">
      <div className="flex relative justify-center items-center">
        <img
          src={
            "https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/modern-container-battery-energy-storage-power-plant-system-accompanied-with-solar-panels-wind-turbine-system-situated-nature-with-mount-st-helens-background-3d-rendering.jpg"
          }
          className={`slide h-fit md:h-full lg:h-full img-resp ${
            activeSlideIndex === 0 ? "scale-125" : ""
          } transition-transform ease-in-out`}
        />
        <div className=" flex absolute top-0 bottom-0 justify-center items-center w-[100%] flex-col">
          <p className="text-white text-7xl">A bright idea </p>
          <p className="text-white text-7xl"> for a greener planet</p>
        </div>
      </div>
      <div className="">
        <img
          src={
            "https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/concept-renewable-energy-storage-3d-rendering.jpg"
          }
          className={`slide h-fit md:h-full lg:h-full img-resp ${
            activeSlideIndex === 1 ? "scale-125" : ""
          } transition-transform ease-in-out`}
        />
      </div>
      <div className="">
        <img
          src={
            "https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/modern-black-solar-panel-photovoltaic-power-plant-desert-environment-sunny-weather-3d-rendering.jpg"
          }
          className={`slide h-fit md:h-full lg:h-full img-resp ${
            activeSlideIndex === 2 ? "scale-125" : ""
          } transition-transform ease-in-out`}
        />
      </div>
    </Sliderr>
  );
};

export default Slider;
