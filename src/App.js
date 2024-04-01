import React from "react";
import HeadBanner from "./components/HeadBanner";
import Nav from "./components/Nav";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="">
      <HeadBanner />
      <hr />
      <Nav />
      <Slider />
      <AboutCompany />
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default App;
