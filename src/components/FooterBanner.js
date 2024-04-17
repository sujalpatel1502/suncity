import React from "react";
import { FaFacebook, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const FooterBanner = () => {
  return (
    <>
      <div className="h-[11vh] bg-[#1d1d29]  flex justify-center items-center self-center text-center max-lg:justify-start">
        <div className="flex w-[78%] ml-10 h-[11vh] items-center justify-between  max-lg:flex-col max-lg:pt-4">
          <div className="pl-4">
            <p className=" text-[#7C858C]"> © Copyright 2024 by Suncity</p>
          </div>
          <div className="flex h-[10vh] items-center gap-4 ">
            <div className=" transition duration-500 ease-in-out bg-[#313140] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol rounded-lg">
              <FaFacebook className="socialicons" size={18} color="#808080" />
            </div>
            <div className=" transition duration-500 ease-in-out bg-[#313140] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol rounded-lg">
              <FaInstagram className="socialicons" size={18} color="#808080" />
            </div>
            <div className=" transition duration-500 ease-in-out bg-[#313140] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol rounded-lg">
              <FaXTwitter className="socialicons" size={18} color="#808080" />
            </div>
            <div className=" transition duration-500 ease-in-out bg-[#313140] w-10 h-10 flex items-center justify-center hover:bg-[#87AB42] transform hover:mb-2 cursor-pointer hover:-translate-y-1 hover:scale-110 changecol rounded-lg">
              <FaPinterestP className="socialicons" size={18} color="#808080" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
