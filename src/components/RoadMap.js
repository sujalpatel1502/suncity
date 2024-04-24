import React from "react";

const RoadMap = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <p className=" text-3xl font-semibold md:text-5xl text-center">Steps</p>
      <div className="max-lg:hidden md:h-[650px] lg:h-[650px] max-w-[1224px]">
        <img src={require("../assets/images/SunCityMap2.png")} />
      </div>
      <div className="max-lg:flex hidden md:h-[650px] lg:h-[650px] max-w-[1224px]">
        <img src={require("../assets/images/SunCityMapMobile.png")} />
      </div>
      <div></div>
    </div>
  );
};

export default RoadMap;
