import React from "react";
import "./Contact.css";
import { ImLocation2, ImMail3, ImPhone } from "react-icons/im";
import { RiSendPlaneLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section>
      <div className="px-5 lg:px-44 sm:px-10 sm:px-10 py-20">
        <div className="grid grid-cols-2">
          <div className="col-span-1 flex flex-col gap-3">
            <div className="c-address">
              <p className="c-address-icon">
                <ImLocation2 />
              </p>
              <div className="c-address-details">
                <h3>Address</h3>
                <p>
                  Box 564, Disneyland,
                  <br />
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="c-address">
              <p className="c-address-icon">
                <ImPhone />
              </p>
              <div className="c-address-details">
                <h3>Phone</h3>
                <p>+88 0534684646</p>
                <p>+00 8893513546</p>
              </div>
            </div>
            <div className="c-address">
              <p className="c-address-icon">
                <ImMail3 />
              </p>
              <div className="c-address-details">
                <h3>Email</h3>
                <p>diuieee@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 m-[15px] mx-7">
            <form>
              <div className="relative z-0 w-full group ">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block py-3.5 px-0 w-full text-md text-[#2e2e2eee] bg-transparent border-0 border-b-2 border-gray-300 appearance-none     focus:outline-none focus:ring-0 focus:border-[#31dc89] peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="name"
                  className="absolute text-lg font-medium text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#31dc89]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
              <div className="relative z-0 my-6 w-full group">
                <input
                  type="email"
                  name="floating_email"
                  className="block py-3.5 px-0 w-full text-md text-[#2e2e2eee] bg-transparent border-0 border-b-2 border-gray-300 appearance-none     focus:outline-none focus:ring-0 focus:border-[#31dc89] peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_email"
                  className="absolute text-lg font-medium text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#31dc89]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <textarea
                  rows="5"
                  type="text"
                  name="floating_email"
                  className="block py-4 px-0 w-full text-md text-[#2e2e2eee] bg-transparent border-0 border-b-2  appearance-none border-gray-300 focus:outline-none focus:ring-0 focus:border-[#31dc89] peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_email"
                  className="absolute text-lg font-medium text-gray-700  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#31dc89]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Type Your Massage..
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-[#31dc89]  focus:ring-4 focus:ring-[#31dc89] font-medium text-md w-full sm:w-auto px-10 py-2.5 text-center inline-flex items-start gap-1"
              >
                Send{" "}
                <span>
                  <RiSendPlaneLine />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
