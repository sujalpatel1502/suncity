import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
// import data from "../data/product.json";

const SubGallery = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const location = useLocation().state;
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // cash flex  data

  // const [show, setShow] = useState(false);
  // console.log(
  //   "loccccccccc",
  //   location,
  //   data.entity.buybackOffers[0].nested.length
  // );

  // for (let i = 0; i <= 34; i++) {
  //   console.log("i", data.entity.buybackOffers[0].nested[i]);
  // }

  return (
    <>
      <div className="w-full  flex flex-col justify-center items-center self-center">
        <div className="w-full max-w-[1124px] ">
          {location ? (
            <>
              <div class="container mx-auto px-5 py-2 lg:px-5 lg:pt-2 mt-7">
                <div>
                  <div className="pb-5 text-2xl font-semibold md:text-3xl justify-center">
                    Grand Opening
                  </div>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/12_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/11_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/10_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/9_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/8_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/6_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/5_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/3_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/2_galphoto_small.jpg?img=194354970"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/1_galphoto_small.jpg?img=145410957?img=194354970"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-end max-lg:justify-center mt-8 mb-4 cursor-pointer max-lg:mr-0 mr-10">
                <div onClick={scrollToTop}>
                  <div class="b animate-bounce flex justify-center items-center p-5 rounded-full bg-[#87AB42]">
                    <FaArrowUp />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div class="container mx-auto px-5 py-2 lg:px-5 lg:pt-2 mt-10">
                <div>
                  <div className="pb-5 text-2xl font-semibold md:text-3xl justify-center">
                    4TH ANNIVERSARY
                  </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/25_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/24_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/23_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/21_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/22_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/20_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      class="h-auto max-w-full rounded-lg cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                      src="https://www.suncitysolar.in/galphoto/19_galphoto_small.jpeg?img=204712530"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-end max-lg:justify-center mt-8 mb-4 cursor-pointer max-lg:mr-0 mr-10">
                <div onClick={scrollToTop}>
                  <div class="b animate-bounce flex justify-center items-center p-5 rounded-full bg-[#87AB42]">
                    <FaArrowUp />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SubGallery;
