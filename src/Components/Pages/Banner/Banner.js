import React from "react";
import SrcBar from "../../Utils/SrcBar";
import "./Banner.css";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { MdWorkspacesOutline, MdOutlineContactMail } from "react-icons/md";
import work from "../../Shared/SVG/work.svg";
import contact from "../../Shared/SVG/contact.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner flex flex-col justify-center">
        <div className="background-img slide-bg"></div>
        <div className="px-5 lg:px-44 sm:px-10 sm:px-10">
          <h1 className="text-[42px] mb-8 leading-10">
            Develop a passion for <br /> learning new things.
          </h1>
          <p>
            Was certainty remaining engrossed applauded sir how discovery.
            Settled opinion <br /> how enjoyed greater joy adapted too shy. Now
            properly surprise expenses.
          </p>
          <div className="src-bar mt-10">
            <SrcBar></SrcBar>
          </div>
        </div>
      </section>
      <section className="px-5 lg:px-44 sm:px-10 sm:px-10">
        <div className=" banner-c md:mt-[-100px]">
          <div className="banner-c-details grid md:grid-cols-3 grid-cols-1 gap-10">
            <div className="col-span-1 b-c-item">
              <div className="b-c-icon">
                <AiOutlineLineChart />
              </div>
              <h2 className="py-2">Accelerate Your Learning</h2>
              <p className="text-gray-500">
                As a member, you'll be presented with new resources, valuable
                opportunities, and many discounts. IEEE Xplore® digital library,
                gives you instant..{" "}
                <Link
                  to="#"
                  className="text-[#31dc89] inline-flex items-center gap-2"
                >
                  Read More{" "}
                  <span className="text-1xl">
                    <BsArrowRight />
                  </span>
                </Link>
              </p>
            </div>
            <div className="col-span-1 b-c-item">
              <div className="b-c-icon">
                <MdWorkspacesOutline />
              </div>
              <h2 className="py-2">Our Work</h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                nobis nisi omnis molestias atque libero neque totam illo
                praesentium..{" "}
                <Link
                  to="#"
                  className="text-[#31dc89] inline-flex items-center gap-2"
                >
                  Read More{" "}
                  <span className="text-1xl">
                    <BsArrowRight />
                  </span>
                </Link>
              </p>
            </div>
            <div className="col-span-1 b-c-item">
              <div className="b-c-icon">
                <MdOutlineContactMail />
              </div>
              <h2 className="py-2">Contact Us</h2>
              <p className="text-gray-500">
                As a member, you'll be presented with new resources, valuable
                opportunities, and many discounts. IEEE Xplore® digital library,
                gives you..{" "}
                <Link
                  to="#"
                  className="text-[#31dc89] inline-flex items-center gap-2"
                >
                  Read More{" "}
                  <span className="text-1xl">
                    <BsArrowRight />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
