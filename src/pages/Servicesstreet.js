import React from "react";
import { GrInstallOption } from "react-icons/gr";
import { MdGppGood } from "react-icons/md";
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
        className=" px-5 md:px-28 w-full pt-7 font-bold text-2xl  h-[60vh] max-lg:h-[40vh] flex flex-col justify-center items-center"
      >
        <div className="w-[88%] flex flex-col justify-center">
          <span className="text-3xl md:text-6xl lg:text-6xl text-white">
            Solar Street Lights{" "}
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10 h-fit sm:h-fit md:h-fit lg:h-[32vh] w-full ">
        <div className="w-[78%] flex-col pl-0 md:pl-5 lg:pl-5">
          <div className=" pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
            Solar Street Lights
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
      <div className="flex justify-center mt-10 h-fit sm:h-fit md:h-fit lg:h-[80vh] w-full ">
        <div className="w-[78%] flex-col pl-0 md:pl-5 lg:pl-5">
          <div className="pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
            Solar street lights consist of 4 main parts:
          </div>
          <div className="flex gap-5 max-lg:flex-col mt-5">
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit md:w-80 lg:w-80  hover:border-logogreen hover:border-[1px] transition-all ease-in duration-300 cursor-pointer">
              <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src="https://www.suncitysolar.in/images/psolar-panels.png"
                  alt="card-image"
                />
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Solar Panels
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  The solar panel is one of the most important parts of solar
                  street lights, as the solar panel will convert solar energy
                  into electricity.
                </p>
              </div>
            </div>

            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit md:w-80 lg:w-80  hover:border-logogreen hover:border-[1px] transition-all ease-in duration-300 cursor-pointer">
              <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src="https://m.media-amazon.com/images/I/61+hBo7FlpL._AC_SX679_.jpg"
                  alt="card-image"
                  className=""
                />
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Lighting Fixture
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  LED is usually used as lighting source of modern solar street
                  light, as the LED will provide much higher Lumens with lower
                  energy consumption.
                </p>
              </div>
            </div>

            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit md:w-80 lg:w-80  hover:border-logogreen hover:border-[1px] transition-all ease-in duration-300 cursor-pointer">
              <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src="https://www.suncitysolar.in/images/psolar-panels.png"
                  alt="card-image"
                  className="overflow-hidden bg-contain"
                />
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Rechargeable Battery
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Battery will store the electricity from solar panel during the
                  day and provide energy to the fixture during night.
                </p>
              </div>
            </div>

            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-fit md:w-80 lg:w-80  hover:border-logogreen hover:border-[1px] transition-all ease-in duration-300 cursor-pointer">
              <div class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src="https://m.media-amazon.com/images/I/61+hBo7FlpL._AC_SX679_.jpg"
                  alt="card-image"
                  className=""
                />
              </div>
              <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Pole
                </h5>
                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Strong Poles are necessary to all street lights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-[45vh] w-full mt-8 md:mt-0 lg:mt-0">
        <div className="w-[78%] flex-col pl-0 md:pl-5 lg:pl-5">
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
        <div className="w-[78%] flex-col pl-0 md:pl-5 lg:pl-5">
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
