import React from "react";

const RoadMap = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <p className=" text-3xl font-semibold md:text-5xl text-center">Steps</p>
      <div className="md:h-[650px] lg:h-[650px] max-w-[1224px]">
        <img src={require("../assets/images/SunCityMap2.png")} />
      </div>
    </div>
  );
};

export default RoadMap;
