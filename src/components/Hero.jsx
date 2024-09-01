/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Heroimage from "../assets/pp1.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={Heroimage} alt="Poto Profil" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="text-gradient">I'm a</span> <br />
          <TypeAnimation
            sequence={[
              "Front-End Dev",
              1000,
              "Back-End Dev",
              1000,
              "Full-Stack Dev",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is <span className="text-gradient font-bold">Afrizal Ardiansyah</span> and I'm a Front-End Developer.
        </p>

        <div className="my-8">
          <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-tr from-lime-800 to-yellow-500 text-white">
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-tr from-red-800 to-orange-400 text-white hover:border-none"
          >Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
