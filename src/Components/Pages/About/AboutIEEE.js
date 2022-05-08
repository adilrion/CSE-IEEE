import React from "react";
import ieee from "../../Shared/Images/ieeeLogo.png";

const AboutIEEE = () => {
  return (
    <section>
      <div className="px-5 lg:px-44 sm:px-10 sm:px-10 mt-10">
        <div className="">
          <div className="grid grid-cols-2 gap-10">
            <div className="col-span-1 text-gray-700 py-10">
              <h1 className="mb-4">About IEEE</h1>
              <p>
                IEEE is the trusted voice for engineering, computing, and
                technology information around the globe.
                <br />
                <br />A non-profit organization, IEEE is the world’s leading
                professional association for the advancement of technology.{" "}
                <br />
                <br />
                The IEEE name was originally an acronym for the Institute of
                Electrical and Electronics Engineers, Inc. Today, the
                organization’s scope of interest has expanded into so many
                related fields, that it is simply referred to by the letters
                I-E-E-E (pronounced Eye-triple-E). For more information, visit:
                <a
                  href="https://www.ieee.org/"
                  target="_blank"
                  className="text-[#31dc89] ml-1"
                >
                  IEEE.org
                </a>
              </p>
            </div>
            <div className="col-span-1 py-10">
              <img className="w-full" src={ieee} alt="IEEE Logo" />
            </div>
          </div>
        </div>
        <ol class="relative border-l border-[#31dc89] mx-36">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h2 class=" font-semibold text-gray-800 ">IEEE Quick Facts</h2>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              Through its global membership, IEEE is a leading authority on
              areas ranging from aerospace systems, computers and
              telecommunications to biomedical engineering, electric power and
              consumer electronics among others <br />
              <br />
              Members rely on IEEE as a source of technical and professional
              information, resources and services.
              <br />
              <br />
              To foster an interest in the engineering profession, IEEE also
              serves student members in colleges and universities around the
              world.
              <br />
              <br />
              Other important constituencies include prospective members and
              organizations that purchase IEEE products and participate in
              conferences or other IEEE programs.
            </p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h2 class=" font-semibold text-gray-800 ">Who IEEE Serves</h2>
            <h3 className="font-normal text-gray-700 mt-1">IEEE has:</h3>

            <div className="mt-2">
              <ul
                role="list"
                className="pl-4 list-disc  space-y-2 mb-4 text-sm font-normal text-gray-700 text-justify"
              >
                <li className="">
                  more than 375,000 members in more than 160 countries; 45
                  percent of whom are from outside the United States
                </li>
                <li className="">more than 80,000 student members</li>
                <li className="">
                  329 sections in ten geographic regions worldwide
                </li>
                <li className="">
                  1,860 chapters that unite local members with similar technical
                  interests
                </li>
                <li className="">1,789 student branches in 80 countries</li>
                <li className="">
                  483 student branch chapters at colleges and universities
                </li>
                <li className="">
                  390 affinity groups — IEEE Affinity Groups are non-technical
                  sub-units of one or more Sections or a Council. The Affinity
                  Group patent entities are C onsultants’ Network, Graduates of
                  the Last Decade (GOLD), Women in Engineering (WIE) and Life
                  Members (LM)
                </li>
              </ul>
            </div>
            <h3 className="font-normal text-gray-700 mt-1">
              Data current as of 31 Dec 2008 IEEE:
            </h3>

            <div className="mt-2">
              <ul
                role="list"
                className="pl-4 list-disc  space-y-2 mb-4 text-sm font-normal text-gray-700 text-justify"
              >
                <li className="">
                  has a total of 45 societies and councils — 38 societies and 7
                  technical councils representing the wide range of technical
                  interests
                </li>

                <li className="">
                  has more than 2 million documents in the IEEE/IET Electronic
                  Library
                </li>
                <li className="">
                  has nearly 1,300 standards and projects under development
                </li>
                <li className="">
                  publishes a total of 144 transactions, journals and magazines
                </li>
                <li className="">
                  sponsors more than 900 conferences annually.
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h2 class=" font-semibold text-gray-800 ">IEEE Mission & Vision</h2>
            <h3 className="font-normal text-gray-700 mt-1">
              Mission Statement
            </h3>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              IEEE’s core purpose is to foster technological innovation and
              excellence for the benefit of humanity.
            </p>
            <h3 className="font-normal text-gray-700 mt-1">Vision Statement</h3>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              IEEE will be essential to the global technical community and to
              technical professionals everywhere, and be universally recognized
              for the contributions of technology and of technical professionals
              in improving global conditions.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default AboutIEEE;
