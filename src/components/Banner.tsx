import React from "react";
import Heading1 from "./common/Heading1";
import SubHeading1 from "./common/Subheading1";
import Button from "./common/Button";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div>
        <Heading1 className="text-center mb-[30px]">
          Introducing <span className="text-primary">Etarath </span>
          <br /> for you, a b2B tyre selling
          <br /> platform
        </Heading1>
        <SubHeading1 className="text-center mb-[40px] mx-[16%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SubHeading1>
        <div className="flex items-center justify-center gap-5 ">
          <Button
            type="link"
            href="/"
            variant="solid"
            color="primary"
            textColor="black"
          >
            Get Started
          </Button>
          <Button type="link" href="/" variant="outline" color="primary">
            Learn More
          </Button>
        </div>
      </div>
      <div className="relative my-[60px]">
        <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden">
          <Image
            src="/home/banner_img.webp"
            alt="banner image"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Image
            src="/etarath_logo.svg"
            alt="logo"
            width={560}
            height={130}
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
