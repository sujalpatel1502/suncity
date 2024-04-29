import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Female from "../assets/images/Female.webp";
import Male from "../assets/images/Male.webp";
const Performer = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          background: "#001861",
          height: "45px",
          width: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "18px",
          zIndex: 50,
          borderRadius: "25px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          color: "black",
          background: "#001861",
          height: "45px",
          width: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "18px",
          zIndex: 5,
          borderRadius: "25px",
        }}
        onClick={onClick}
      />
    );
  }
  const data = [
    {
      name: "Mansi Patel",
      review:
        "Our electric bills went down a lot after we got these solar panels.",
      img: Female,
    },
    {
      name: "Shivani Shah",
      review: " It’s cheaper to run our farm with these solar pumps.",
      img: Female,
    },
    {
      name: "Tushar Tank",
      review: "Our streets are bright at night now, and it saves us money.",
      img: Male,
    },
    {
      name: "Ayush Rajput",
      review:
        "Our electric bills went down a lot after we got these solar panels.",
      img: Male,
    },
    {
      name: "Jay Rathod",
      review: "It’s cheaper to run our farm with these solar pumps.",
      img: Male,
    },
  ];
  var settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay:true,
    // autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-lg:h-[70vh] h-[650px] flex justify-center mb-28 mt-20">
      <div className="w-[78%] max-w-[1124px]">
        <p className=" text-3xl font-semibold md:text-5xl text-center">
          What Our Customers Say
        </p>

        <div className="mt-10">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div className=" text-black  relative flex flex-wrap my-2">
                <div className="h-36 rounded-t-xl gradientbg flex justify-center items-center shadow">
                  <div className="flex  ">
                    <img
                      alt="Review Image"
                      class="mt-[130px] md:mt-[150px] rounded-full object-cover h-1/2 w-1/2 md:h-32 md:w-32 lg:h-32 lg:w-32  left-0 right-0 mx-auto"
                      loading="lazy"
                      fetchpriority="low"
                      src={item.img}
                    />
                  </div>
                </div>
                <div className="rounded-b-xl flex justify-center text-center p-5 shadow h-fit lg:h-[300px] max-lg:h-fit w-full">
                  <div className="mt-16 max-lg:mt-20 flex flex-col justify-center items-center h-fit">
                    <p className="text-2xl font-semibold">{item.name}</p>
                    <hr className="w-64 h-[1px] mt-2" />
                    <p className="mt-4">{item.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Performer;
