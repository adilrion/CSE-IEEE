import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  };

  const setNavDropDownText = (navText) => {
    setText(navText);
    setNavDropDown(true);
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="px-5 lg:px-44 sm:px-10 sm:px-10">
        {/*  for Larger device */}
        <nav className="hidden md:block">
          <div className="flex justify-between w-full ">
            <div className="flex justify-start items-center">
              <h1 className="leading-6 text-gray-800">DIU IEEE</h1>
            </div>
            {/* For medium and plus sized devices */}
            <ul className="hidden md:flex flex-auto justify-center">
              <li className="focus:outline-none nav-item-name">Home</li>
              <li className="focus:outline-none nav-dropdown ">
                <button className="inline-flex justify-between items-center  nav-item-name">
                  <span>Members</span>
                  <ChevronDownIcon
                    className="ml-1 h-5 w-5 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </button>
                <div className="nav-dropdown-menu rounded-b-lg shadow-md overflow-hidden z-10 transform  sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="relative grid bg-white">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex px-8 py-4 items-start rounded-lg hover:bg-gray-50"
                      >
                        <div className="">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li className="focus:outline-none nav-item-name">News</li>
              <li className="focus:outline-none nav-item-name">Events</li>
              <li className="focus:outline-none nav-item-name">About</li>
              <li className="focus:outline-none nav-item-name">Contact</li>
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
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
              </div>
              <svg
                className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </nav>
        {/* for smaller devcies */}
        <div className="block md:hidden w-full">
          <div className="flex items-center justify-between space-x-3 lg:pr-16">
            <div className="flex justify-start items-center">
              <h1 className="leading-6 text-gray-800">
                DIU IEEE <span className="text-sm text-gray-200">{text}</span>
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
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className=" relative">
            <ul
              id="list"
              className={`${
                dropDown ? "hidden" : "block"
              } font-medium text-base leading-4 absolute top-2  w-full rounded shadow-md`}
            >
              <li
                onClick={() => setSelectedText("Home")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-sm leading-3 font-medium"
              >
                Home
              </li>

              <li className="focus:outline-none">
                <button
                  onClick={() => setNavDropDown(!navDropDown)}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none duration-100 cursor-pointer text-sm leading-3 font-medium w-full flex justify-between items-center"
                >
                  <span>Members</span>
                  <div className="cursor-pointer text-gray-500">
                    <svg
                      id="ArrowSVG"
                      className={`${
                        navDropDown ? "" : "rotate-180 "
                      } transform duration-100`}
                      width={15}
                      height={15}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="gray"
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
                        className="px-4 py-3 text-gray-600 bg-gray-100  focus:outline-none  hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-medium"
                      >
                        <p className="">{item.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </li>
              <li
                onClick={() => setSelectedText("News")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-sm leading-3 font-medium"
              >
                News
              </li>
              <li
                onClick={() => setSelectedText("Event")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-sm leading-3 font-medium"
              >
                Event
              </li>
              <li
                onClick={() => setSelectedText("About")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-sm leading-3 font-medium"
              >
                About
              </li>
              <li
                onClick={() => setSelectedText("Contact")}
                className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-sm leading-3 font-medium"
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
