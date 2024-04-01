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
      className="bg-[#1f1f25] h-[100vh] max-lg:h-fit flex max-lg:flex-col w-fit"
    >
      <div className=" flex flex-1 pt-20 justify-center">
        <div className=" w-full max-lg:pl-[1rem] pl-48 h-fit">
          <span className="text-[#4aab3d] underline underline-offset-[5px] pl-1">
            ABOUT OUR COMPANY
          </span>
          <p className="mt-10 text-5xl text-white">Best Wind Solution &</p>
          <p className="text-5xl text-white">Renewable Energy</p>
          <p className="mt-5 text-white">
            Lorem ipsum dolor sit amet consectetur adipiscing elit eleifend
            placerat varius sociis, feugiat egestas lacinia tincidunt tempus
            urna sem ridiculus pulvinar semper morbi curae, curabitur sociosqu
            bibendum
          </p>

          <div className="mt-14 flex items-center">
            <div className="flex flex-col w-[30vh] h-[25vh] p-7 bg-[#2a2a30] rounded-md justify-center">
              <span className="text-[#4aab3d] text-5xl">29+</span>
              <span className="text-white text-xl">years</span>
              <span className="text-white text-xl">Experience</span>
            </div>
            <div className="ml-5">
              <span className=" text-2xl text-white">Award Wining Company</span>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, dui
                facilisis vitae
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 pt-20 justify-center max-lg:pb-5">
        <div className="w-fit">
          <div className="mt-16 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4">
            {arr.map((item, index) => (
              <div
                className={`flex flex-col w-[30vh] h-[25vh] max-lg:h-[20vh] max-lg:w-[20vh] p-7 ${
                  index == 0 || index == 3 ? "bg-[#4aab3d]" : "bg-[#2a2a30]"
                } rounded-md justify-center items-center`}
              >
                {index == 0 ? (
                  <span className="text-white text-5xl">200+</span>
                ) : index == 1 ? (
                  <span className="text-white text-5xl">20+</span>
                ) : index == 2 ? (
                  <span className="text-white text-5xl">10k+</span>
                ) : (
                  <span className="text-white text-5xl">900+</span>
                )}
                {index == 0 ? (
                  <span className="text-white text-xl">Team member</span>
                ) : index == 1 ? (
                  <span className="text-white text-xl">Winning award</span>
                ) : index == 2 ? (
                  <span className="text-white text-xl">Complete project</span>
                ) : (
                  <span className="text-white text-xl">Client review</span>
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
