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
          zIndex: 50,
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
        "Every step, from listing to payment, was transparent and speedy. Cashflex clearly values sellers and buyers.",
      img: Female,
    },
    {
      name: "Shivani Shah",
      review:
        "I've sold several devices using Cashflex, and each time the transaction went well. Highly recommended for anyone who wants to simplify their gadget-selling process and make some money.",
      img: Female,
    },
    {
      name: "Tushar Tank",
      review:
        "Selling my old phone seemed challenging until I discovered Cashflex. They quickly linked me with buyers, and I received an excellent offer.",
      img: Male,
    },
    {
      name: "Ayush Rajput",
      review:
        "I was impressed at how simple and secure it was to sell my tablet with Cashflex. Received the best pricing without any trouble.",
      img: Male,
    },
    {
      name: "Jay Rathod",
      review:
        "Everything went smoothly and quickly, from listing my old laptop to receiving payment. Cashflex is now my go-to for selling electronics.",
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
    <div className="max-lg:h-[70vh] h-[650px] flex justify-center mb-28">
      <div className="w-[78%] max-w-[1124px]">
        <p className=" text-3xl font-semibold md:text-5xl text-center">
          Testimonials
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
