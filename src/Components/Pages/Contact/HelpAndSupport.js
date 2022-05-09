import { useState } from "react";
import { Tab } from "@headlessui/react";
import { BsEnvelope, BsPhone } from "react-icons/bs";

import "./Contact.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HelpAndSupport() {
  let [categories] = useState({
    "IEEE DIU Student Branch": [
      {
        id: 1,
        name: "abul hossan",
        title: "Chairmen",
        email: "abrar.faiyaz1998@gmail.com",
        phone: "+88012227837287",
      },
      {
        id: 2,
        name: "Toufiq uddin",
        title: "Vice Chairmen",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 3,
        name: "Alfi Mostak",
        title: "Secretary",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 4,
        name: "Mehnaz Tabassum Tishun",
        title: "Treasurer",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
    ],
    "Power and Energy Society Chapter": [
      {
        id: 1,
        name: "hossan",
        title: "Chairmen",
        email: "abrar.faiyaz1998@gmail.com",
        phone: "+88012227837287",
      },
      {
        id: 2,
        name: "hasnta Toufiq uddin",
        title: "Vice Chairmen",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 3,
        name: "kalf Alfi Mostak",
        title: "Secretary",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 4,
        name: "Mehnaz Tabassum Tishun",
        title: "Treasurer",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 4,
        name: "Mehnaz Tabassum Tishun",
        title: "Treasurer",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 4,
        name: "Mehnaz Tabassum Tishun",
        title: "Treasurer",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
    ],
    "Robotics & Automation Society Chapter": [
      {
        id: 1,
        name: "abul hossan",
        title: "Chairmen",
        email: "abrar.faiyaz1998@gmail.com",
        phone: "+88012227837287",
      },
      {
        id: 2,
        name: "Toufiq uddin",
        title: "Vice Chairmen",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 3,
        name: "Alfi Mostak",
        title: "Secretary",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
      {
        id: 4,
        name: "Mehnaz Tabassum Tishun",
        title: "Treasurer",
        email: "naynajahanneha@gmail.com",
        phone: "+880018232337338",
      },
    ],
  });

  return (
    <div className="w-full px-2  sm:px-0 bg-gray-100 py-20 ">
      <div className="text-center mb-8">
        <h1 className="capitalize text-4xl font-semibold leading-9 text-center text-gray-800">
          Help & Support
        </h1>
        <p className="text-gray-500 text-lg text-center font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          beatae <br /> sint tempore in laboriosam eos autem delectus, error
          aperiam illo!
        </p>
      </div>
      <Tab.Group>
        <div className="px-5 lg:px-44 sm:px-10 sm:px-10 ">
          <Tab.List className="flex space-x-1  rounded min-h-[80px] shadow-md mb-5 bg-white">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded m-2 py-2.5 text-md font-medium leading-5",
                    "focus:outline-none",
                    selected
                      ? "bg-[#31dc89] text-white"
                      : " hover:bg-white/[0.12]  text-gray-700"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded bg-[#d3ffeaa3] shadow-md p-3",
                  "focus:outline-none "
                )}
              >
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3">
                      <h3 className="text-sm font-medium leading-5 capitalize">
                        {post.name}{" "}
                        <span className="text-xs text-gray-400">
                          {post.title}
                        </span>
                      </h3>

                      <ul className="mt-1 flex flex-wrap  text-xs font-normal gap-2 md:gap-10 leading-4 text-gray-500">
                        <li className="inline-flex gap-1 justify-center items-center">
                          <span>
                            <BsEnvelope />
                          </span>
                          {post.email}
                        </li>
                        <li className="inline-flex gap-1 justify-center items-center">
                          <span>
                            <BsPhone />
                          </span>
                          {post.phone}
                        </li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  );
}
