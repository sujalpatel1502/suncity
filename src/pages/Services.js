import React from "react";
import { GrInstallOption } from "react-icons/gr";
import { MdGppGood } from "react-icons/md";
import { IoTimer } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
const Services = () => {
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
        <div className="w-full max-w-[1124px] flex flex-col justify-center ml-2">
          <span className="text-3xl md:text-3xl lg:text-6xl text-white">
            Solar Panels{" "}
          </span>
          {/* <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p> */}
        </div>
      </div>

      <div className="flex justify-center mt-8 h-fit sm:h-fit md:h-fit lg:h-[70vh] w-full mt-10 md:mt-20">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className=" text-2xl font-semibold md:text-3xl justify-center">
          Efficient, Clean Energy for Your Home or Business
          </div>

          <p className="text-[17.24px] leading-[1.8] mt-3">
            Photovoltaic solar panels absorb sunlight as a source of energy to
            generate electricity. A photovoltaic (PV) module is a packaged,
            connected assembly of typically 6x10 photovoltaic solar cells.
            Photovoltaic modules constitute the photovoltaic array of a
            photovoltaic system that generates and supplies solar electricity in
            commercial and residential applications.
          </p>
          <div className="mt-7">
            <div className="mt-2 text-2xl font-semibold md:text-3xl justify-center">
              Why choose us?
            </div>

            <div className="flex-1 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex max-lg:flex-col gap-2">
                <MdGppGood size={50} className="mt-8" color="#4aab3d" />

                <div className="flex flex-col">
                  <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                    We always use best quality
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
                    We're good in quick installation
                  </span>
                  <p className="mt-4 ml-3 text-[#4aab3d] ">
                    No Haggling, No Bargaining & Multiple Payment Options
                    Including Cash.
                  </p>
                </div>
              </div>
              <div className="flex max-lg:flex-col gap-2">
                <IoTimer size={50} className="mt-8" color="#4aab3d" />

                <div className="flex flex-col">
                  <span className="text-xl font-light mt-4 ml-3 text-[#4aab3d]">
                    Long last warranty
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
                    Best in class prices
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
      </div>
      <div className="flex justify-center h-fit sm:h-fit md:h-fit lg:h-[70vh] w-full mt-8 md:mt-0 lg:mt-0 mb-10">
        <div className="w-full max-w-[1124px] flex-col px-5 md:px-2">
          <div className="pb-3 text-2xl font-semibold md:text-3xl justify-center">
            Maintenance
          </div>
          <p className="text-[17.24px] leading-[1.4] mt-3">
            Solar panel conversion efficiency, typically in the 20% range, is
            reduced by dust, grime, pollen, and other particulates that
            accumulate on the solar panel.
          </p>
          <p className="text-[17.24px] leading-[1.4] mt-4">
            Paying to have solar panels cleaned is often not a good investment;
            researchers found panels that had not been cleaned, or rained on,
            for 145 days during a summer drought, lost only 7.4% of their
            efficiency. For larger commercial rooftop systems, the financial
            losses are bigger but still rarely enough to warrant the cost of
            washing the panels. On average, panels lost a little less than 0.05%
            of their overall efficiency per day.
          </p>
          <p className="text-[17.24px] leading-[1.4] mt-4">
            Photovoltaic modules use light energy (photons) from the Sun to
            generate electricity through the photovoltaic effect. The majority
            of modules use wafer-based crystalline silicon cells or thin-film
            cells. The structural (load carrying) member of a module can either
            be the top layer or the back layer. Cells must also be protected
            from mechanical damage and moisture. Most modules are rigid, but
            semi-flexible ones based on thin-film cells are also available. The
            cells must be connected electrically in series, one to another. A PV
            junction box is attached to the back of the solar panel and it is
            its output interface.Externally, most of photovoltaic modules use
            MC4 connectors type to facilitate easy weatherproof connections to
            the rest of the system. Also, USB power interface can be used.
          </p>
          <p className="text-[17.24px] leading-[1.4] mt-4">
            Module electrical connections are made in series to achieve a
            desired output voltage or in parallel to provide a desired current
            capability (amperes). The conducting wires that take the current off
            the modules may contain silver, copper or other non-magnetic
            conductive transition metals. Bypass diodes may be incorporated or
            used externally, in case of partial module shading, to maximize the
            output of module sections still illuminated. Solar panels also use
            metal frames consisting of racking components, brackets, reflector
            shapes, and troughs to better support the panel structure.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
