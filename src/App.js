import React from "react";
import HeadBanner from "./components/HeadBanner";
import Nav from "./components/Nav";
import AboutCompany from "./components/AboutCompany";
import Footer from "./components/Footer";
import FooterBanner from "./components/FooterBanner";
import Slider from "./components/Slider";
import Products from "./components/Products";
import Map from "./components/Map";
import Benifits from "./components/Benifits";
import Performer from "./components/Performer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Servicesheater from "./pages/Servicesheater";
import Servicespumping from "./pages/Servicespumping";
import Servicesstreet from "./pages/Servicesstreet";
import Legal from "./pages/Legal";
import Gallery from "./pages/Gallery";
import SubGallery from "./pages/SubGallery";

const Layout = () => {
  return (
    <>
      <HeadBanner />
      <hr />
      <Nav />

      <Outlet />
      <Footer />
      <FooterBanner />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/services-solarpanels",
        element: <Services />,
      },
      {
        path: "/services-solarwaterheater",
        element: <Servicesheater />,
      },
      {
        path: "/services-solarpumping",
        element: <Servicespumping />,
      },
      {
        path: "/services-solarstreet",
        element: <Servicesstreet />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/sub-gallery",
        element: <SubGallery />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
