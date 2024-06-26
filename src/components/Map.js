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
        // backgroundImage: `url(${MapBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[95vh] max-lg:h-[95vh] w-full flex flex-col lg:flex-row md:flex-row justify-center items-center mt-10 relative"
    >
      <div
        className="absolute z-[-1]   
      w-full h-[95vh] max-lg:h-[95vh] opacity-75"
      >
        <video
          src="https://solio.ancorathemes.com/wp-content/uploads/2023/12/198_2-bgvideo.mp4"
          autoplay="{true}"
          loop
          muted
          className="h-full w-full object-cover"
        ></video>
      </div>

      <div className="absolute top-0 left-0 w-full h-[95vh] max-lg:h-[95vh] bg-black opacity-50"></div>
      <div className="px-5 pt-10 flex flex-col max-lg:items-start h-[30vh] max-lg:w-fit max-lg:h-fit z-[1]">
        <p
          className="text-3xl  md:text-5xl  text-white font-[700] "
          style={{ textShadow: "0px 0px 2px rgba(26, 26, 26, 0.85)" }}
        >
          Our Solar Reach
        </p>
        <p className="text-xl md:text-2xl mt-6 text-white font-semibold">
          Quality solar solutions for all over India.
        </p>
        <p className="text-sm md:text-xl text-white mt-2 ">
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
          // style={{ top: "37%", left: "33%" }}
          className="lg-hotspot lg-hotspot--top-left top-[37%] left-[33%] lg:top-[37%] lg:left-[33%] md:left-[33%] md:top-[43%]"
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
          // style={{ top: "20%", left: "34%" }}
          className="lg-hotspot lg-hotspot--top-left top-[24%] left-[34%] md:top-[34%] md:left-[34%] lg:top-[14%] lg:left-[34%]"
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

// <video autoPlay loop muted id="video">
//         <source
//           src="https://solio.ancorathemes.com/wp-content/uploads/2023/12/198_2-bgvideo.mp4"
//           type="video/mp4"
//           height={200}
//           width={100}
//         />
//       </video>
