import React from "react";
import { GrInstallOption } from "react-icons/gr";
import { MdGppGood } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
const Servicesheater = () => {
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
            Solar Water Heaters{" "}
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-10 h-fit sm:h-fit md:h-fit lg:h-[70vh] w-full">
        <div className="w-[78%] flex-col p-4">
          <div className=" pb-5 mt-2 text-2xl font-semibold md:text-3xl justify-center">
            Solar Water Heaters
          </div>

          <p className="text-[17.24px] leading-[1.8]">
            A solar thermal collector collects heat by absorbing sunlight. The
            term "solar collector" commonly refers to a device for solar hot
            water heating, but may refer to large power generating installations
            such as solar parabolic troughs and solar towers or non water
            heating devices such as solar air heaters.
          </p>

          <p className="text-[17.24px] leading-[1.8]">
            Solar thermal collectors are either non-concentrating or
            concentrating. In non-concentrating collectors, the aperture area
            (i.e., the area that receives the solar radiation) is roughly the
            same as the absorber area (i.e., the area absorbing the radiation).
            This type has no extra parts except the collector itself.
            Concentrating collectors have a much bigger aperture than absorber
            area (additional mirrors focus sunlight on the absorber) and only
            harvest the direct component of sunlight.
          </p>

          <p className="text-[17.24px] leading-[1.8]">
            Non-concentrating collectors are typically used in residential and
            commercial buildings for space heating, while concentrating
            collectors in concentrated solar power plants generate electricity
            by heating a heat-transfer fluid to drive a turbine connected to an
            electrical generator. Unglazed liquid collectors are commonly used
            to heat water for swimming pools but can also be applied to large
            scale water pre-heating. When loads are large relative to available
            collector area the bulk of the water heating can be done at low
            temperature, lower than swimming pool temperatures where unglazed
            collectors are well established in the marketplace as the right
            choice. Because these collectors need not withstand high
            temperatures, they can use less expensive materials such as plastic
            or rubber.
          </p>
        </div>
      </div>
      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-[42vh] w-full">
        <div className="w-[78%] flex-col pl-3">
          <div className=" pb-5  text-2xl font-semibold md:text-3xl justify-center">
            Why choose us?
          </div>

          <div className="flex-1 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex max-lg:flex-col gap-2">
              <MdGppGood size={50} className="mt-8" color="#4aab3d" />

              <div className="flex flex-col">
                <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                  Best in class quality for all type of usage
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
                  Quick installation & best service
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
                  5 Years on-site warranty
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
                  One-time investment (20 years life)
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

      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-fit w-full pb-10 mt-7 md:mt-0 lg:mt-0">
        <div className="w-[78%] flex-col pl-3">
          <div className=" pb-5 text-2xl font-semibold md:text-3xl justify-center">
            Applications
          </div>
          <p className="text-[17.24px] leading-[1.4]">
            The main use of this technology is in residential buildings where
            the demand for hot water has a large impact on energy bills. This
            generally means a situation with a large family, or a situation in
            which the hot water demand is excessive due to frequent laundry
            washing.
          </p>
          <p className="text-[17.24px] leading-[1.4] mt-4">
            Commercial applications include laundromats, car washes, military
            laundry facilities and eating establishments.
          </p>
        </div>
      </div>
    </>
  );
};

export default Servicesheater;
