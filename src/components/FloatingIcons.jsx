import React from "react";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiDogecoin, SiSolana } from "react-icons/si";

const FloatingIcons = () => {
  return (
    <>
      <div
        className="absolute top-6 left-6 w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center z-10 md:top-8 md:left-2/12 md:w-14 md:h-14 animate-float"
      >
       <div className="animate-rotate-slow">
          <FaBitcoin className="text-yellow-400 text-xl md:text-2xl" />
        </div>
      </div>

      <div
        className="absolute top-6 right-6 w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center z-10 md:top-8 md:right-1/7 md:w-14 md:h-14 animate-float-delayed"
      >
        <SiDogecoin className="text-red-400 text-xl md:text-2xl rotate-45" />
      </div>

      <div
        className="absolute bottom-6 left-6 w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center z-10 md:bottom-2/12 md:left-3/13 md:w-12 md:h-12 animate-float-slow"
      >
        <SiSolana className="text-purple-400 text-xl md:text-2xl rotate-12" />
      </div>

      <div
        className="absolute bottom-6 right-6 w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center z-10 md:bottom-1/14 md:right-2/10 md:w-12 md:h-12 animate-float"
      >
        <FaEthereum className="text-green-400 text-xl md:text-2xl rotate-6" />
      </div>
    </>
  );
};

export default FloatingIcons;
