import React from "react";
import AboutComponent from "../../components/about/about.component";
import CSS from "csstype";

import "./about.page.css";

const style: CSS.Properties = {
  backgroundImage: `url(${"https://cdn.devdojo.com/images/february2021/directory-bg.jpg"})`,
};

const About: React.FC = () => {
  return (
    <>
      <section className="relative" style={style}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-30"></div>

        <div className="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32">
          <div className="flex flex-wrap text-white">
            <div className="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">
              <h1 className="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
                About Directory
              </h1>
              <p className="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
                Find the best places to eat, drink, and shop nearest to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutComponent />
    </>
  );
};

export default About;
