import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "antd";
import IndiaMap from "../assets/images/india_map_WHITE.svg";
import MapBanner from "../assets/images/MapBanner.webp";
import animationData from "../lotties/Fan.json";
import Lottie from "react-lottie";
const Map = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const items1 = [
    {
      key: "1",
      label: "Maharashtra",
    },
  ];
  const items2 = [
    {
      key: "1",
      label: "Rajasthan",
    },
  ];
  const items3 = [
    {
      key: "1",
      label: "Jammu & Kashmir",
    },
  ];
  const items4 = [
    {
      key: "1",
      label: "Jharkhand",
    },
  ];
  const [selectedHotspot, setSelectedHotspot] = useState(false);
  const [selctNum, setSelectNum] = useState();

  // const selectHotspot = (index) => {
  //   setSelectedHotspot(!selectedHotspot);
  //   setSelectNum(index);
  // };
  return (
    <div
      style={{
        backgroundImage: `url(${MapBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[150vh] max-lg:h-[95vh] w-full flex flex-col justify-center items-center mt-10"
    >
      <div className="px-5 pt-10 flex flex-col justify-center items-center max-lg:items-start h-[30vh]  max-lg:w-fit max-lg:h-fit">
        <p
          className="text-3xl  md:text-5xl  text-white font-[700] "
          style={{ textShadow: "0px 0px 2px rgba(26, 26, 26, 0.85)" }}
        >
          Our Solar Reach
        </p>
        <p className="text-xl md:text-2xl mt-2 font-semibold">
          Quality solar solutions for all over India.
        </p>
        <p className="text-sm md:text-xl mt-2 ">
          We have served both, Big Giants and Startups.
        </p>
      </div>
      <div className="flex mt-2 h-[100vh] w-[100vh] relative ml-20 max-lg:ml-0 max-lg:w-fit">
        <img src={IndiaMap} className="object-contain h-full w-full" />

        <div
          style={{ top: "57%", left: "35%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <Dropdown
            // visible={true}
            menu={{
              items: items1,
              style: {},
            }}
            placement="top"
            arrow
          >
            <div className="lg-hotspot__button"></div>
          </Dropdown>
        </div>

        <div
          style={{ top: "37%", left: "33%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <Dropdown
            // visible={true}
            menu={{
              style: { zIndex: 2 },
              items: items2,
            }}
            placement="top"
            arrow
          >
            <div className="lg-hotspot__button"></div>
          </Dropdown>
        </div>
        <div
          style={{ top: "20%", left: "34%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <Dropdown
            // visible={true}
            menu={{
              style: {},
              items: items3,
            }}
            placement="top"
            arrow
          >
            <div className="lg-hotspot__button"></div>
          </Dropdown>
        </div>
        <div
          style={{ top: "45%", left: "60%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <Dropdown
            // visible={true}
            menu={{
              style: {},
              items: items4,
            }}
            placement="top"
            arrow
          >
            <div className="lg-hotspot__button"></div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Map;

// className={`lg-hotspot__button ${
//     selectedHotspot === 0 ? "lg-hotspot--selected" : ""
//   }`}

// <div
// style={{ top: "55%", left: "60.9%" }}
// className="lg-hotspot lg-hotspot--top-left"
// >
// <div
//   className="lg-hotspot__button"
//   onMouseEnter={() => selectHotspot(1)}
//   onMouseLeave={() => selectHotspot(1)}
// ></div>
// <div
//   style={{
//     opacity: selectedHotspot ? 1 : 0,
//     transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
//   }}
// >
//   <p
//     className={`flex ${
//       selectedHotspot && selctNum == 1 ? "block" : "hidden"
//     }`}
//   >
//     Ireland
//   </p>
// </div>
// </div>
// <div
// style={{ top: "55%", left: "60.9%" }}
// className="lg-hotspot lg-hotspot--top-left"
// >
// <div
//   className="lg-hotspot__button"
//   onMouseEnter={() => selectHotspot(1)}
//   onMouseLeave={() => selectHotspot(1)}
// ></div>
// <div
//   style={{
//     opacity: selectedHotspot ? 1 : 0,
//     transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
//   }}
// >
//   <p
//     className={`flex ${
//       selectedHotspot && selctNum == 1 ? "block" : "hidden"
//     }`}
//   >
//     Canada
//   </p>
// </div>
// </div>
// <div
// style={{ top: "55%", left: "60.9%" }}
// className="lg-hotspot lg-hotspot--top-left"
// >
// <div
//   className="lg-hotspot__button"
//   onMouseEnter={() => selectHotspot(1)}
//   onMouseLeave={() => selectHotspot(1)}
// ></div>
// <div
//   style={{
//     opacity: selectedHotspot ? 1 : 0,
//     transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
//   }}
// >
//   <p
//     className={`flex ${
//       selectedHotspot && selctNum == 1 ? "block" : "hidden"
//     }`}
//   >
//     Florida
//   </p>
// </div>
// </div>
// <div
// style={{ top: "55%", left: "60.9%" }}
// className="lg-hotspot lg-hotspot--top-left"
// >
// <div
//   className="lg-hotspot__button"
//   onMouseEnter={() => selectHotspot(1)}
//   onMouseLeave={() => selectHotspot(1)}
// ></div>
// <div
//   style={{
//     opacity: selectedHotspot ? 1 : 0,
//     transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
//   }}
// >
//   <p
//     className={`flex ${
//       selectedHotspot && selctNum == 1 ? "block" : "hidden"
//     }`}
//   >

//   </p>
// </div>
// </div>

// <Lottie options={defaultOptions} height={400} width={400} />
