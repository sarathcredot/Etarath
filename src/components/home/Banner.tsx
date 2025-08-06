"use client";

import React, { useEffect, useRef } from "react";
import Heading1 from "../common/Heading1";
import SubHeading1 from "../common/Subheading1";
import Button from "../common/Button";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Banner = () => {
  const heading1Ref = useRef<HTMLDivElement>(null);
  const subHeading1Ref = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const bannerImgRef = useRef<HTMLDivElement>(null);
  const bannerLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var mySplitText = new SplitText(heading1Ref.current, { type: "lines" }),
      headingLines = mySplitText.lines;
    var mySplitText = new SplitText(subHeading1Ref.current, { type: "lines" }),
      subLines = mySplitText.lines;

    const tl = gsap.timeline({ duration: 1, ease: "power2.out" });

    tl.fromTo(
      headingLines,
      { opacity: 0, y: 100, scale: 0.5, rotateX: 45 },
      { opacity: 1, y: 0, scale: 1, rotateX: 0, stagger: 0.1 }
    ).fromTo(
      subLines,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, stagger: 0.1 }
    );
    if (buttonContainerRef.current) {
      tl.fromTo(
        buttonContainerRef.current.children,
        { opacity: 0, x: -50, scale: 0.7 },
        { opacity: 1, x: 0, scale: 1, stagger: 0.3 },
        "-=.3"
      );
    }

    tl.fromTo(
      bannerImgRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1 }
    ).fromTo(
      bannerLogoRef.current,
      { opacity: 0, scale: 0.3 },
      { opacity: 1, scale: 1 },
      "-=.1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div>
      <div>
        <Heading1 ref={heading1Ref} className=" text-center mb-[30px]">
          Introducing <span className="text-primary">Etarath </span>
          <br /> for you, a b2B tyre selling
          <br className="max-md:hidden " /> platform
        </Heading1>
        <SubHeading1
          ref={subHeading1Ref}
          className="text-center mb-[40px] md:mx-[10%] lg:mx-[16%]"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SubHeading1>
        <div
          ref={buttonContainerRef}
          className="flex items-center justify-center gap-[15px] md:gap-5 "
        >
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
      <div ref={bannerImgRef} className="relative my-[60px]">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-[20px] md:rounded-[30px] lg:rounded-[40px] overflow-hidden">
          <Image
            src="/images/home/banner_img.webp"
            alt="banner image"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div
          ref={bannerLogoRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
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
