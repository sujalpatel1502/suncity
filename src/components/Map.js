import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "antd";
import IndiaMap from "../assets/images/india_map.svg";
const Map = () => {
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
    <div className="h-[150vh] max-lg:h-[95vh] w-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-center items-center max-lg:items-start h-[30vh]  max-lg:w-fit max-lg:h-fit">
        <p
          className="text-[80px] max-lg:text-[40px] text-white font-[700] max-lg:font-[350]"
          style={{ textShadow: "0px 0px 2px rgba(26, 26, 26, 0.85)" }}
        >
          INTERNATIONAL PRESENCE
        </p>
        <p className="text-[40px] max-lg:text-[20px] text-[#87AB42] font-[700] max-lg:font-[350]">
          OUR REACH AROUND THE GLOBE
        </p>
        <p className="text-[#87AB42] mt-5 text-[20px]">
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
            className=""
            menu={{
              items: items1,
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
            menu={{
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
            menu={{
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
            menu={{
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
//     Switzerland
//   </p>
// </div>
// </div>
