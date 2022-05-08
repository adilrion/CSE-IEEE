import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Committee from "../Committee/Committee";
import News from "../News/News";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner></Banner>

      <Committee />
      <News />
      <Footer />
    </>
  );
};

export default Home;
