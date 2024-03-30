import React from 'react'
import { Dropdown, Modal, Button } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
const Nav = () => {
    
    const Pagesitems = [
        {
          key: "1",
          label: (
            <Link rel="noopener noreferrer" to="/sell-old-mobile">
              About Us
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
            <Link rel="noopener noreferrer" to="/sell-old-laptop">
              Testimonial
            </Link>
          ),
        },
        {
            key: "3",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
                Team
              </Link>
            ),
          },
          {
            key: "4",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
                Shop
              </Link>
            ),
          },
          {
            key: "5",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
                My account
              </Link>
            ),
          },
          {
            key: "6",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
               Error Page
              </Link>
            ),
          },
      ];
      const ServicesItems = [
        {
          key: "1",
          label: (
            <Link rel="noopener noreferrer" to="/sell-old-mobile">
              Service Grid 1
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
            <Link rel="noopener noreferrer" to="/sell-old-laptop">
            Service Grid 2
            </Link>
          ),
        },
        {
            key: "3",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
                Service Carousel 1
              </Link>
            ),
          },
          {
            key: "4",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
              Service Carousel 2
              </Link>
            ),
          },
          {
            key: "5",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
                Service Details
              </Link>
            ),
          },
      ];
      const PortfolioItems = [
        {
          key: "1",
          label: (
            <Link rel="noopener noreferrer" to="/sell-old-mobile">
              Portfolio Grid
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
            <Link rel="noopener noreferrer" to="/sell-old-laptop">
            Portfolio Carousel
            </Link>
          ),
        },
        {
            key: "3",
            label: (
              // <Link target="_blank" rel="noopener noreferrer" to="/sell-old-laptop">
              <Link rel="noopener noreferrer" to="/sell-old-laptop">
              Portfolio Details
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
     
  return (
    <div className=' hidden lg:flex h-[10vh] flex justify-center'>
     <div className='w-full max-w-[1224px] flex items-center justify-between px-8'>
     <div className='flex  flex-1 justify-around'>
     <a href="/" className="hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" className=" rounded-md px-3 py-2 text-sm font-medium">
              <Dropdown menu={{items:Pagesitems}} placement="bottom"
              arrow>
                <a
                  className="font-bold  flex items-center space-x-1"
                  onClick={(e) => e.preventDefault()}
                >
                  <p className="hover:text-[#87AB42] text-sm font-medium">Pages</p>
                </a>
              </Dropdown>
            </a>

            <a href="#" className="hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium">
            <Dropdown menu={{ items:ServicesItems }} placement="bottom"
            arrow>
              <a
                className="font-bold  flex items-center space-x-1 "
                onClick={(e) => e.preventDefault()}
              >
                <p className=" hover:text-[#87AB42] text-sm font-medium">Services</p>
              </a>
            </Dropdown>
          </a>

          <a href="#" className=" hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium">
          <Dropdown menu={{ items:PortfolioItems }} placement="bottom"
          arrow>
            <a
              className="font-bold  flex items-center space-x-1 "
              onClick={(e) => e.preventDefault()}
            >
              <p className=" hover:text-[#87AB42] text-sm font-medium">Portfolio</p>
            </a>
          </Dropdown>
        </a>

        <a href="#" className=" hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium">
        <Dropdown menu={{ items:NewsItems }} placement="bottom"
        arrow>
          <a
            className="ml-5 font-bold  flex items-center space-x-1 "
            onClick={(e) => e.preventDefault()}
          >
            <p className="hover:text-[#87AB42] text-sm font-medium">News</p>
          </a>
        </Dropdown>
      </a>
      <a href="#" className=" hover:text-[#87AB42] rounded-md px-3 py-2 text-sm font-medium">
      
          <p className="hover:text-[#87AB42] text-sm font-medium">Contact</p>
    </a>
     </div>
     <div className='flex-1 px-3 py-1 flex justify-around items-center ml-16'>
            <div className='justify-center items-center text-center '>
            <span className='cursor-pointer hover:text-[#87AB42] mr-1'>Login</span>/<span className=' ml-1 cursor-pointer hover:text-[#87AB42]'>Register</span>
            </div>  
            <div className='w-[1px] h-14 bg-gray-400'>
            </div>
         <div className=' flex justify-between'>
         <div className='ml-6 rounded-lg border p-2 bg-[#87AB42] cursor-pointer' >
         GET A QUOTE
         </div>
         
         </div>
     </div>
     
     </div>
    </div>
  )
}

export default Nav
