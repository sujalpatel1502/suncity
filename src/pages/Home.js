import React from "react";
import AboutCompany from "../components/AboutCompany";
import Products from "../components/Products";
import Map from "../components/Map";
import Benifits from "../components/Benifits";
import Performer from "../components/Performer";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutCompany />
      <Products />
      <Map />
      <Benifits />
      <Performer />
    </>
  );
};

export default Home;
