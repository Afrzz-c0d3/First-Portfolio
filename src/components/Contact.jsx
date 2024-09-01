/* eslint-disable no-unused-vars */
import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight text-gradient">
          Contact Me
        </h2>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/agdyoorb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-slate-500 placeholder-slate-500 border
                      border-slate-800 rounded-md focus:outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
                <div className="mt-2.5 relative">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="example@mail.com"
                    className="bg-[#161616] w-full px-4 py-4 text-slate-500 placeholder-slate-500 border
                      border-slate-800 rounded-md focus:outline-none focus:border-orange-400"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5 relative">
                  <textarea
                    name="message"
                    id=""
                    placeholder="Your Message"
                    className="bg-[#161616] w-full px-4 py-4 text-slate-500 placeholder-slate-500 border
                      border-slate-800 rounded-md focus:outline-none focus:border-orange-400"
                    rows="4"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
