import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "antd";
const Map = () => {
  const items = [
    {
      key: "1",
      label: "Mumbai",
    },
  ];
  const [selectedHotspot, setSelectedHotspot] = useState(false);
  const [selctNum, setSelectNum] = useState();

  const selectHotspot = (index) => {
    setSelectedHotspot(!selectedHotspot);
    setSelectNum(index);
  };
  return (
    <div className="h-[170vh] mt-10 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mt-10  h-[30vh]">
        <p
          className="text-[80px] text-white font-[700]"
          style={{ textShadow: "0px 0px 2px rgba(26, 26, 26, 0.85)" }}
        >
          INTERNATIONAL PRESENCE
        </p>
        <p className="text-[40px] text-[#87AB42] font-[700]">
          OUR REACH AROUND THE GLOBE
        </p>
        <p className="text-[#87AB42] mt-5 text-[20px]">
          We have served both, Big Giants and Startups.
        </p>
      </div>
      <div className="flex mt-10 h-[130vh] w-[180vh] relative">
        <img
          src="https://arise3d.com/wp-content/uploads/2022/12/Map-1.webp"
          className=""
        />
        <div
          style={{ top: "55%", left: "67.9%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <Dropdown
            menu={{
              items,
            }}
            placement="top"
            arrow
          >
            <div
              className="lg-hotspot__button"
              //   onMouseEnter={() => selectHotspot(0)}
              //   onMouseLeave={() => selectHotspot(0)}
            ></div>
          </Dropdown>
        </div>

        <div
          style={{ top: "55%", left: "60.9%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <div
            className="lg-hotspot__button"
            onMouseEnter={() => selectHotspot(1)}
            onMouseLeave={() => selectHotspot(1)}
          ></div>
          <div
            style={{
              opacity: selectedHotspot ? 1 : 0,
              transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
            }}
          >
            <p
              className={`flex ${
                selectedHotspot && selctNum == 1 ? "block" : "hidden"
              }`}
            >
              Dubai
            </p>
          </div>
        </div>
        <div
          style={{ top: "60%", left: "74.9%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <div
            className="lg-hotspot__button"
            onMouseEnter={() => selectHotspot(2)}
            onMouseLeave={() => selectHotspot(2)}
          ></div>
          <div
            style={{
              opacity: selectedHotspot ? 1 : 0,
              transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
            }}
          >
            <p
              className={`flex ${
                selectedHotspot && selctNum == 2 ? "block" : "hidden"
              }`}
            >
              Singapore
            </p>
          </div>
        </div>
        <div
          style={{ top: "75%", left: "83.9%" }}
          className="lg-hotspot lg-hotspot--top-left"
        >
          <div
            className="lg-hotspot__button"
            onMouseEnter={() => selectHotspot(3)}
            onMouseLeave={() => selectHotspot(3)}
          ></div>
          <div
            style={{
              opacity: selectedHotspot ? 1 : 0,
              transition: "transform 1s ease-in-out, opacity 0.5s ease-in-out",
            }}
          >
            <p
              className={`flex ${
                selectedHotspot && selctNum == 3 ? "block" : "hidden"
              }`}
            >
              Australia
            </p>
          </div>
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
