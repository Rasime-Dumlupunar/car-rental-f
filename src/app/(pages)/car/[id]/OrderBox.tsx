import Image from "next/image";
import profil from "@/app/assets/icons/profil.png";
import loc from "@/app/assets/icons/locc.svg";
import tel from "@/app/assets/icons/tel.svg";
import OrderButton from "./OrderButton";
import { Car } from "@/app/types";

const OrderBox = ({ car }: { car: Car }) => {
  return (
    <div className="border max-lg:mt-10 rounded-md p-5 shadow-xl w-full xl:col-span-2">
      <div className="flex gap-5">
        <Image src={profil} alt="profil" />

        <div className="text-xl ">
          <h2 className="font-semibold">Udemig Galeri</h2>
          <p>İstanbul, Maltepe</p>
        </div>
      </div>

      <div className="flex justify-between mt-5 mb-5">
        <div className="flex gap-2 items-center">
          <Image src={loc} alt="loc" />
          <p>Lokasyonu Gör</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image src={tel} alt="tel" />
          <p>+90 555-555-00-00</p>
        </div>
      </div>
      <OrderButton car={car} />
      <div className="bg-green-500 w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-green-700 mt-5">
        <a href="https://wa.me/905554447766">Whatsapp</a>
      </div>
    </div>
  );
};

export default OrderBox;
