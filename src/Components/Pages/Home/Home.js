import React from "react";
import Banner from "../Banner/Banner";
import Committee from "../Committee/Committee";
import Contact from "../Contact/Contact";
import LatestNews from "../News/LatestNews";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Committee />
      <div className="2xl:mx-auto 2xl:container lg:px-44 lg:py-16 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
            Latest News
          </h1>
          <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <LatestNews />
        <div className="mt-7 w-full flex justify-end">
          <button className="flex justify-between gap-2 items-center text-[#1ecd79] ">
            <p className="text-xl font-medium leading-5">See More News</p>
            <span className="text-2xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
      {/* <HelpAndSupport /> */}
      <Contact />
    </>
  );
};

export default Home;
