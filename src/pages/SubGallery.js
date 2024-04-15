import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SubGallery = (props) => {
  const location = useLocation().state;
  const [show, setShow] = useState(false);
  console.log("loccccccccc", location);
  return (
    <>
      {location ? (
        <>
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-2">
            <div>
              <div className="pb-5 text-2xl font-semibold md:text-3xl justify-center">
                Grand Opening
              </div>
            </div>

            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2 ">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center overflow-hidden cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/12_galphoto_small.jpg?img=194354970"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/11_galphoto_small.jpg?img=194354970"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/10_galphoto_small.jpg?img=194354970"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/9_galphoto_small.jpg?img=194354970"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/8_galphoto_small.jpg?img=194354970"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/6_galphoto_small.jpg?img=194354970"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-2">
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/5_galphoto_small.jpg?img=194354970"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/3_galphoto_small.jpg?img=194354970"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/2_galphoto_small.jpg?img=194354970"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/1_galphoto_small.jpg?img=145410957?img=194354970"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-2">
            <div>
              <div className="pb-5 text-2xl font-semibold md:text-3xl justify-center">
                4TH ANNIVERSARY
              </div>
            </div>
            <div class="-m-1 flex flex-wrap md:-m-2">
              <div class="flex w-1/2 flex-wrap">
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center overflow-hidden cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/25_galphoto_small.jpeg?img=204712530"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/24_galphoto_small.jpeg?img=204712530"
                  />
                </div>
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/23_galphoto_small.jpeg?img=204712530"
                  />
                </div>
              </div>
              <div class="flex w-1/2 flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/21_galphoto_small.jpeg?img=204712530"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/22_galphoto_small.jpeg?img=204712530"
                  />
                </div>
                <div class="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/20_galphoto_small.jpeg?img=204712530"
                  />
                </div>

                <div class="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center cursor-pointer img-resp hover:scale-105 transition-transform duration-300 ease-in-out"
                    src="https://www.suncitysolar.in/galphoto/19_galphoto_small.jpeg?img=204712530"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SubGallery;
