import React from "react";
import AnimatedTitle from "./Animatedtitle";

export const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitle />
      </div>
    </div>
  );
};

export default About;
