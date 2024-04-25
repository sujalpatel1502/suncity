import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Dropdown } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import solarpanel from "../assets/images/SolarPanels.webp";
import solarstreetlight from "../assets/images/SolarStreetLights.webp";
import solarwaterheater from "../assets/images/SolarWaterHeaters.webp";
import solarwaterpumping from "../assets/images/SolarWaterPumping.webp";
import grass from "../assets/images/grass.svg";
import windmill from "../assets/images/windmill.svg";
import { Link } from "react-router-dom";

const Products = () => {
  const items1 = [
    {
      key: "1",
      label: "Chat With Us",
    },
  ];
  return (
    <>
      <div className="max-lg:container flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col text-center  w-full md:w-[80%] px-2 md:px-10">
          <div className="basis-1">
            <span className=" text-logogreen underline underline-offset-[5px] pl-1 ">
              OUR Services
            </span>

            <p className=" mt-5 text-3xl font-semibold md:text-5xl ">
              Powering A Brighter Future For All
            </p>

            <p className=" md:text-xl mt-3">
              Discover our wide range of high-quality solar products tailored to
              your needs
            </p>
          </div>
        </div>

        {/* services cards starts  ........................................................*/}

        <a
          href="https://wa.me/919587211700"
          class="whatsapp_float b animate-bounce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Dropdown
            menu={{
              items: items1,
            }}
            placement="top"
            arrow
          >
            <div className="flex justify-center items-center self-center text-center mt-4 max-lg:mt-2">
              <FaWhatsapp />
            </div>
          </Dropdown>
        </a>

        <div className="flex w-full md:max-w-[1244px]  px-2 md:px-10 justify-between	mt-5 md:mt-10 max-lg:flex-col max-lg:w-fit items-center ml-0 md:ml-14 lg:ml-14">
          <div className="w-[24%] h-[365px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg cursor-pointer">
            <Link to="/services-solarpanels">
              <h3 className="font-semibold text-[20px]">
                <span className="text-logogreen">Solar</span> Panels
              </h3>
              <p className="text-sm mt-2">
                Harness the sun's energy with our high-efficiency solar panels.
              </p>

              <div className="mt-3">
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Maximize Energy</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> High Efficiency</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Reduce Carbon</span>
                </p>
              </div>
              <div className="mt-3">
                <img src={solarpanel} className="w-[90%] rounded-lg" />
              </div>
            </Link>
          </div>

          <div className="w-[24%] h-[365px] max-lg:w-fit max-lg:mt-8 border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg cursor-pointer">
            <Link to="/services-solarwaterheater">
              <h3 className="font-semibold text-[20px]">
                <span className="text-logogreen">Solar Water </span> Heaters
              </h3>
              <p className="text-sm mt-2">
                Enjoy hot water anytime, without high electricity bills.
              </p>

              <div className="mt-3">
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Reliable Hot Water</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Lower Bills</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2">Eco-Friendly</span>
                </p>
              </div>
              <div className="mt-3">
                <img src={solarwaterheater} className="w-[90%] rounded-lg" />
              </div>
            </Link>
          </div>

          <div className="w-[24%] h-[365px] max-lg:w-fit max-lg:mt-8 border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg cursor-pointer">
            <Link to="/services-solarpumping">
              <h3 className="font-semibold text-[20px]">
                <span className="text-logogreen">Solar Water </span> Pumping
              </h3>
              <p className="text-sm mt-2">
                An ideal solution for irrigation and large-scale
              </p>

              <div className="mt-3">
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Sustainable Farming</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Reduced Costs</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Energy Efficient</span>
                </p>
              </div>
              <div className="mt-3">
                <img src={solarwaterpumping} className="w-[90%] rounded-lg" />
              </div>
            </Link>
          </div>

          <div className="w-[24%] h-[365px] max-lg:w-fit max-lg:mt-8 border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg cursor-pointer">
            <Link to="/services-solarstreet">
              <h3 className="font-semibold text-[20px]">
                <span className="text-logogreen">Solar Street </span> Lights
              </h3>
              <p className="text-sm mt-2">
                Light up your streets with our durable and cost-effective
                lights.
              </p>

              <div className="mt-3">
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Durable Lighting</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto ">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2"> Cost-Effective</span>
                </p>
                <p className="text-sm mt-1 flex align-center">
                  <span className="text-logogreen my-auto">
                    <FaCheckCircle />
                  </span>{" "}
                  <span className="ml-2">Weather-Resistant</span>
                </p>
              </div>
              <div className="mt-3">
                <img src={solarstreetlight} className="w-[90%] rounded-lg" />
              </div>
            </Link>
          </div>
        </div>

        {/* services cards ends  ........................................................*/}
      </div>

      <div className="mt-10 md:mt-20">
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
        <div className="mt-[12px] max-lg:mt-[40px]">
          {" "}
          <img src={grass} />
        </div>
      </div>
    </>
  );
};

export default Products;
