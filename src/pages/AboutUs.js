import React from "react";
const AboutUs = () => {
  return (
    <>
      <div
        style={{
          background: `url(${"https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/modern-container-battery-energy-storage-power-plant-system-accompanied-with-solar-panels-wind-turbine-system-situated-nature-with-mount-st-helens-background-3d-rendering.jpg"})  rgba(0, 0, 0, 0.6)`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
        className=" px-5 md:px-28 w-full pt-7 font-bold text-2xl  h-[60vh] max-lg:h-[40vh] flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-[1124px] flex flex-col justify-center ml-2">
          <span className="text-3xl md:text-2xl lg:text-6xl text-white">
            About SUNCITY SOLAR{" "}
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p>
        </div>
      </div>
      <div className="px-5 md:px-20 pt-9 text-2xl mb-4 ">
        <hr className=" px-1 md:px-5 w-full  bg-black mt-5 px-16" />
      </div>
      <div className="flex justify-center items-center">
        <div className=" px-5 md:px-9 mt-5 flex max-lg:flex-col mb-9 w-full max-w-[1224px]">
          <div className="flex-1  h-fit w-fit px-1 md:px-5">
            <div className=" pb-5 text-2xl  font-bold">About Us</div>

            <div className=" pb-3 pr-3">
              <p>
                Suncity Solar is a innovative and custom solutions based Brand
                to solve Energy problem with Renewable energy.
              </p>
              <p className="mt-3">
                Our aim is to generate energy for the future. Solar power
                remains the most secure source of energy for the future. We set
                global standards in achieving this goal. As an international
                photovoltaic system integrator we develop, plan, build and
                operate utility-scale, commercial and industrial photovoltaic
                plants. As an EPC contractor specializing in the design and
                execution of solar power plants. In a short span of time, we are
                able to carve a niche as a one stop solution provider with the
                help of dedicated and qualified execution and customer support
                team which is well supported by R&D team and advisors from
                industry and IITs. We are committed to deliver integrated
                sustainable energy solutions and products.
              </p>
            </div>
          </div>
          <div className="flex-1 rounded-2xl px-1 md:px-5 ">
            <div className="h-fit w-fit flex justify-center items-center self-center flex-1">
              <img
                src="https://www.suncitysolar.in/images/home.jpg"
                alt="Logo"
                className="border rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
