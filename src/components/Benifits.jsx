import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaCheck } from "react-icons/fa6";
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
    <div className="h-[80vh] flex justify-center hfitt">
      <div className="w-[78%] flex hcoll">
        <div className="h-fit w-fit flex flex-1 justify-center">
          <Sliderr
            {...settings}
            className="overflow-hidden z-0 heroslider h-[70vh] w-[70vh] max-lg:h-[40vh] max-lg:w-[40vh]  border border-[#87AB42] rounded-2xl"
          >
            <div className=" mt-12">
              <img
                src={"https://www.suncitysolar.in/images/employment.png"}
                className=""
              />
            </div>
            <div className="mt-12">
              <img src={"https://www.suncitysolar.in/images/home.jpg"} />
            </div>
            <div className="mt-12">
              <img src={"https://www.suncitysolar.in/images/savings.png"} />
            </div>
          </Sliderr>
        </div>
        <div className="flex-1 rounded-2xl px-1 md:px-5">
          <div className="flex-1  h-fit w-fit px-1 md:px-5">
            <div className=" pb-5 font-[500] text-4xl">
              Benefits of applying our solar products in your business or in
              your system
            </div>

            <div className="  pb-3 pr-3">
              <ul>
                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    Saving in electricity bill of your plant or home.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    Reward on excess generation.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    Return on investment (ROI) 4 to 5 years.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">Low maintenance.</li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    Long life 30 to 35 years.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    Environment friendly green energy without pollution.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    Govt. supports subsidy / accelerated depreciation.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    You can add value to home.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    You need more power back up with less electricity bill.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    You can save yourself from electricity crisis.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
                    You can take advantage of state & centre govt. policies.
                  </li>
                </div>

                <div className="flex items-center gap-2">
                  <FaCheck color="ff6000" size={20} />
                  <li className="mt-1 text-[#4aab3d]">
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
