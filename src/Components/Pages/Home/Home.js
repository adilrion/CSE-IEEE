import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Committee from "../Committee/Committee";
import News from "../News/News";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Committee />

      <News />
    </>
  );
};

export default Home;
