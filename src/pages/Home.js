import React from "react";
import AboutCompany from "../components/AboutCompany";
import Products from "../components/Products";
import Map from "../components/Map";
import Benifits from "../components/Benifits";
import Performer from "../components/Performer";
import Slider from "../components/Slider";
import RoadMap from "../components/RoadMap";

const Home = () => {
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
