import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GiQueenCrown } from "react-icons/gi";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${"https://demo.bravisthemes.com/soluris/wp-content/uploads/2023/02/bgrs5.jpg"}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[700px] max-lg:h-fit flex max-lg:flex-col relative"
      >
        <div className="flex flex-wrap max-lg:justify-start justify-center items-center bg-gray-800 bg-opacity-75 w-full ">
          <div className=" max-w-[1224px] flex flex-col md:justify-center lg:items-center md:items-center lg:justify-center">
            {location.pathname == "/" && (
              <div className="max-lg:hidden  absolute flex top-[-115px] bg-[#4aab3d] h-[200px] w-[1100px] max-w-[1224px] justify-between items-center p-16">
                <div className="">
                  <p className="text-white text-4xl">
                    Fastest & secure way to get
                  </p>
                  <p className="text-white text-4xl">
                    clean, safe and renewable
                  </p>
                  <p className="text-white text-4xl">energy</p>
                </div>
                <div className="ml-6 rounded-lg   bg-[#0b3b5e] cursor-pointer text-white p-6">
                  GET A FREE QUOTE
                </div>
              </div>
            )}
            <div className="flex flex-wrap  max-w-[1224px] sm:justify-start md:justify-evenly lg:justify-evenly mt-16">
              <div className="basis-full md:basis-1/4 sm:p-2 p-5 justify-center">
                <div className="flex mt-12 bg-white rounded-2xl p-[10px] w-[80%]">
                  <img
                    src={require("../assets/SUNCITYLOGO.png")}
                    className="mx-1 md:mx-auto sm:w-1/2 md:w-full"
                  />
                </div>
                <div className=" flex flex-col justify-start lg:pl-4 mt-4">
                  <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                    3 Floor, Ayushi Tower, Main pal Road, Jodhpur, Rajasthan
                  </p>
                  <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                    info@suncitysolar.in
                  </p>
                  <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                    95872 11700
                  </p>
                </div>
              </div>
              <div className="basis-full md:basis-1/4 sm:p-2 p-5 flex flex-col items-start md:items-center lg:items-center justify-center">
                <div className="flex flex-row items-center">
                  <h4 className="text-[24px] font-semibold mt-8 md:mt-14 lg:mt-14 text-white ">
                    Service
                  </h4>
                  <div className="bg-[#4aab3d] h-1 w-8 justify-center items-center self-center mt-14 ml-8"></div>
                </div>
                <div className="mt-5  ml-0 md:ml-6 lg:ml-6">
                  <Link rel="noopener noreferrer" to="/services-solarpanels">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Solar Panels
                    </p>
                  </Link>

                  <Link to="/services-solarwaterheater">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Solar Water Heaters
                    </p>
                  </Link>

                  <Link to="/services-solarpumping">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Solar Water Pumping
                    </p>
                  </Link>

                  <Link to="/services-solarstreet">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Solar Street Lights
                    </p>
                  </Link>
                </div>
              </div>
              <div className="basis-1/4 md:basis-1/4 sm:p-2  flex flex-col items-center justify-center p-5">
                <div className="flex flex-row items-center pt-0 md:pt-6 lg:pt-10">
                  <h4 className="text-[24px] font-semibold mt-10 text-white">
                    Pages
                  </h4>
                  <div className="bg-[#4aab3d] h-1 w-8 justify-center items-center self-center mt-10 ml-8"></div>
                </div>
                <div className="mt-5 mr-12">
                  <Link to="/about-us">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      About
                    </p>
                  </Link>

                  <Link to="/legal">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Legal
                    </p>
                  </Link>

                  <Link to="/gallery">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Gallery
                    </p>
                  </Link>

                  <Link to="/contact-us">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Contact
                    </p>
                  </Link>

                  <Link to="/team">
                    <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d] mt-2">
                      Our Team
                    </p>
                  </Link>
                </div>
              </div>
              <div className="basis-full md:basis-1/4 sm:p-2 p-5">
                <div className="flex flex-row items-center pt-0 md:pt-4 lg:pt-8">
                  <h4 className="text-[24px] font-semibold mt-8 md:mt-12 lg:mt-12 text-white">
                    Newsletter
                  </h4>
                  <div className="bg-[#4aab3d] h-1 w-8 justify-center items-center self-center mt-14 ml-8"></div>
                </div>
                <div className="mt-5">
                  <p className="text-[#d5d5d5] text-[16px] mt-2">
                    Subscribe our newsletter to get our
                  </p>
                  <p className="text-[#d5d5d5] text-[16px] ">
                    latest update & news
                  </p>

                  <div class="max-w-lg bg-gray-100 flex px-2 py-1 rounded-md text-left mt-8 border focus-within:border-gray-700">
                    <input
                      type="email"
                      placeholder="Your Email Adress..."
                      class="w-full text-[#333] placeholder-gray-500 outline-none bg-transparent text-sm px-4 py-3"
                    />
                    <div className="bg-[#4aab3d] flex justify-center items-center w-14 rounded-lg cursor-pointer">
                      <FaLocationArrow color="#fff" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="basis-full md:basis-1/4 sm:p-2 p-5">
              <div className="flex flex-row items-center">
                <h4 className="text-[24px] font-semibold mt-14 text-white">
                  Newsletter
                </h4>
                <div className="bg-[#4aab3d] h-1 w-8 justify-center items-center self-center mt-14 ml-8"></div>
              </div>
              <div className="mt-5">
                <p className="text-[#d5d5d5] text-[16px] ">
                  Subscribe our newsletter to get our
                </p>
                <p className="text-[#d5d5d5] text-[16px] ">
                  latest update & news
                </p>

                <div class="max-w-lg bg-gray-100 flex px-2 py-1 rounded-md text-left mt-8 border focus-within:border-gray-700">
                  <input
                    type="email"
                    placeholder="Your Email Adress..."
                    class="w-full text-[#333] placeholder-gray-500 outline-none bg-transparent text-sm px-4 py-3"
                  />
                  <div className="bg-[#4aab3d] flex justify-center items-center w-14 rounded-lg cursor-pointer">
                    <FaLocationArrow color="#fff" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// <div className="absolute top-[-15px] bg-red-200 h-[]">hello</div>
