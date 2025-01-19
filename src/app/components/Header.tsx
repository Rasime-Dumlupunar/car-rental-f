import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = ({ designs }: { designs?: string }) => {
  return (
    <header className={` w-full text-black p-0 m-0 ${designs}`}>
      <Container designs="flex w-full justify-between">
        <h1 className=" text-2xl md:text-3xl p-3 max-md:p-2 font-semibold rounded-xl border-y-2">
          <Link href="/home">DRIVE</Link>
        </h1>
        <nav className="text-md max-md:text-sm md:text-base flex gap-6 max-md:gap-4 items-center font-semibold">
          <Link href="/home"> Keşfet</Link>
          <Link href="/orders"> Siparişler</Link>
          <Link href="/home"> Hakkımızda</Link>
          <Link className="max-md:hidden" href="/home">
            Fiyatlandırma
          </Link>
        </nav>

        <div className="flex">
          <button className="max-md:hidden font-semibold">Contact</button>
          <button className="bg-white text-black rounded-xl  transition px-2 ml-5 hover:bg-gray-200">
            Sign Up
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
