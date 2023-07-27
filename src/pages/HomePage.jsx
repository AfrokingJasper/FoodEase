import React, { Fragment } from "react";
import Hero from "../components/hero/Hero";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Menu />
      <About />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
