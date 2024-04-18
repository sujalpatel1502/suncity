import React from "react";
import { GrInstallOption } from "react-icons/gr";
import { MdGppGood } from "react-icons/md";
import serviceimage1 from "../assets/images/service-5.jpg";
import { IoTimer } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
const Servicesstreet = () => {
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
            Solar Street Lights{" "}
          </span>
          {/* <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p> */}
        </div>
      </div>

      <div className="flex justify-center mt-10 h-fit sm:h-fit md:h-fit lg:h-[36vh] w-full ">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className=" pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
          Sustainable lighting solution with the power of solar

          </div>

          <p className="text-[17.24px] leading-[1.8]">
            Solar street lights are raised light sources which are powered by
            solar panels generally mounted on the lighting structure or
            integrated in the pole itself. The solar panels charge a
            rechargeable battery, which powers a fluorescent or LED lamp during
            the night.
          </p>
          <p className="text-[17.24px] leading-[1.8]">
            Most solar lights turn on and turn off automatically by sensing
            outdoor light using solar panel voltage. Solar streetlights are
            designed to work throughout the night. Many can stay lit for more
            than one night if the sun is not available for a couple of days.
            Older models included lamps that were not fluorescent or LED. Solar
            lights installed in windy regions are generally equipped with flat
            panels to better cope with the winds.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10 h-fit sm:h-fit md:h-fit lg:h-[520px] w-full ">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className="pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
            Solar street lights consist of 4 main parts:
          </div>
          <div className="flex px-2 md:px-1 justify-between	mt-5 md:mt-7 max-lg:flex-col max-lg:w-fit items-center">
            <div className="w-[24%] h-[365px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://www.suncitysolar.in/images/psolar-panels.png"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">Solar </span> Panels
                </h3>
                <p className="text-sm mt-2">
                  The solar panel is one of the most important parts of solar
                  street lights, as the solar panel will convert solar energy
                  into electricity.
                </p>
              </div>
            </div>

            <div className="w-[24%] h-[365px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://m.media-amazon.com/images/I/61+hBo7FlpL._AC_SX679_.jpg"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">Lighting </span> Fixture
                </h3>
                <p className="text-sm mt-2">
                  LED is usually used as lighting source of modern solar street
                  light, as the LED will provide much higher Lumens with lower
                  energy consumption.
                </p>
              </div>
            </div>

            <div className="w-[24%] h-[365px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://www.suncitysolar.in/images/psolar-panels.png"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">Rechargeable </span> Battery
                </h3>
                <p className="text-sm mt-2">
                  Battery will store the electricity from solar panel during the
                  day and provide energy to the fixture during night.
                </p>
              </div>
            </div>

            <div className="w-[24%] h-[365px] max-lg:mt-8 max-lg:w-fit border-[1px] border-[#c5fdd9] hover:border-logogreen hover:border-[1px] px-5 py-8 transition-all ease-in duration-300 rounded-lg">
              <img
                src="https://m.media-amazon.com/images/I/61+hBo7FlpL._AC_SX679_.jpg"
                className="w-[300px] h-[150px] rounded-lg"
              />

              <div className="mt-3">
                <h3 className="font-semibold text-[20px]">
                  <span className="text-logogreen">Pole </span>
                </h3>
                <p className="text-sm mt-2">
                  Strong Poles are necessary to all street lights.
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
        <div className="w-full max-w-[1124px] flex-col  px-5 md:px-2">
          <div className=" pb-5  text-2xl font-semibold md:text-3xl justify-center">
            Advantages
          </div>
          <p className="text-[17.24px] leading-[1.4]">
            Solar street lights are independent of the utility grid. Hence, the
            operation costs are minimized. They require much less maintenance
            compared to conventional street lights.
          </p>
          <p className="text-[17.24px] leading-[1.4] mt-4">
            Since external wires are eliminated, risk of accidents are minimized
            and are non polluting source of electricity. Separate parts of solar
            system can be easily carried to the remote areas which allows the
            saving of energy and also cost.
          </p>
        </div>
      </div>
    </>
  );
};

export default Servicesstreet;
