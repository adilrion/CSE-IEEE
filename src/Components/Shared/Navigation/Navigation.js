import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsPinterest } from "react-icons/bs";

import "./Navigation.css";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "Analytics",
    href: "#",
  },
  {
    name: "Engagement",
    href: "#",
  },
  {
    name: "Security",
    href: "#",
  },
  {
    name: "Integrations",
    href: "#",
  },
  {
    name: "Automations",
    href: "#",
  },
];

const Navigation = () => {
  const [dropDown, setDropDown] = useState(true);
  const [navDropDown, setNavDropDown] = useState(true);
  const [text, setText] = useState("");
  const [color, setColor] = useState(false);

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  };

  const setNavDropDownText = (navText) => {
    setText(navText);
    setNavDropDown(true);
  };

  const changeNavBg = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  return (
    <div className=" shadow-sm">
      <div className="">
        {/*  for Larger device */}
        <nav className="hidden md:block navigation ">
          <div className="flex justify-between bg-[#020305] items-center py-2 bg-transparent px-5 lg:px-44 sm:px-10 sm:px-10">
            <div className="flex gap-10 text-xs text-[#808080]">
              <div className="location">
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="contact-number">
                <p>+8801993787377</p>
              </div>
              <div className="email">
                <p>diuieee@gmail.com</p>
              </div>
            </div>
            <div>
              <div className="flex justify-evenly gap-8 ">
                <Link
                  to="#"
                  className="text-xl text-[#808080] bg  hover:text-[#5a5a5a]  transition ease-in-out duration-300"
                >
                  <BsGithub />
                </Link>
                <Link
                  to="#"
                  className=" text-xl text-[#808080] bg  hover:text-[#3b5998] transition ease-in-out duration-300"
                >
                  <BsFacebook />
                </Link>
                <Link
                  to="#"
                  className="text-xl text-[#808080] bg  hover:text-[#bc2a8d] transition ease-in-out duration-300"
                >
                  <BsInstagram />
                </Link>
                <Link
                  to="#"
                  className=" text-xl text-[#808080] bg  hover:text-[#c8232c] transition ease-in-out duration-300"
                >
                  <BsPinterest />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full px-5 lg:px-44 sm:px-10 bg-[#020305]">
            <div className="flex justify-start items-center">
              <h1 className="leading-6 text-5xl text-white">
                DIU <span className="text-[#31dc89]">IEEE</span>
              </h1>
            </div>
            {/* For medium and plus sized devices */}
            <ul className="hidden md:flex flex-auto justify-center">
              <li className="focus:outline-none nav-item-name">
                <Link to="/home">Home</Link>
              </li>
              <li className="focus:outline-none nav-dropdown ">
                <Link
                  to="members"
                  className="inline-flex justify-between items-center  nav-item-name"
                >
                  <span>Members</span>
                  <ChevronDownIcon
                    className="ml-1 h-5 w-5 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Link>
                <div className="nav-dropdown-menu rounded-b-lg shadow-md overflow-hidden z-10 transform  sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="relative grid">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex px-8 py-4 items-start rounded-lg hover:"
                      >
                        <div className="">
                          <p className="text-base font-medium text-white">
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li className="focus:outline-none nav-item-name">
                <Link to="/news">News</Link>
              </li>
              <li className="focus:outline-none nav-item-name">
                <Link to="/event">Events</Link>
              </li>
              <li className="focus:outline-none nav-item-name">
                <Link to="/about">About</Link>
              </li>
              <li className="focus:outline-none nav-item-name">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
            <div className=" flex space-x-5 justify-center items-center pl-2">
              <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="animate-ping w-1.5 h-1.5 bg-[#31dc89] rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                <div className=" w-1.5 h-1.5 bg-[#31dc89] rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
              </div>
            </div>
          </div>
        </nav>
        {/* for smaller devcies */}
        <div className="block md:hidden bg-[#020305] w-full z-50">
          <div className="flex items-center justify-between space-x-3 px-5">
            <div className="flex justify-start items-center">
              <h1 className="leading-6 text-white">
                DIU <span className="text-[#31dc89]">IEEE</span>
                <span className="text-sm text-gray-700 ml-3">{text}</span>
              </h1>
            </div>
            <div
              onClick={() => setDropDown(!dropDown)}
              className="cursor-pointer text-gray-500 p-4"
            >
              <svg
                id="ArrowSVG"
                className={`${
                  dropDown ? "" : "rotate-180"
                } transform duration-100`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="mobile-nav px-5">
            <ul
              id="list"
              className={`${
                dropDown ? "hidden" : "block"
              } font-medium text-base leading-4 w-full rounded shadow-md`}
            >
              <li
                onClick={() => setSelectedText("Home")}
                className=" focus:outline-none duration-100 cursor-pointer nav-item-name-sm"
              >
                Home
              </li>

              <li className="focus:outline-none">
                <button
                  onClick={() => setNavDropDown(!navDropDown)}
                  className="text-white   focus:outline-none duration-100 cursor-pointer text-sm leading-3 font-medium w-full flex justify-between items-center nav-item-name-sm "
                >
                  <span>Members</span>
                  <div className="cursor-pointer text-gray-500 mr-4">
                    <svg
                      id="ArrowSVG"
                      className={`${
                        navDropDown ? "" : "rotate-180 "
                      } transform duration-100`}
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`${
                    navDropDown ? "hidden" : "block"
                  } transform duration-100  w-full overflow-hidden z-10 transform  sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
                >
                  <div className="relative grid">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setNavDropDownText(item.name)}
                        className="focus:outline-none  duration-100 cursor-pointer nav-item-name-sm "
                      >
                        <p className="">{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li
                onClick={() => setSelectedText("News")}
                className="focus:outline-none duration-100 cursor-pointer nav-item-name-sm"
              >
                News
              </li>
              <li
                onClick={() => setSelectedText("Event")}
                className="focus:outline-none duration-100 cursor-pointer nav-item-name-sm"
              >
                Event
              </li>
              <li
                onClick={() => setSelectedText("About")}
                className="focus:outline-none duration-100 cursor-pointer nav-item-name-sm"
              >
                About
              </li>
              <li
                onClick={() => setSelectedText("Contact")}
                className="focus:outline-none duration-100 cursor-pointer nav-item-name-sm"
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
