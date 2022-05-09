import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsPinterest,
  BsArrowRight,
  BsEnvelope,
} from "react-icons/bs";

const committee = [
  {
    name: "Andres Berlin",
    title: "Chief Executive Officer",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    img: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
  },
  {
    name: " Silene Tokyo",
    title: "Product Design Head",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    img: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
  },
  {
    name: "  Johnson Stone",
    title: " Manager Development",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    img: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
  },
  {
    name: "Dean Jones",
    title: "Principal Software Engineer",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    img: "https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg",
  },
  {
    name: "Rachel Adams",
    title: "Product Design Head",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    img: "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg",
  },
  {
    name: "Charles Keith",
    title: "UX Designer",
    facebook: "",
    twitter: "",
    github: "",
    instagram: "",
    img: "https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif",
  },
];

const Committee = () => {
  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            Dhaka International university
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            IEEE DIU STUDENT BRANCH COMMITTEE
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-5 lg:px-44 sm:px-10 py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            {committee.map((data) => (
              <div className="col-span-1 rounded shadow-md bg-white p-5">
                <div className="w-full flex justify-center">
                  <div className="h-48 w-48 ">
                    <img
                      src={data.img}
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-4">
                  <div className="text-[#525050] font-bold text-3xl text-center pb-1">
                    {data.name}
                  </div>
                  <p className="text-gray-500 text-sm text-center">
                    {data.title}
                  </p>

                  <div className="flex justify-evenly gap-3 mt-4">
                    <Link
                      to="#"
                      className="text-xl text-[#808080]  hover:text-[#5a5a5a]  transition ease-in-out duration-300"
                    >
                      <BsGithub />
                    </Link>
                    <Link
                      to="#"
                      className=" text-xl text-[#808080] hover:text-[#3b5998] transition ease-in-out duration-300"
                    >
                      <BsFacebook />
                    </Link>
                    <Link
                      to="#"
                      className="text-xl text-[#808080]  hover:text-[#bc2a8d] transition ease-in-out duration-300"
                    >
                      <BsInstagram />
                    </Link>
                    <Link
                      to="#"
                      className=" text-xl text-[#808080]  hover:text-[#c8232c] transition ease-in-out duration-300"
                    >
                      <BsEnvelope />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 w-full flex justify-end">
          <button className="flex justify-between gap-2 items-center text-[#1ecd79] ">
            <p className="text-xl font-medium leading-5">
              See More Information
            </p>
            <span className="text-2xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Committee;
