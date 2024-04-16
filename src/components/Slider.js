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
          background: "rgb(242 122 41)",
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
          background: "rgb(242 122 41)",
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
      <div className="max-lg:mt-0 mt-[-210px]">
        <img
          src={
            "https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/modern-black-solar-panel-photovoltaic-power-plant-desert-environment-sunny-weather-3d-rendering.jpg"
          }
          className={`slide h-[60vh] md:h-full lg:h-full img-resp  ${
            activeSlideIndex === 0 ? "scale-125" : ""
          } transition-transform ease-in-out`}
          style={{ filter: "brightness(50%)" }}
        />
        <div
          className="flex absolute top-0 bottom-0 justify-center items-center w-[100%] flex-col"
          style={{
            transform:
              activeSlideIndex === 0 ? "translateX(0)" : "translateX(-10%)",
            opacity: activeSlideIndex === 0 ? 1 : 0,
            transition: "transform 1s ease, opacity 0.5s ease",
          }}
        >
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold ">
            A bright idea{" "}
          </p>
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold">
            {" "}
            for a greener planet
          </p>
        </div>
      </div>
      <div className="max-lg:mt-0 mt-[-210px]">
        <img
          src={
            "https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/concept-renewable-energy-storage-3d-rendering.jpg"
          }
          className={`slide h-[60vh] md:h-full lg:h-full img-resp ${
            activeSlideIndex === 1 ? "scale-125" : ""
          } transition-transform ease-in-out`}
          style={{ filter: "brightness(50%)" }}
        />
        <div
          className="flex absolute top-0 bottom-0 justify-center items-center w-[100%] flex-col"
          style={{
            transform:
              activeSlideIndex === 1 ? "translateX(0)" : "translateX(-10%)",
            opacity: activeSlideIndex === 1 ? 1 : 0,
            transition: "transform 1s ease, opacity 0.5s ease",
          }}
        >
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold">
            Power up with the{" "}
          </p>
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold">
            {" "}
            sun, go solar today
          </p>
        </div>
      </div>
      <div className="max-lg:mt-0 mt-[-210px]">
        <img
          src={
            "https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/modern-container-battery-energy-storage-power-plant-system-accompanied-with-solar-panels-wind-turbine-system-situated-nature-with-mount-st-helens-background-3d-rendering.jpg"
          }
          className={`slide h-[60vh] md:h-full lg:h-full img-resp ${
            activeSlideIndex === 2 ? "scale-125" : ""
          } transition-transform ease-in-out`}
          style={{ filter: "brightness(50%)" }}
        />
        <div
          className=" flex absolute top-0 bottom-0 justify-center items-center w-[100%] flex-col"
          style={{
            transform:
              activeSlideIndex === 2 ? "translateX(0)" : "translateX(-10%)",
            opacity: activeSlideIndex === 2 ? 1 : 0,
            transition: "transform 1s ease, opacity 0.5s ease",
          }}
        >
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold">
            Solar energy,{" "}
          </p>
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold">
            {" "}
            Clean,green,and
          </p>
          <p className="text-white text-3xl font-semibold md:text-7xl md:font-bold">
            {" "}
            renewable
          </p>
        </div>
      </div>
    </Sliderr>
  );
};

export default Slider;
