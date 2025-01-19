import Image from "next/image";
import React from "react";
import Car1 from "@/app/assets/cars/4.png";
import Car2 from "@/app/assets/cars/6.png";
import Car3 from "@/app/assets/cars/7.png";
import Car4 from "@/app/assets/cars/8.png";

const Images = ({ url }: { url: string }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  mt-4">
      <div className="relative max-md:h-[300px] ">
        <Image
          fill
          src={url}
          alt="vehicle"
          unoptimized
          className="object-contain border-2 shadow-2xl"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Image src={Car1} alt="car1" className="rounded-md" />
        <Image src={Car2} alt="car2" className="rounded-md" />
        <Image src={Car3} alt="car3" className="rounded-md" />
        <Image src={Car4} alt="car4" className="rounded-md" />
      </div>
    </div>
  );
};

export default Images;
