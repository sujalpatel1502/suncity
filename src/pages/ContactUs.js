import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Container,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      // toast.error("Please fill all fields");
      return;
    }
    setLoading(true);

    // try {
    //   // const data = await contactUs(formData);
    //   if (data.success) {
    //     // toast.success("Thank You for Contacting us.");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       subject: "",
    //       message: "",
    //     });
    //     navigate("/");
    //   } else {
    //     // toast.error(data.error);
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   // toast.error("An error occurred. Please try again later.");
    // }
    setLoading(false);
  };
  return (
    <>
      <div
        style={{
          background: `url(${"https://themes.pixelwars.org/energify/demo-01/wp-content/uploads/sites/2/2023/07/modern-container-battery-energy-storage-power-plant-system-accompanied-with-solar-panels-wind-turbine-system-situated-nature-with-mount-st-helens-background-3d-rendering.jpg"})  rgba(0, 0, 0, 0.6)`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
        className=" px-5 md:px-28 w-full pt-7 font-bold text-2xl  h-[60vh] max-lg:h-[40vh] flex flex-col justify-center items-center"
      >
        <div className="w-full max-w-[1124px] flex flex-col justify-center ml-2">
          <span className="text-3xl md:text-2xl lg:text-6xl text-white">
            Contact Us{" "}
          </span>
          {/* <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mt-3">
            custom solutions based Brand to solve Energy problem with Renewable
            energy.
          </p> */}
        </div>
      </div>
      <div className="bg-white  px-5 md:px-20 py-9 text-2xl  flex max-lg:flex justify-center items-center ">
        <div class="font-[sans-serif] mx-auto relative bg-white rounded my-6 max-w-[1100px]">
          <div class="grid lg:grid-cols-3 items-center">
            <div class="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:mb-8">
              <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 fill-blue-600"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 class="text-[#333] text-base font-extrabold mt-4">
                  Visit office
                </h4>
                <p class="text-sm tect-gray-400 mt-2">
                  {" "}
                  3 Floor, Ayushi Tower, Main pal Road, Jodhpur, Rajasthan
                </p>
              </div>
              <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 fill-blue-600"
                  viewBox="0 0 473.806 473.806"
                >
                  <path
                    d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 class="text-[#333] text-base font-extrabold mt-4">
                  Call us
                </h4>
                <p class="text-sm tect-gray-400 mt-2"> 95872 11700</p>
              </div>
              <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 fill-blue-600"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 class="text-[#333] text-base font-extrabold mt-4">
                  Chat to us
                </h4>
                <p class="text-sm tect-gray-400 mt-2">info@suncitysolar.in</p>
              </div>
              <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 fill-blue-600"
                  viewBox="0 0 100 100"
                >
                  <path
                    d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 class="text-[#333] text-base font-extrabold mt-4">Fax</h4>
                <p class="text-sm tect-gray-400 mt-2">+1-548-2588</p>
              </div>
            </div>
            <div class="lg:col-span-2 bg-[#87AB42] rounded sm:p-10 p-4 z-10">
              <h2 class="text-3xl text-white text-center font-extrabold mb-6">
                Contact Us
              </h2>
              <form>
                <div class="max-w-sm mx-auto space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Phone No."
                    class="w-full bg-gray-100 rounded py-3 px-6 text-sm outline-none"
                  />
                  <textarea
                    placeholder="Message"
                    rows="6"
                    class="w-full bg-gray-100 rounded px-6 text-sm pt-3 outline-none"
                  ></textarea>
                  <button
                    type="button"
                    class="text-[#333] mx-auto block relative bg-gray-100 hover:bg-gray-200 font-semibold rounded text-sm px-6 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      fill="currentColor"
                      class="mr-2 inline"
                      viewBox="0 0 548.244 548.244"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-10 py-10">
        <div className=" w-full max-w-[1100px]">
          <div className="grid lg:grid-cols-3 items-center gap-5">
            <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 fill-blue-600"
                viewBox="0 0 512 512"
              >
                <path
                  d="M341.476 338.285c54.483-85.493 47.634-74.827 49.204-77.056C410.516 233.251 421 200.322 421 166 421 74.98 347.139 0 256 0 165.158 0 91 74.832 91 166c0 34.3 10.704 68.091 31.19 96.446l48.332 75.84C118.847 346.227 31 369.892 31 422c0 18.995 12.398 46.065 71.462 67.159C143.704 503.888 198.231 512 256 512c108.025 0 225-30.472 225-90 0-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57 15.57 0 0 0-.517-.758C129.685 221.735 121 193.941 121 166c0-75.018 60.406-136 135-136 74.439 0 135 61.009 135 136 0 27.986-8.521 54.837-24.646 77.671-1.445 1.906 6.094-9.806-110.354 172.918L147.249 245.945zM256 482c-117.994 0-195-34.683-195-60 0-17.016 39.568-44.995 127.248-55.901l55.102 86.463a14.998 14.998 0 0 0 25.298 0l55.101-86.463C411.431 377.005 451 404.984 451 422c0 25.102-76.313 60-195 60z"
                  data-original="#000000"
                ></path>
                <path
                  d="M256 91c-41.355 0-75 33.645-75 75s33.645 75 75 75 75-33.645 75-75-33.645-75-75-75zm0 120c-24.813 0-45-20.187-45-45s20.187-45 45-45 45 20.187 45 45-20.187 45-45 45z"
                  data-original="#000000"
                ></path>
              </svg>
              <h4 class="text-[#333] text-base font-extrabold mt-4">
                KYC Updation / Correction
              </h4>
              <p class="text-sm tect-gray-400 mt-2">
                {" "}
                +91-76655-11700 | kyc@suncitysolar.in
              </p>
            </div>
            <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 fill-blue-600"
                viewBox="0 0 473.806 473.806"
              >
                <path
                  d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zm-154.2-286.1c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zm217.2 96.3c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z"
                  data-original="#000000"
                ></path>
              </svg>
              <h4 class="text-[#333] text-base font-extrabold mt-4">
                Product Purchase/ Upgrade/ Dispatch/ Delivered/ Damage
              </h4>
              <p class="text-sm tect-gray-400 mt-2">
                {" "}
                +91-96106-11700 | support@suncitysolar.in
              </p>
            </div>
            <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 fill-blue-600"
                viewBox="0 0 32 32"
              >
                <path
                  d="M8 30a1.001 1.001 0 0 1-1-1v-5H4c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h24c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3H15.851l-7.226 5.781A.998.998 0 0 1 8 30zM4 4c-.552 0-1 .449-1 1v16c0 .551.448 1 1 1h4a1 1 0 0 1 1 1v3.92l5.875-4.701A1 1 0 0 1 15.5 22H28c.552 0 1-.449 1-1V5c0-.551-.448-1-1-1z"
                  data-original="#000000"
                ></path>
                <path
                  d="M24 12H8a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2zm-8 4H8a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2z"
                  data-original="#000000"
                ></path>
              </svg>
              <h4 class="text-[#333] text-base font-extrabold mt-4">
                Solar Advisor ID Activation
              </h4>
              <p class="text-sm tect-gray-400 mt-2">
                +91-99825-11700 | finance@suncitysolar.in
              </p>
            </div>
            <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 fill-blue-600"
                viewBox="0 0 100 100"
              >
                <path
                  d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                  data-original="#000000"
                ></path>
              </svg>
              <h4 class="text-[#333] text-base font-extrabold mt-4">
                Quotation
              </h4>
              <p class="text-sm tect-gray-400 mt-2">
                +91-98870-11700 | support@suncitysolar.in
              </p>
            </div>
            <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 fill-blue-600"
                viewBox="0 0 100 100"
              >
                <path
                  d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                  data-original="#000000"
                ></path>
              </svg>
              <h4 class="text-[#333] text-base font-extrabold mt-4">
                Grievance Officer
              </h4>
              <p class="text-sm tect-gray-400 mt-2">
                +91-97729-11700 | info@suncitysolar.in
              </p>
            </div>
            <div class="flex flex-col items-center justify-center rounded w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 fill-blue-600"
                viewBox="0 0 100 100"
              >
                <path
                  d="M83 23h-3V11c0-3.309-2.692-6-6-6H26c-3.308 0-6 2.691-6 6v12h-3C8.729 23 2 29.729 2 38v30c0 4.963 4.037 9 9 9h9v12c0 3.309 2.692 6 6 6h48c3.308 0 6-2.691 6-6V77h9c4.963 0 9-4.037 9-9V38c0-8.271-6.729-15-15-15zM26 11h48v12H26zm0 78V59h48v30zm66-21c0 1.654-1.345 3-3 3h-9V59h3a3 3 0 1 0 0-6H17a3 3 0 1 0 0 6h3v12h-9c-1.655 0-3-1.346-3-3V38c0-4.963 4.037-9 9-9h66c4.963 0 9 4.037 9 9zm-27 0a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm0 12a3 3 0 0 1-3 3H38a3 3 0 1 1 0-6h24a3 3 0 0 1 3 3zm21-42a3 3 0 0 1-3 3h-6a3 3 0 1 1 0-6h6a3 3 0 0 1 3 3z"
                  data-original="#000000"
                ></path>
              </svg>
              <h4 class="text-[#333] text-base font-extrabold mt-4">
                For Any Other Queries
              </h4>
              <p class="text-sm tect-gray-400 mt-2">
                95872 11700 | info@suncitysolar.in
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.665793293726!2d72.99543327541754!3d26.272508077034534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c26193d952f%3A0x63a67f3e550fcadd!2sAyushi%20Tower!5e0!3m2!1sen!2sin!4v1713524156846!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
