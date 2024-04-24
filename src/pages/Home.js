import React, { useEffect } from "react";
import AboutCompany from "../components/AboutCompany";
import Products from "../components/Products";
import Map from "../components/Map";
import Benifits from "../components/Benifits";
import Performer from "../components/Performer";
import Slider from "../components/Slider";
import RoadMap from "../components/RoadMap";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Slider />
      <Products />
      <AboutCompany />
      <Benifits />
      <Map />
      <RoadMap />
      <Performer />
    </>
  );
};

export default Home;
