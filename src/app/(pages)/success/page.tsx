import Image from "next/image";
import React from "react";
import check from "@/app/assets/icons/check.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-green-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-3">
          <Image src={check} width={80} height={80} alt="checkmark" />
          <p className="text-center text-4xl font-semibold p-10">
            Tebrikler, ödemeniz başarıyla alındı.
          </p>
        </div>
      </div>
      <div className="h-[50%] p-10 mt-10 text-center ">
        <p className="text-lg ">
          Aracınızı nasıl teslim alacağınıza dair yakında bir mail alacaksınız.
        </p>
        <p className="mt-5 mb-10">Lütfen mailinizi kontrol ediniz...</p>
        <Link
          className="border-neutral-700 border-y-2 shadow-xl py-2 px-5 rounded-lg text-lg hover:bg-green-500"
          href="/orders"
        >
          Siparişlerim
        </Link>
        <br />
        <br />
        <br />
        <Link
          className="border-neutral-700 border-y-2 shadow-xl py-2 px-5 rounded-lg text-lg hover:bg-green-500"
          href="/home"
        >
          Anasayfa
        </Link>
      </div>
    </div>
  );
};

export default page;
