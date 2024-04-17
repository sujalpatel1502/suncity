import React from "react";
import { GrInstallOption } from "react-icons/gr";
import serviceimage1 from "../assets/images/service-5.jpg";
import { MdGppGood } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
const Servicespumping = () => {
  return (
    <>
      <div
        style={{
          background: `url(${"https://themejunction.net/html/solarplus/demo/assets/images/project/video-image.jpg"})  rgba(0, 0, 0, 0.6)`,
          backgroundSize: "contain",
          backgroundBlendMode: "multiply",
        }}
        className="px-2 md:px-28 w-full pt-7 font-bold text-2xl  h-[60vh] max-lg:h-[40vh] flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-[1124px] flex flex-col justify-center px-5 md:px-2">
          <span className="text-3xl md:text-6xl lg:text-6xl text-white">
            Solar Water Pumping System{" "}
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10 h-fit sm:h-fit md:h-fit lg:h-[28vh] w-full">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className=" pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
            Solar Water Pumping System
          </div>

          <p className="text-[17.24px] leading-[1.8]">
            A solar-powered pump is a pump running on electricity generated by
            photovoltaic panels or the radiated thermal energy available from
            collected sunlight as opposed to grid electricity or diesel run
            water pumps.
          </p>
          <p className="text-[17.24px] leading-[1.8]">
            The operation of solar powered pumps is more economical mainly due
            to the lower operation and maintenance costs and has less
            environmental impact than pumps powered by an internal combustion
            engine (ICE).
          </p>
        </div>
      </div>
      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-[580px] w-full mt-5 md:mt-0 lg:mt-0 ">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2 ">
          <div className=" pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
            Solar pumping system consist of 3 main parts:
          </div>
          <div className="flex px-2 md:px-1 justify-between	mt-5 md:mt-7 max-lg:flex-col max-lg:w-fit items-center">
            <div className="w-[31%] h-[465px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://www.suncitysolar.in/images/psolar-panels.png"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">Solar </span> Panels
                </h3>
                <p className="text-sm mt-2">
                  The solar panels make up most (up to 80%) of the systems cost.
                  The size of the PV-system is directly dependent on the size of
                  the pump, the amount of water that is required (m³/d) and the
                  solar irradiance available.
                </p>
              </div>
            </div>
            <div className="w-[31%] h-[465px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://m.media-amazon.com/images/I/61+hBo7FlpL._AC_SX679_.jpg"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">The </span> Controller
                </h3>
                <p className="text-sm mt-2">
                  The purpose of the controller is twofold. Firstly, it matches
                  the output power that the pump receives with the input power
                  available from the solar panels. Secondly, a controller
                  usually provides a low voltage protection, whereby the system
                  is switched off, if the voltage is too low or too high for the
                  operating voltage range of the pump
                </p>
              </div>
            </div>
            <div className="w-[31%] h-[465px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://www.suncitysolar.in/images/psolar-panels.png"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">The </span> Pump
                </h3>
                <p className="text-sm mt-2">
                  Voltage of the solar pump motors can be AC (alternating
                  current) or DC (direct current). Direct current motors are
                  used for small to medium applications up to about 4 kW rating.
                  Alternating current solar pump with inverters extends from
                  0.15 to 55 kW and can be used for larger irrigation systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-[45vh] w-full mt-8 md:mt-0 lg:mt-0">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className="text-2xl font-semibold md:text-3xl justify-center">
            Why choose us?
          </div>

          <div className="flex-1 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex max-lg:flex-col gap-2">
              <MdGppGood size={50} className="mt-8" color="#4aab3d" />

              <div className="flex flex-col">
                <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                  Best in class product quality
                </span>
                <p className="mt-4 ml-3 text-[#4aab3d]">
                  No Haggling, No Bargaining & Multiple Payment Options
                  Including Cash.
                </p>
              </div>
            </div>

            <div className="flex max-lg:flex-col gap-2">
              <GrInstallOption size={50} className="mt-8" color="#4aab3d" />

              <div className="flex flex-col">
                <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                  24 hours on call instant service
                </span>
                <p className="mt-4 ml-3 text-[#4aab3d]">
                  No Haggling, No Bargaining & Multiple Payment Options
                  Including Cash.
                </p>
              </div>
            </div>
            <div className="flex max-lg:flex-col gap-2">
              <IoTimer size={50} className="mt-8" color="#4aab3d" />

              <div className="flex flex-col">
                <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                  Pumps come with 5 years warranty
                </span>
                <p className="mt-4 ml-3 text-[#4aab3d]">
                  No Haggling, No Bargaining & Multiple Payment Options
                  Including Cash.
                </p>
              </div>
            </div>
            <div className="flex max-lg:flex-col gap-2">
              <MdVerified size={50} className="mt-8" color="#4aab3d" />

              <div className="flex flex-col">
                <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                  1 hp to 40 hp pumps available
                </span>
                <p className="mt-4 ml-3 text-[#4aab3d]">
                  No Haggling, No Bargaining & Multiple Payment Options
                  Including Cash.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-[30vh] w-full mt-8 md:mt-0 lg:mt-0 mb-8 md:mb-0 lg:mb-0">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className=" pb-5  text-2xl font-semibold md:text-3xl justify-center">
            Advantages
          </div>
          <p className="text-[17.24px] leading-[1.4]">
            Solar powered water pumps can deliver drinking water as well as
            water for livestock or irrigation purposes. They may be especially
            useful in small scale or community based irrigation and require much
            less maintenance.
          </p>
          <p className="text-[17.24px] leading-[1.4] mt-4">
            Solar pumps are useful where grid electricity is unavailable and
            alternative sources (in particular wind) do not provide sufficient
            energy. Separate parts of the system can be easily carried to the
            remote areas which allows the saving of energy and also cost.
          </p>
        </div>
      </div>
    </>
  );
};

export default Servicespumping;
