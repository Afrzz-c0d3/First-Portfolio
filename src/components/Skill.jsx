/* eslint-disable no-unused-vars */
import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactJs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

export const Skill = () => {
  return (
    <div
      className="bg-black text-gray-400 text-xl md:h-[150px] max-w-[1200px]
    mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center border border-slate-600"
    >
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech
        <br /> Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={Html} alt="html" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={Css} alt="CSS" />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={Javascript} alt="JS" />
        <p className="mt-2">Javascript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={ReactJs} alt="ReactJs" />
        <p className="mt-2">ReactJs</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={Tailwind} alt="Tailwind" />
        <p className="mt-2">Tailwind</p>
      </div>
    </div>
  );
};

export default Skill;
