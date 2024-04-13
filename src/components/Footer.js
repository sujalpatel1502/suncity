import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { useLocation } from "react-router-dom";
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
        className="h-[70vh] max-lg:h-fit flex max-lg:flex-col relative"
      >
        <div className="flex flex-wrap max-lg:justify-start justify-center items-center bg-gray-800 bg-opacity-75 w-full ">
          {location.pathname == "/" && (
            <div className="max-lg:hidden  absolute flex top-[-115px] bg-[#4aab3d] h-[30vh] w-[78%] ml-10 justify-between items-center p-16">
              <div className="">
                <p className="text-white text-4xl">
                  Fastest & secure way to get
                </p>
                <p className="text-white text-4xl">clean, safe and renewable</p>
                <p className="text-white text-4xl">energy</p>
              </div>
              <div className="ml-6 rounded-lg   bg-[#0b3b5e] cursor-pointer text-white p-6">
                GET A FREE QUOTE
              </div>
            </div>
          )}
          <div className="flex flex-wrap w-[78%] max-lg:ml-0 ml-10">
            <div className="basis-full md:basis-1/4 sm:p-2 p-5 justify-center">
              <div className="flex mt-12 bg-white rounded-2xl p-[10px]">
                <img
                  src={require("../assets/SUNCITYLOGO.png")}
                  className="mx-1 md:mx-auto sm:w-1/2 md:w-full"
                />
              </div>
              <div className=" flex flex-col justify-start lg:pl-4 mt-4">
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Panchamrut Bunglows II, Sola, Ahmedabad, Gujarat 380060
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  needhelp@domain.com
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  999 333 0000
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-1/4 sm:p-2 p-5 justify-center">
              <div className="flex flex-row items-center">
                <h4 className="text-[24px] font-semibold mt-14 text-white">
                  Service
                </h4>
                <div className="bg-[#4aab3d] h-1 w-8 justify-center items-center self-center mt-14 ml-8"></div>
              </div>
              <div className="mt-5">
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Reliability & Punctuality
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Trusted Franchise
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Warehoues Storage
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Real Time Tracking
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Transparent Pricing
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-1/4 sm:p-2 p-5 justify-center">
              <div className="flex flex-row items-center">
                <h4 className="text-[24px] font-semibold mt-14 text-white">
                  Pages
                </h4>
                <div className="bg-[#4aab3d] h-1 w-8 justify-center items-center self-center mt-14 ml-8"></div>
              </div>
              <div className="mt-5">
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  About
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  New Projects
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Our History
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Contact
                </p>
                <p className="text-[#d5d5d5] text-[16px] cursor-pointer hover:text-[#4aab3d]">
                  Blog Posts
                </p>
              </div>
            </div>
            <div className=" basis-full md:basis-1/4 sm:p-2 p-5 justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// <div className="absolute top-[-15px] bg-red-200 h-[]">hello</div>
