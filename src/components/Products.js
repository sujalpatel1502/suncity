import React from "react";
import { FaCheckCircle } from "react-icons/fa";

import serviceimage1 from "../assets/images/service-5.jpg";
import grass from "../assets/images/grass.svg";
import windmill from "../assets/images/windmill.svg";

const Products = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col text-center  w-[80%]  px-10">
          <div className="basis-1">
            <span className=" text-logogreen underline underline-offset-[5px] pl-1 ">
              OUR Services
            </span>
            <h2 className="mt-5 text-5xl font-bold">
              We Provide Best Services
            </h2>
            <p className="text-4xl text-logoblue mt-2">For Solar Pannels</p>
          </div>
        </div>

        {/* services cards starts  ........................................................*/}

        <div className="flex w-[70%]  px-10 justify-between	mt-10 max-lg:flex-col max-lg:w-fit items-center">
          <div className="w-[31%] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
            <h3 className="font-semibold text-[20px]">
              <span className="text-logogreen">Panels</span> Settings
            </h3>
            <p className="text-sm mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="mt-3">
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> New Solar Installation</span>
              </p>
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> Battery & Pannels</span>
              </p>
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> Wind Customize</span>
              </p>
            </div>
            <div className="mt-3">
              <img src={serviceimage1} className="w-[90%] rounded-lg" />
            </div>
          </div>

          <div className="w-[31%] max-lg:w-fit max-lg:mt-8 border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
            <h3 className="font-semibold text-[20px]">
              <span className="text-logogreen">Panels</span> Settings
            </h3>
            <p className="text-sm mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="mt-3">
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> New Solar Installation</span>
              </p>
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> Battery & Pannels</span>
              </p>
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> Wind Customize</span>
              </p>
            </div>
            <div className="mt-3">
              <img src={serviceimage1} className="w-[90%] rounded-lg" />
            </div>
          </div>

          <div className="w-[31%] max-lg:w-fit max-lg:mt-8 border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
            <h3 className="font-semibold text-[20px]">
              <span className="text-logogreen">Panels</span> Settings
            </h3>
            <p className="text-sm mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="mt-3">
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> New Solar Installation</span>
              </p>
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto ">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> Battery & Pannels</span>
              </p>
              <p className="text-sm mt-1 flex align-center">
                <span className="text-logogreen my-auto">
                  <FaCheckCircle />
                </span>{" "}
                <span className="ml-2"> Wind Customize</span>
              </p>
            </div>
            <div className="mt-3">
              <img src={serviceimage1} className="w-[90%] rounded-lg" />
            </div>
          </div>
        </div>

        {/* services cards ends  ........................................................*/}
      </div>

      <div className="mt-20">
        <div className="flex justify-around">
          {" "}
          <div class="windmill">
            <img
              className="stand"
              src="https://un1.egnioldigital.com/wp-content/uploads/2024/04/Pole.png"
              alt="Windmill Stand"
            />
            <img
              className="wing"
              src="https://un1.egnioldigital.com/wp-content/uploads/2024/04/Blad.png"
              alt="Windmill Wing"
            />
          </div>
          <div class="windmill">
            <img
              className="stand"
              src="https://un1.egnioldigital.com/wp-content/uploads/2024/04/Pole.png"
              alt="Windmill Stand"
            />
            <img
              className="wing"
              src="https://un1.egnioldigital.com/wp-content/uploads/2024/04/Blad.png"
              alt="Windmill Wing"
            />
          </div>
        </div>
        <div className="mt-[12px]">
          {" "}
          <img src={grass} />
        </div>
      </div>
    </>
  );
};

export default Products;
