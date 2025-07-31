import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="relative  w-full flex items-center justify-between px-[60px] py-[25px] ">
      <div className="flex items-center justify-between w-full h-[58px]">
        <Link href={"/"} className="w-[170px] relative">
          <Image
            src="/etarath_logo.svg"
            alt="logo"
            width={170}
            height={40}
            className="object-contain cursor-pointer w-full h-full"
          />
        </Link>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2   flex items-center justify-center gap-10 text-[16px] font-[600] rounded-full bg-[#1E1F21] px-[78px] py-[15px]">
          <Link href={"/pricing"}>Pricings</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div>
          <FaBars size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
