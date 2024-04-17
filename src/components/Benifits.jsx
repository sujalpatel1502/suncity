import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderr from "react-slick";
const Benifits = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="h-[550px] flex justify-center hfitt">
      <div className="w-full justify-center md:max-w-[1224px] flex hcoll ml-0 md:ml-7 lg:ml-7">
        <div className="h-fit w-full flex flex-1 justify-center">
          <Sliderr
            {...settings}
            className="overflow-hidden z-0 h-[500px] w-[500px] max-lg:h-[350px] max-lg:w-[350px]  border border-[#87AB42] rounded-2xl"
          >
            <div className=" mt-12">
              <img
                src={require("../assets/images/slider_1.png")}
                className=""
              />
            </div>
            <div className="mt-12">
              <img src={require("../assets/images/slider_2.png")} />
            </div>
            <div className="mt-12">
              <img src={require("../assets/images/slider_3.png")} />
            </div>
            <div className="mt-12">
              <img src={require("../assets/images/slider_4.png")} />
            </div>
          </Sliderr>
        </div>
        <div className="flex-1 rounded-2xl mt-5 px-4 md:px-5">
          <div className="flex-1  h-fit w-fit px-1 md:px-5">
            <div className=" pb-5 mt-2 text-3xl font-semibold md:text-5xl">
              Benefits of applying
            </div>

            <div className="  pb-3 pr-3">
              <ul>
                <div className="flex gap-2 justify-start">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    Saving in electricity bill of your plant or home.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    Reward on excess generation.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    Return on investment (ROI) 4 to 5 years.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">Low maintenance.</li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    Long life 30 to 35 years.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    Environment friendly green energy without pollution.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    Govt. supports subsidy / accelerated depreciation.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    You can add value to home.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    You need more power back up with less electricity bill.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    You can save yourself from electricity crisis.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    You can take advantage of state & centre govt. policies.
                  </li>
                </div>

                <div className="flex gap-2">
                  <div className="mt-2">
                    <FaCircleCheck color="#4aab3d" size={20} />
                  </div>
                  <li className="mt-1 text-[#3f3f3f]">
                    you can save mother earth and environment for upcoming
                    generations.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
