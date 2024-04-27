import React, { useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMailOpen } from "react-icons/io";
import SubNav from "./SubNav";
import { Link } from "react-router-dom";

const HeadBanner = () => {
  let errRef = useRef(false);
  const [showSidebar, setshowSidebar] = useState(false);

  const [change, setChange] = useState(0);
  const handleSidebar = () => {
    setshowSidebar(!showSidebar);
  };
  const handleGlitch = () => {
    errRef.current = !errRef.current;
    setChange(change + 1);
  };
  const handleErr = () => {
    handleSidebar();
    handleGlitch();
  };
  return (
    <>
      <div className="h-[15vh] flex justify-center px-1 lg:px-4 ">
        <div className="max-lg:w-full max-w-[1224px] flex items-center justify-between">
          <div className="flex justify-between items-center max-lg:w-full px-8">
            <Link to="/">
              <div className="cursor-pointer h-[100px] w-[210px] md:w-[300px] lg:w-[300px] flex justify-start items-center">
                <img
                  src={require("../assets/SUNCITYLOGO.png")}
                  className="max-lg:h-16 object-fit"
                />
              </div>
            </Link>

            <div className="hidden max-lg:block basis-1/2 text-right py-2 navmenubar items-center justify-center">
              <button className="" type="button" onClick={handleErr}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />{" "}
                </svg>
              </button>
            </div>
          </div>

          <div className="hidden lg:flex w-[60vh] h-[10vh] flex justify-around ml-32">
            <div className="flex flex-1 justify-around  items-center">
              <div className="rounded-full transition duration-500 ease-in-out bg-[#DEDEDE] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol">
                <FaFacebook className="socialicons" size={18} color="#808080" />
              </div>
              <div className="rounded-full transition duration-500 ease-in-out bg-[#DEDEDE] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol">
                <FaInstagram
                  className="socialicons"
                  size={18}
                  color="#808080"
                />
              </div>
              <div className="rounded-full transition duration-500 ease-in-out bg-[#DEDEDE] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol">
                <FaXTwitter className="socialicons" size={18} color="#808080" />
              </div>
              <div className="rounded-full transition duration-500 ease-in-out bg-[#DEDEDE] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol">
                <FaPinterestP
                  className="socialicons"
                  size={18}
                  color="#808080"
                />
              </div>
            </div>
            <div className="flex flex-1 items-center ml-6">
              <LuPhoneCall size={30} color="#87AB42" />
              <div className="flex flex-col ml-4">
                <span>Call Agent</span>
                <p>91 888 000 2222</p>
              </div>
            </div>
          </div>
          <div className=" hidden lg:flex w-[1px] h-14 bg-gray-400"></div>
          <div className=" hidden lg:flex w-[40vh] h-[10vh] flex justify-center items-center">
            <IoIosMailOpen size={30} color="#87AB42" />
            <div className="flex flex-col ml-4">
              <span>Send Email</span>
              <p>solarsuncity@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-2" />
      <SubNav
        handleSidebar={handleSidebar}
        showSidebar={showSidebar}
        setshowSidebar={setshowSidebar}
        handleGlitch={handleGlitch}
        errRef={errRef}
        handleErr={handleErr}
        change={change}
      />
    </>
  );
};

export default HeadBanner;
