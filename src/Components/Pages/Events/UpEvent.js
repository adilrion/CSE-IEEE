import React from "react";
import "./Event.css";
import { BsArrowRight } from "react-icons/bs";

const UpEvent = () => {
  return (
    <section className="relative min-w-[100vw] min-h-[80vh] flex justify-center items-center">
      <div className="e-background-img e-slide-bg"></div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-gray-200 font-light text-2xl  inline-flex gap-3 text-center">
          17 - 25 December 2018 <span className="text-[#1ecd79] ">|</span>{" "}
          Tobacco Dock, London
        </p>
        <h1 className="e-title text-center text-gray-100 text-[3rem] lg:text-[7rem] md:text-[5rem]">
          New Space Economy
        </h1>

        <div id="countdown">
          <div class="countdown-section">
            <h2 className="text-gray-100">00</h2>{" "}
            <h3 className="text-gray-200">days</h3>{" "}
          </div>
          <div class="countdown-section">
            <h2 className="text-gray-100">00</h2>{" "}
            <h3 className="text-gray-200">Hours</h3>{" "}
          </div>
          <div class="countdown-section">
            <h2 className="text-gray-100">00</h2>{" "}
            <h3 className="text-gray-200">Minutes</h3>{" "}
          </div>
          <div class="countdown-section">
            <h2 className="text-gray-100">00</h2>{" "}
            <h3 className="text-gray-200">Second</h3>{" "}
          </div>
        </div>

        <div className="w-fit px-16 py-4 mb-10 rounded border-2 border-[#1ecd79] mt-7">
          <button className="flex justify-between gap-2 items-center text-white hover:text-[#1ecd79]">
            <p className="text-xl font-medium leading-5 uppercase">Book Now</p>
            <span className="text-2xl">
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpEvent;
