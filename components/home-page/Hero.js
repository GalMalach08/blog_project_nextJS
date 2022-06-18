import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/klaylogo.webp"
          alt="image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hey Im gal</h1>
      <p>I blog about web development- frontend mess</p>
    </section>
  );
};

export default Hero;
