import Image from "next/image";
import { Car } from "../types";
import petrol from "@/app/assets/icons/petrol.png";
import automatic from "@/app/assets/icons/automatic.png";
import miles from "@/app/assets/icons/miles.png";
import ok from "@/app/assets/icons/ok.png";
import Link from "next/link";
type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  // ekrana basarken kod tekrarı oluşmaması için bir dizi tanımladık.
  const arr = [
    {
      icon: miles,
      name: car.mileage + " Miles",
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
    <div className="border-y-4 shadow-2xl rounded">
      <div className="relative h-[250px]">
        <Image
          fill
          src={car.imageUrl}
          alt={car.make}
          unoptimized
          className="object-contain"
        />
      </div>
      <div className="sm:px-5 py-5 px-10">
        <h2 className="text-2xl font-semibold">
          {car.make}
          {car.model}
        </h2>
        <hr className="border-gray-400/30 border-2 mt-1 mb-1" />
        <div className="flex justify-between rounded p-2 bg-zinc-900/90 ">
          {arr.map((item) => (
            <div className="flex flex-col gap-2 items-center py-3 px-3  text-white text-md ">
              <Image src={item.icon} alt="icon" />
              <p> {item.name}</p>
            </div>
          ))}
        </div>
        <hr className="border-gray-400/30 border-2 mt-1 mb-1" />
        <div className="flex justify-between text-xl ">
          <p className="font-semibold">$ {car.price}</p>
          <Link
            href={`/car/${car._id}`}
            className="text-blue-500 text-xl flex items-center gap-2 hover:text-blue-800 transition"
          >
            Detay
            <Image src={ok} alt="ok" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
