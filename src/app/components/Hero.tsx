import React from "react";
import { models } from "../constants";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-[90vh] grid text-center place-items-center text-slate-100 bg-cover bg-center  bg-[url('./assets/cars/5.png')]">
      <div className="mt-20 ">
        <p className=" text-2xl font-light my-2 max-md:text-xl">
          Yakındaki kiralık araçları keşfet
        </p>
        <h1 className=" text-6xl max-md:text-5xl font-bold ">
          Kendin için Mükemmel Aracı Bul!
        </h1>
        <p className="text-2xl font-extrabold  mt-72 max-md:mt-48">
          Kendine Uygun Modeli Belirle!
        </p>
        <div className="flex gap-5 max-md:gap-3 mb-0 justify-center my-5 flex-wrap">
          {models.map((i) => (
            <button
              key={i.name}
              className="px-3 py-2 rounded-full bg-red-700/80 transition hover:bg-gray-500 tracking-wide flex gap-4 items-center"
            >
              <Image src={i?.icon} alt="car icon"></Image>
              {i.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
