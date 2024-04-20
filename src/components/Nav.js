import React from "react";
import { Dropdown, Modal, Button } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
const Nav = () => {
  const Pagesitems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/about-us">
          About Us
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="">
          Testimonial
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="">
          Team
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="">
          Shop
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="">
          My account
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="">
          Error Page
        </Link>
      ),
    },
  ];
  const ServicesItems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/services-solarpanels">
          SOLAR PANELS
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/services-solarwaterheater">
          SOLAR WATER HEATERS
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/services-solarpumping">
          SOLAR WATER PUMPING SYSTEMS
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/services-solarstreet">
          SOLAR STREET LIGHTS
        </Link>
      ),
    },
  ];
  const PortfolioItems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/legal">
          COMPLIANCE
        </Link>
      ),
    },
  ];
  const NewsItems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/sell-old-mobile">
          News Grid
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/sell-old-laptop">
          News Grid 2
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/sell-old-laptop">
          News Carousel 1
        </Link>
      ),
    },
  ];

  return (
    <div className="hidden lg:flex h-[10vh] flex justify-center w-full bg-white  sticky top-0 z-[1000] shadow-xl">
      <div className="w-full max-w-[1224px] flex items-center justify-between px-8">
        <div className="flex  flex-1 justify-around">
          <a
            href="/"
            className="hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium"
          >
            Home
          </a>

          <a
            href="/"
            className=" font-bold  flex items-center space-x-1 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <Link to="/about-us">
              <p className="hover:text-[#87AB42] text-sm font-medium">About</p>
            </Link>
          </a>

          {/* <a href="#" className=" rounded-md px-3 py-2 text-sm font-medium">
            <Dropdown menu={{ items: Pagesitems }} placement="bottom" arrow>
              <a
                className="font-bold  flex items-center space-x-1"
                onClick={(e) => e.preventDefault()}
              >
                <p className="hover:text-[#87AB42] text-sm font-medium">
                  Pages
                </p>
              </a>
            </Dropdown>
          </a> */}

          <a
            href="#"
            className="hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium"
          >
            <Dropdown menu={{ items: ServicesItems }} placement="bottom" arrow>
              <a
                className="font-bold  flex items-center space-x-1 "
                onClick={(e) => e.preventDefault()}
              >
                <p className=" hover:text-[#87AB42] text-sm font-medium">
                  Services
                </p>
              </a>
            </Dropdown>
          </a>

          <a
            href="#"
            className=" hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium"
          >
            <Dropdown menu={{ items: PortfolioItems }} placement="bottom" arrow>
              <a
                className="font-bold  flex items-center space-x-1 "
                onClick={(e) => e.preventDefault()}
              >
                <p className=" hover:text-[#87AB42] text-sm font-medium">
                  Legal
                </p>
              </a>
            </Dropdown>
          </a>

          <a
            href="/"
            className=" font-bold  flex items-center space-x-1 cursor-pointer"
            onClick={(e) => e.preventDefault()}
          >
            <Link to="/gallery">
              <p className="hover:text-[#87AB42] text-sm font-medium">
                Gallery
              </p>
            </Link>
          </a>

          <a
            href=""
            className=" hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium"
          >
            <Link to="/contact-us">
              <p className="hover:text-[#87AB42] text-sm font-medium">
                Contact
              </p>
            </Link>
          </a>
        </div>
        <div className="flex-1 px-3 py-1 flex justify-around items-center ml-16">
          <div className="justify-center items-center text-center ">
            <span className="cursor-pointer hover:text-[#87AB42] mr-1">
              Login
            </span>
            /
            <span className=" ml-1 cursor-pointer hover:text-[#87AB42]">
              Register
            </span>
          </div>
          <div className="w-[1px] h-14 bg-gray-400"></div>
          <div className=" flex justify-between">
            <div className="ml-6 rounded-lg border p-2 text-white bg-[#87AB42] cursor-pointer">
              GET A QUOTE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
