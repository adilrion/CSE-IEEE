import React from "react";
import "./News.css";
import { NavLink } from "react-router-dom";

const post = [
  {
    id: 1,
    title: "",
    describe: "",
    data: "",
    img: "",
  },
  {
    id: 1,
    title: "",
    describe: "",
    data: "",
    img: "",
  },
  {
    id: 1,
    title: "",
    describe: "",
    data: "",
    img: "",
  },
  {
    id: 1,
    title: "",
    describe: "",
    data: "",
    img: "",
  },
  {
    id: 1,
    title: "",
    describe: "",
    data: "",
    img: "",
  },
];

const RecentPost = () => {
  return (
    <div>
      <div className="c-widget">
        <h3 className="c-widget__title text-left text-gray-800">
          Recent Posts
        </h3>
        <>
          {post.slice(0, 5).map((blog) => (
            <div className="c-teaser" key={blog._id}>
              <NavLink
                to={`/read-blog/${blog._id}`}
                style={({ isActive }) => {
                  return {
                    display: "block",
                    color: isActive ? "#b70038" : "",
                  };
                }}
                className="c-teaser__content text-left"
              >
                <h3 className="c-teaser__title text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium, magni?
                </h3>
                <time
                  className="c-teaser__date"
                  dateTime="2017-03-27"
                  title="27 March 2017"
                >
                  31 dec 2022
                </time>
              </NavLink>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default RecentPost;
