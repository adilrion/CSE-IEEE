import React from "react";
import ieee from "../../Shared/Images/ieeeLogo.png";

const AboutIEEE = () => {
  return (
    <section>
      <div className="px-5 lg:px-44 sm:px-10 sm:px-10 mt-10">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
            <div className="col-span-1 py-10 flex justify-center items-center">
              <img className="w-full" src={ieee} alt="IEEE Logo" />
            </div>
          </div>
        </div>
        <ol class="relative border-l border-[#31dc89] lg:mx-36">
          <li class="mb-5 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h3 class=" font-semibold text-gray-700 ">IEEE Quick Facts</h3>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              Through its global membership, IEEE is a leading authority on
              areas ranging from aerospace systems, computers and
              telecommunications to biomedical engineering, electric power and
              consumer electronics among others <br />
              <br />
              Members rely on IEEE as a source of technical and professional
              information, resources and services. To foster an interest in the
              engineering profession, IEEE also serves student members in
              colleges and universities around the world.
              <br />
              Other important constituencies include prospective members and
              organizations that purchase IEEE products and participate in
              conferences or other IEEE programs.
            </p>
          </li>
          <li class="mb-5 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h3 class=" font-semibold text-gray-700 ">What's new</h3>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              IEEE is the world’s largest technical professional organization
              dedicated to advancing technology for the benefit of humanity.
            </p>
          </li>
          <li class="mb-5 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h3 class=" font-semibold text-gray-700 ">Awards & recognitions</h3>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              For over a century, IEEE has sponsored various programs to honor
              achievements in education, industry, research, and service,
              celebrating distinguished colleagues, teachers, and corporate
              leaders who have made a lasting impact on humanity, technology,
              and the profession.
            </p>
          </li>
          <li class="mb-5 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h3 class=" font-semibold text-gray-700 ">Leadership</h3>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              Learn about the organization, including its structure, leadership,
              and employees
            </p>
          </li>
          <li class="mb-5 ml-4">
            <div class="absolute w-3 h-3 bg-[#31dc89] rounded-full mt-1.5 -left-1.5 border border-white"></div>

            <h3 class=" font-semibold text-gray-700 ">IEEE Mission & Vision</h3>
            <h5 className="font-normal text-gray-700 mt-1">
              Mission Statement:
            </h5>

            <p class="mb-4 text-sm font-normal text-gray-700 text-justify">
              IEEE’s core purpose is to foster technological innovation and
              excellence for the benefit of humanity.
            </p>
            <h5 className="font-normal text-gray-700 mt-1">
              Vision Statement:
            </h5>

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
