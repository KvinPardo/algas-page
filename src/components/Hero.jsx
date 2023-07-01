import React from "react";
import Video from "/img/video-hero.mp4";
import { motion } from "framer-motion";
import { fadeInLeft } from "../variants";
import { hero } from "../data";

const Hero = () => {
  const { title, subtitle, buttonText, pretitle, video } = hero;

  return (
    <>
      <div>
        <video
          className="w-full lg:h-[900px] object-cover h-screen"
          autoPlay
          loop
          muted
          src={Video}
        ></video>
        <div className="container mx-auto relative">
          <div className="absolute lg:top-[-450px] top-[-200px] left-0 flex flex-col justify-center items-center w-full h-full px-4">
            <h1 className="text-white lg:text-5xl text-2xl tracking-widest font-bold uppercase w-full text-center">
              {pretitle}
            </h1>
            <h3 className="text-[#FFC000] uppercase lg:text-4xl tracking-wider w-full text-center font-bold text-2xl">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
