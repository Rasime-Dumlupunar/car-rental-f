import React from "react";
import Link from "next/link";
import Image from "next/image";
import cancel from "@/app/assets/icons/cancel.png";

const page = () => {
  return (
    <div className="h-screen">
      <div className="h-[50%] bg-red-500 text-white grid place-items-center">
        <div className="flex flex-col items-center gap-3">
          <Image src={cancel} width={80} height={80} alt="cancel" />
          <p className="text-center text-4xl font-semibold p-10">
            Malesef, Ödeme başarısız oldu!!
          </p>
        </div>
      </div>
      <div className="h-[50%] p-10 mt-10 text-center ">
        <p className="text-lg ">
          Anasayfaya dönerek tekrardan deneyebilirsiniz.
        </p>

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
