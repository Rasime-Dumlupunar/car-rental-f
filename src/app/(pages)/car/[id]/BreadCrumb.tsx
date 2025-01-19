import { Car } from "@/app/types";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ car }: { car: Car }) => {
  return (
    <div className="text-md">
      <Link className="text-blue-500" href="/">
        Anasayfa
      </Link>{" "}
      / <span>Arabalar</span> /
      <span>
        {" "}
        {car.make} - {car.model}
      </span>
    </div>
  );
};

export default BreadCrumb;
