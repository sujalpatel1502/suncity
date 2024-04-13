import React from "react";

const AboutCompany = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div
      style={{
        backgroundImage: `url(${"https://gossip-themes.com/sunbee/assets/images/bg/experience-bg.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-[#1f1f25]  xl:h-fit flex flex-col xl:flex-row py-20 mb-20"
    >
      <div className=" flex flex-1  justify-center">
        <div className=" w-full md:w-[90%] px-4 lg:px-10 xl:pl-48 h-fit">
          <span className="text-[#4aab3d] lg:text-2xl xl:text-sm underline underline-offset-[5px] pl-1">
            ABOUT OUR COMPANY
          </span>
          <p className="mt-8 md:mt-10 text-white text-3xl font-semibold md:text-5xl md:font-bold">Best Wind Solution &</p>
          <p className="text-white text-3xl font-semibold md:text-5xl md:font-bold">Renewable Energy</p>
          <p className="mt-2 text-white text-sm ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend
            placerat varius sociis, feugiat egestas lacinia tincidunt tempus
            urna sem ridiculus pulvinar semper morbi curae, curabitur sociosqu
            bibendum
          </p>

          <div className="mt-8 md:mt-10 flex items-center">
            <div className="flex flex-col w-[30vh] h-[20vh] md:h-[25vh] p-5 md:p-7 bg-[#2a2a30] rounded-md justify-center">
              <span className="text-[#4aab3d] text-3xl md:text-5xl">29+</span>
              <span className="text-white text-sm md:text-xl">years</span>
              <span className="text-white text-xl mt-2 md:mt-1">Experience</span>
            </div>
            <div className="ml-2 md:ml-5">
              <span className=" text-xl md:text-2xl text-white">Award Wining Company</span>
              <p className="text-white text-sm">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, dui
                facilisis vitae
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1  md:pt-20 justify-center ">
        <div className="w-fit">
          <div className="mt-10 md:mt-16 grid  grid-cols-2 gap-4 lg:gap-10 xl:gap:4">
            {arr.map((item, index) => (
              <div
                className={`flex flex-col xl:w-[30vh] xl:h-[25vh]  p-4 lg:p-20 xl:p-5 ${
                  index == 0 || index == 3 ? "bg-[#4aab3d]" : "bg-[#2a2a30]"
                } rounded-md justify-center text-center items-center my-auto`}
              >
                {index == 0 ? (
                  <span className="text-white text-3xl md:text-5xl">200+</span>
                ) : index == 1 ? (
                  <span className="text-white text-3xl md:text-5xl">20+</span>
                ) : index == 2 ? (
                  <span className="text-white text-3xl md:text-5xl">10k+</span>
                ) : (
                  <span className="text-white text-3xl md:text-5xl">900+</span>
                )}
                {index == 0 ? (
                  <span className="text-white text-sm md:text-xl ">Team members</span>
                ) : index == 1 ? (
                  <span className="text-white text-sm md:text-xl">Winning award</span>
                ) : index == 2 ? (
                  <span className="text-white text-sm md:text-xl">Complete project</span>
                ) : (
                  <span className="text-white text-sm md:text-xl">Client review</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
