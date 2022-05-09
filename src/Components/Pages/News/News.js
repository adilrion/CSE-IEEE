import React from "react";
import "./News.css";
import SrcBar from "../../Utils/SrcBar";
import { HiOutlineChevronRight } from "react-icons/hi";
import RecentPost from "./RecentPost";

const news = [
  {
    title: "",
    description: "",
    img: "",
    date: "",
  },
  {
    title: "",
    description: "",
    img: "",
    date: "",
  },
  {
    title: "",
    description: "",
    img: "",
    date: "",
  },
  {
    title: "",
    description: "",
    img: "",
    date: "",
  },
];

const News = () => {
  return (
    <section className=" px-5 lg:px-44 sm:px-10 py-10">
      <div className="shadow min-h-[80px] w-[100%] p-5 flex gap-5 flex-wrap md:flex-nowrap justify-center md:justify-between items-center bg-[#d3ffea]">
        <h1 className="col-span-1 capitalize text-4xl font-semibold leading-9 text-gray-800">
          News Event
        </h1>
        <div className="col-span-1 ">
          <SrcBar />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 lg:col-span-8 py-10">
          {news.map((data) => (
            <div class="relative z-10 bg-gray-50 shadow rounded-md mb-7">
              <div class="relative mb-7 h-64">
                <img
                  class="w-full h-full rounded-t-md object-cover object-top"
                  src="https://images.pexels.com/photos/6822288/pexels-photo-6822288.jpeg?q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=450&amp;w=940"
                  alt=""
                />
                <div class="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
                  <p class="text-xl font-bold">30</p>
                  <p class="text-xs uppercase text-gray-700">Feb</p>
                </div>
              </div>
              <div class="px-14 pb-7">
                <a
                  class="inline-block pt-4 text-lg text-gray-800  font-bold border-t border-gray-700"
                  href="#"
                >
                  Is remote work working? A one year check-in
                </a>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Commodi aliquid nostrum quidem sequi, aliquam id fugit esse
                  architecto qui sunt quos culpa eligendi fuga placeat illo iste
                  eum nulla. Est.
                </p>

                <div className="flex items-center mt-4 cursor-pointer hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <HiOutlineChevronRight />
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="col-span-12 md:col-span-5 lg:col-span-4">
          <div className="py-10">
            <RecentPost />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default News;
