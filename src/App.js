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
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
const Layout = () => {
  return (
    <div>
      <HeadBanner />
      <hr />
      <Nav />
      <Outlet />
      <Footer />
      <FooterBanner />
    </div>
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
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

const App = () => {
  // return (
  //   <div className="">
  //     <HeadBanner />
  //     <hr />
  //     <Nav />
  //     <Slider />
  //     <AboutCompany />
  //     <Products />
  //     <Map />
  //     <Benifits />
  //     <Performer />
  //     <Footer />
  //     <FooterBanner />
  //   </div>
  // );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
