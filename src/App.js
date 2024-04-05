import React from "react";
import HeadBanner from "./components/HeadBanner";
import Nav from "./components/Nav";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Slider from "./components/Slider";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="">
      <HeadBanner />
      <hr />
      <Nav />
      <Slider />
      <AboutCompany />
     <Products/>
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default App;
