import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { FaTent } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaGuitar } from "react-icons/fa";
import { LuVenetianMask } from "react-icons/lu";
import { PiDressFill } from "react-icons/pi";


const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Revolucionando a forma como você consome:
            </h1>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaBook className="text-4xl h-12 w-12 shadow-sm p-3 rounded-lg bg-green_soft/40 dark:bg-green_soft/40-400" />
                <p>Livros</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaTent className="text-4xl h-12 w-12 shadow-sm p-3 rounded-lg bg-green_soft/40 dark:bg-green_soft/40-400" />
                <p>Barracas</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <LuVenetianMask className="text-4xl h-12 w-12 shadow-sm p-3 rounded-lg bg-green_soft/40 dark:bg-green_soft/40-400" />
                <p>Fantasias</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <PiDressFill className="text-4xl h-12 w-12 shadow-sm p-3 rounded-lg bg-green_soft/40 dark:bg-dark_purple-400" />
                <p>Vestidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
