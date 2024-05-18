import React from "react";
import { Link } from "react-router-dom";
import woman from "../assets/img/woman.jpeg";
import hero from "../assets/img/bg_hero.svg";
import WomanImage from "../assets/img/woman_hero.png";
const Hero = () => {
  return (
    <section  className="h-[800px] bg-gray-50 bg-no-repeat bg-cover bg-center mt-24 py-24">
     
     
      <div className="container mx-auto flex justify-around ">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="uppercase font-semibold self-start border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
