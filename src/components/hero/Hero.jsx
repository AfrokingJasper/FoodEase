import React from "react";
import HeroIntro from "./HeroIntro";
import HeroSearch from "./HeroSearch";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles["hero__section"]}>
      <HeroIntro />
      <HeroSearch />
    </section>
  );
};

export default Hero;
