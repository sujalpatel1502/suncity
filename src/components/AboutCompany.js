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
      className="bg-[#1f1f25]  xl:h-fit flex flex-col xl:flex-row py-20 mb-20 w-full justify-center items-center"
    >
      <div className="flex flex-1 flex-col xl:flex-row justify-center w-full max-w-[1224px]">
        <div className=" flex flex-1  justify-center">
          <div className=" w-full md:w-[92%] px-4 lg:px-8  h-fit">
            <span className="text-[#4aab3d] lg:text-2xl xl:text-sm underline underline-offset-[5px] pl-1">
              ABOUT OUR COMPANY
            </span>

            <p className="mt-8 md:mt-10 text-white text-3xl font-semibold md:text-5xl md:font-bold">
              Light up your world with renewable
            </p>
            <p className="text-white text-3xl font-semibold md:text-5xl md:font-bold">
              solar power!
            </p>
            <p className="mt-2 text-white text-sm ">
              At Suncity Solar, we believe that renewable energy has the
              potential to improve lives. We have dedicated ourselves to
              developing solar solutions that not only save electricity and
              resources, but also work efficiently. Our solutions are perfect
              for anyone, whether a household or a business, who want to reduce
              carbon emissions and conserve energy. With a one-time investment,
              you may enjoy the benefits of solar energy for years.
            </p>

            <div className="mt-8 md:mt-10 flex items-center">
              <div className="flex flex-col w-[170px] h-[170px] md:h-[170px] p-5 md:p-7 bg-[#2a2a30] rounded-md justify-center">
                <span className="text-[#4aab3d] text-3xl md:text-5xl">29+</span>
                <span className="text-white text-sm md:text-xl">years</span>
                <span className="text-white text-xl mt-2 md:mt-1">
                  Experience
                </span>
              </div>
              <div className="ml-2 md:ml-5">
                <span className=" text-xl md:text-2xl text-white">
                  Award Wining Company
                </span>
                <p className="text-white text-sm">
                  Recognized for our innovative approach and excellence in solar
                  solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1  md:pt-2 justify-center">
          <div className="w-fit">
            <div className="mt-10 md:mt-16 grid  grid-cols-2 gap-4 lg:gap-10 xl:gap:4">
              {arr.map((item, index) => (
                <div
                  className={`flex flex-col xl:w-[200px] xl:h-[200px]  p-4 lg:p-20 xl:p-5 ${
                    index == 0 || index == 3 ? "bg-[#4aab3d]" : "bg-[#2a2a30]"
                  } rounded-md justify-center text-center items-center my-auto`}
                >
                  {index == 0 ? (
                    <span className="text-white text-3xl md:text-5xl">
                      100+
                    </span>
                  ) : index == 1 ? (
                    <span className="text-white text-3xl md:text-5xl">20+</span>
                  ) : index == 2 ? (
                    <span className="text-white text-3xl md:text-5xl">5k+</span>
                  ) : (
                    <span className="text-white text-3xl md:text-5xl">
                      400+
                    </span>
                  )}
                  {index == 0 ? (
                    <span className="text-white text-sm md:text-xl ">
                      Team members
                    </span>
                  ) : index == 1 ? (
                    <span className="text-white text-sm md:text-xl">
                      Winning award
                    </span>
                  ) : index == 2 ? (
                    <span className="text-white text-sm md:text-xl">
                      Complete project
                    </span>
                  ) : (
                    <span className="text-white text-sm md:text-xl">
                      Client review
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
