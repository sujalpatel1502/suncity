import React, { useEffect, useRef, useState } from "react";
import { Dropdown, Modal, Button } from "antd";
import { FiXCircle, FiLogOut, FiLogIn } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuLogIn } from "react-icons/lu";
import {
  IoIosHome,
  IoMdArrowDropdown,
  IoMdHelpCircleOutline,
  IoIosCall,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaAddressCard, FaRegNewspaper } from "react-icons/fa";

const SubNav = ({
  showSidebar,
  handleSidebar,
  setshowSidebar,
  handleGlitch,
  errRef,
  handleErr,
  change,
}) => {
  let menuRef = useRef(null);
  useEffect(() => {
    if (errRef.current == true) {
      setshowSidebar(true);
    } else if (errRef.current == false) {
      setshowSidebar(false);
    }
  }, [change]);

  useEffect(() => {
    let handleClose = (e) => {
      if (!showSidebar && errRef.current) {
        errRef.current = false;
      }
      if (showSidebar) {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setshowSidebar(false);
        }
      }
    };
    document.addEventListener("mousedown", handleClose);

    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  });
  let email = localStorage.getItem("email");
  let navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showPagesOptions, setShowPagesOptions] = useState(false);
  const [showPortOptions, setShowPortOptions] = useState(false);
  const [showServicesOptions, setShowServicesOptions] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("email");
    navigate("/");
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const Pagesitems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/about-us">
          About Us
        </Link>
      ),
    },
  ];
  const ServicesItems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/services-solarpanels">
          SOLAR PANELS
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/services-solarwaterheater">
          SOLAR WATER HEATERS
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/services-solarpumping">
          SOLAR WATER PUMPING SYSTEMS
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/services-solarstreet">
          SOLAR STREET LIGHTS
        </Link>
      ),
    },
  ];
  const PortfolioItems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/legal">
          COMPLIANCE
        </Link>
      ),
    },
  ];
  const NewsItems = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/sell-old-mobile">
          News Grid
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/sell-old-laptop">
          News Grid 2
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/sell-old-laptop">
          News Carousel 1
        </Link>
      ),
    },
  ];
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768 && showSidebar) {
        handleSidebar();
      }
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showSidebar, handleSidebar]);
  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            OK
          </Button>,
        ]}
      ></Modal>
      <div
        ref={menuRef}
        className={`mysidebar flex flex-col direction-column fixed h-fit w-2/3 lg:hide  top-0 pt-5 bg-gray-50 dark:bg-gray-800 transition ease-in-out delay-150 z-50 ${
          showSidebar ? "showsidebar" : "hidesidebar"
        }`}
        id="sideBar"
      >
        <div
          onClick={handleSidebar}
          className="flex justify-end cursor-pointer"
        >
          <FiXCircle size={24} className="mr-1 mt-1" />
        </div>

        <div></div>
        <div className="basis-1 py-1" onClick={handleSidebar}>
          <a href="/" className="">
            <img src={require("../assets/SUNCITYLOGO.png")} />
          </a>
          <button className="" type="button" onClick={handleSidebar}></button>
        </div>
        <div className="basis-1 py-1 text-white text-xl  px-3">
          <ul className="space-y-2 font-medium ">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <IoIosHome size={26} className="text-lg" />
                </svg>
                <span className="ms-3">Home</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <SiPowerpages color="gray" />
                <div className="w-full flex flex-col">
                  <div
                    onClick={() => setShowPagesOptions(!showPagesOptions)}
                    className="flex justify-between  items-center pr-5"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Pages</span>
                    <div className="bg-gray-300 rounded-sm w-6 flex justify-center">
                      <IoMdArrowDropdown className="text-lg" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <hr />
            <div>
              {showPagesOptions && (
                <div className="font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black">
                  {Pagesitems.map((data) => (
                    <div className=" flex flex-col text-start w-full ml-7">
                      <p className="" onClick={() => handleSidebar()}>
                        {data.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdOutlineMiscellaneousServices color="gray" />

                <div className="w-full flex flex-col">
                  <div
                    onClick={() => setShowServicesOptions(!showServicesOptions)}
                    className="flex justify-between  items-center pr-5"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Services
                    </span>
                    <div className="bg-gray-300 rounded-sm w-6 flex justify-center">
                      <IoMdArrowDropdown className="text-lg" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <hr />
            <div>
              {showServicesOptions && (
                <div className="font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black">
                  {ServicesItems.map((data) => (
                    <div className=" flex flex-col text-start w-full ml-7">
                      <p onClick={() => handleSidebar()}>{data.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <li>
              <Link></Link>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaAddressCard color="gray" />
                <div className="w-full flex flex-col">
                  <div
                    onClick={() => setShowPortOptions(!showPortOptions)}
                    className="flex justify-between  items-center pr-5"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Legal</span>
                    <div className="bg-gray-300 rounded-sm w-6 flex justify-center">
                      <IoMdArrowDropdown className="text-lg" />
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <hr />
            <div>
              {showPortOptions && (
                <div className="font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black">
                  {PortfolioItems.map((data) => (
                    <div className=" flex flex-col text-start w-full ml-7">
                      <p onClick={() => handleSidebar()}>{data.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <li>
              <Link
                rel="noopener noreferrer"
                to="/gallery"
                onClick={handleSidebar}
              >
                <a
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <FaRegNewspaper color="gray" />
                  <div className="w-full flex flex-col">
                    <div className="flex justify-between  items-center pr-5">
                      <span className="flex-1 ms-3 whitespace-nowrap">
                        Gallery
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
            <hr />

            <li>
              <Link to="/contact-us" onClick={handleSidebar}>
                <a
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <IoIosCall />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                </a>
              </Link>
            </li>
            <hr />
            <li>
              <a
                onClick={handleSidebar}
                href="https://www.suncitysolar.in/login.aspx"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <LuLogIn />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Login</span>
              </a>
            </li>
            <hr />
            <li>
              <a
                onClick={handleSidebar}
                href="https://www.suncitysolar.in/registration.aspx"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <MdOutlineAccountCircle />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Register</span>
              </a>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SubNav;
