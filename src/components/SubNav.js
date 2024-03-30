import React, { useEffect, useState } from 'react'
import { Dropdown, Modal, Button } from "antd";
import { FiXCircle, FiLogOut, FiLogIn, } from "react-icons/fi";
import { IoIosHome, IoMdArrowDropdown, IoMdHelpCircleOutline, IoIosCall } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaAddressCard,FaRegNewspaper } from "react-icons/fa";


const SubNav = ({ showSidebar, handleSidebar }) => {
  let email = localStorage.getItem("email");
  let navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showPagesOptions, setShowPagesOptions] = useState(false)
  const [showPortOptions, setShowPortOptions] = useState(false)
  const [showServicesOptions, setShowServicesOptions] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

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

  const items = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/sell-old-mobile">
          Sell Old Phone
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
        <Link rel="noopener noreferrer" to="/sell-old-laptop">
          Sell Old Laptop
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
      >
      </Modal>
      <div className={`mysidebar flex flex-col direction-column absolute h-screen w-2/3 lg:hide  top-0 pt-5 bg-gray-50 dark:bg-gray-800 transition ease-in-out delay-150 z-50 ${showSidebar ? 'showsidebar' : 'hidesidebar'}`} id="sideBar" >
        <div onClick={handleSidebar} className='flex justify-end cursor-pointer'>
          <FiXCircle size={24} className="mr-1 mt-1" />

        </div>

        <div>

        </div>
        <div className="basis-1 py-1" onClick={handleSidebar}>
          <a href="/" className="">
            <img src={require("../assets/SUNCITYLOGO.png")}/>
          </a>
          <button className="" type="button" onClick={handleSidebar}>

          </button>
        </div>
        <div className="basis-1 py-1 text-white text-xl  px-3">
          <ul className="space-y-2 font-medium ">
            <li>
              <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">

                  <IoIosHome size={26} className="text-lg" />
                </svg>
                <span className="ms-3">Home</span>
              </a>
            </li>
            <hr/>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <SiPowerpages color='gray'/>
                <div className='w-full flex flex-col'>
                  <div onClick={() => setShowPagesOptions(!showPagesOptions)} className='flex justify-between  items-center pr-5'>
                    <span className="flex-1 ms-3 whitespace-nowrap">Pages</span>
                    <div className='bg-gray-300 rounded-sm w-6 flex justify-center'>
                    <IoMdArrowDropdown className="text-lg" />
                    </div>


                  </div>

                </div>


              </a>
            </li>
            <hr/>
            <div>
            {
              showPagesOptions &&
              <div className='font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black'>

                {
                  items.map((data) => (
                    <p onClick={()=>handleSidebar()}>{data.label}</p>
                  ))
                }
              </div>
            }
          </div>

            <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <MdOutlineMiscellaneousServices color='gray'/>

              <div className='w-full flex flex-col'>
                <div onClick={() => setShowServicesOptions(!showServicesOptions)} className='flex justify-between  items-center pr-5'>
                  <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
                  <div className='bg-gray-300 rounded-sm w-6 flex justify-center'>
                  <IoMdArrowDropdown className="text-lg" />
                  </div>


                </div>

              </div>


            </a>
          </li>
          <hr/>
          <div>
              {
                showServicesOptions &&
                <div className='font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black'>

                  {
                    items.map((data) => (
                      <p onClick={()=>handleSidebar()}>{data.label}</p>
                    ))
                  }
                </div>
              }
            </div>

          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaAddressCard color='gray'/>
              <div className='w-full flex flex-col'>
                <div onClick={() => setShowPortOptions(!showPortOptions)} className='flex justify-between  items-center pr-5'>
                  <span className="flex-1 ms-3 whitespace-nowrap">Portfolio</span>
                  <div className='bg-gray-300 rounded-sm w-6 flex justify-center'>
                  <IoMdArrowDropdown className="text-lg" />
                  </div>


                </div>

              </div>


            </a>
          </li>
          <hr/>
          <div>
              {
                showPortOptions &&
                <div className='font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black'>

                  {
                    items.map((data) => (
                      <p onClick={()=>handleSidebar()}>{data.label}</p>
                    ))
                  }
                </div>
              }
            </div>

          <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaRegNewspaper color='gray'/>
              <div className='w-full flex flex-col'>
                <div onClick={() => setShowOptions(!showOptions)} className='flex justify-between  items-center pr-5'>
                  <span className="flex-1 ms-3 whitespace-nowrap">News</span>
                  <div className='bg-gray-300 rounded-sm w-6 flex justify-center'>
                  <IoMdArrowDropdown className="text-lg" />
                  </div>


                </div>

              </div>


            </a>
          </li>
<hr/>
          

            <div>
              {
                showOptions &&
                <div className='font-semibold text-sm flex flex-col justify-center items-center w-44 gap-5 text-black'>

                  {
                    items.map((data) => (
                      <p onClick={()=>handleSidebar()}>{data.label}</p>
                    ))
                  }
                </div>
              }
            </div>
          
            <li>
              <a href="/contact-us" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <IoIosCall />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </a>
            </li>
            <hr/>
           
          </ul>
        </div>


      </div>
    </>
  )
}

export default SubNav
