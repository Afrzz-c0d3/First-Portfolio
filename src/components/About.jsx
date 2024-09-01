/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import AboutImg from "../assets/FotoImg.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-base lg:text-lg text-slate-300">
              Before getting to know more about me, let me first introduce
              myself, Afrizal Ardiansyah. My hobby is creating websites,
              portfolios, looking for updates about technology. I don't have
              enough experience in this field, but I have the spirit of a
              leader, discipline, and thoroughness in doing any job. However, my
              weakness is that when I think too deeply, I have to rest my brain
              and my body so that it can be as fresh as before. OK, maybe that's
              all I need to say on this About page. Thank You.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={AboutImg}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
