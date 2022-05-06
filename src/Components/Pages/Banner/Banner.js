import React from "react";
import SrcBar from "../../Utils/SrcBar";
import "./Banner.css";
import growthSVG from "../../Shared/SVG/grow.svg";
import work from "../../Shared/SVG/work.svg";
import contact from "../../Shared/SVG/contact.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="background-img"></div>
      <div className="px-5 lg:px-44 sm:px-10 sm:px-10">
        <h1 className="text-[42px] mb-8 leading-10">
          Develop a passion for <br /> learning new things.
        </h1>
        <p>
          Was certainty remaining engrossed applauded sir how discovery. Settled
          opinion <br /> how enjoyed greater joy adapted too shy. Now properly
          surprise expenses.
        </p>
        <div className="src-bar mt-10">
          <SrcBar></SrcBar>
        </div>
      </div>
      <div className="px-5 lg:px-44 sm:px-10 sm:px-10 banner-c">
        <div className="banner-c-details grid grid-cols-3 gap-10">
          <div className="col-span-1 b-c-item">
            <img width="100" height="100" src={growthSVG} alt="" />
            <h2>Accelerate Your Learning</h2>
            <p>
              As a member, you'll be presented with new resources, valuable
              opportunities, and many discounts. IEEE Xplore® digital library,
              gives you instant access to all IEEE journal articles, magazines,
              and conference papers.
            </p>
          </div>
          <div className="col-span-1 b-c-item">
            <img width="100" height="100" src={work} alt="" />
            <h2>Our Work</h2>
            <p>
              IEEE is the world’s largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
            </p>
          </div>
          <div className="col-span-1 b-c-item">
            <img width="100" height="100" src={contact} alt="" />
            <h2>Contact Us</h2>
            <p>
              Contact us to see what we can do for you. We can help you by
              giving you free advice or you can meet us directly on campus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
