import { Car } from "@/app/types";
import React from "react";
import miles from "@/app/assets/icons/miles.png";
import petrol from "@/app/assets/icons/petrol.png";
import automatic from "@/app/assets/icons/automatic.png";
import Image from "next/image";
import year from "@/app/assets/icons/yearr.svg";

const Title = ({ car }: { car: Car }) => {
  const arr = [
    {
      icon: year,
      name: car.year,
    },
    {
      icon: miles,
      name: car.mileage.toLocaleString() + " Miles",
    },
    {
      icon: petrol,
      name: car.fuelType,
    },
    {
      icon: automatic,
      name: car.transmission,
    },
  ];
  return (
    <div className="mt-10 flex justify-between">
      <div>
        <h1 className="font-bold text-3xl md:text-4xl">
          {car.make} {car.model}
        </h1>
        <div className="flex gap-6 mt-5">
          {arr.map((item) => (
            <div className="py-1 px-5 rounded-full bg-blue-500/70 flex gap-3 items-center ">
              <Image width={15} height={15} src={item.icon} alt="icon" />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="font-medium text-3xl md:text-4xl">
        ${car.price.toLocaleString()}
      </div>
    </div>
  );
};

export default Title;
