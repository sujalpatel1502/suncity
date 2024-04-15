import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [vSate, setVState] = useState(false);
  const [vSate1, setVState1] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[78%]  text-center">
          <div className="pb-5  text-2xl font-semibold md:text-3xl justify-center">
            Suncity Solar Photo Gallery
          </div>
          <div className="flex justify-evenly mygallary mb-10">
            <div className="flex flex-col">
              <div
                className="h-[50vh] w-[50vh] flex justify-center items-center self-center cursor-pointer relative"
                onMouseEnter={() => setVState(true)}
                onMouseLeave={() => setVState(false)}
              >
                <img
                  src="https://www.suncitysolar.in/galcat/1_galcat_.jpg?img=154139150"
                  alt="Logo"
                  className="rounded-2xl img-resp hover:scale-110 transition-transform duration-300 ease-in-out"
                />

                {vSate && (
                  <div className="transition-all ease-in duration-300 absolute top-0 left-0 w-full h-full bg-orange-500 opacity-50 rounded-2xl"></div>
                )}
              </div>
              <Link to={"/sub-gallery"} state={true}>
                <div
                  onMouseEnter={() => setVState(true)}
                  className={`transition-all ease-in duration-300 ${
                    vSate ? "block" : "hidden"
                  }  absolute justify-center items-center left-[28%] top-[55%] bg-[#404040] border border-white p-4 w-[20vh] rounded-xl font-bold text-white cursor-pointer hover:bg-transparent`}
                >
                  Read More
                </div>
              </Link>

              <div className=" mt-6 p-5 rounded-xl bg-black text-white cursor-pointer">
                GRAND OPENING
              </div>
            </div>
            <div className="flex flex-col relative">
              <div
                className="h-[50vh] w-[50vh] flex justify-center items-center self-center cursor-pointer relative"
                onMouseEnter={() => setVState1(true)}
                onMouseLeave={() => setVState1(false)}
              >
                <img
                  src="https://www.suncitysolar.in/galcat/2_galcat_.jpeg?img=154139150"
                  alt="Logo"
                  className="rounded-2xl img-resp hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                {vSate1 && (
                  <div className="transition-all ease-in duration-300 absolute top-0 left-0 w-full h-full bg-orange-500 opacity-50 rounded-2xl"></div>
                )}
              </div>
              <Link to={{ pathname: "/sub-gallery" }}>
                <div
                  onMouseEnter={() => setVState1(true)}
                  className={`transition-all ease-in duration-300 ${
                    vSate1 ? "block" : "hidden"
                  }  absolute justify-center items-center left-[31%] top-[39%] bg-[#404040] border border-white p-4 w-[20vh] rounded-xl font-bold text-white cursor-pointer hover:bg-transparent`}
                >
                  Read More
                </div>
              </Link>
              <div className=" mt-6 p-5 rounded-xl bg-black text-white cursor-pointer">
                4Th ANNIVERSARY
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
