"use client";

import React, { useEffect, useRef } from "react";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { FaDribbble, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        containerRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      )
      .fromTo(
        containerRef.current?.children,
        { opacity: 0, scale: 0.9, stagger: 0.2 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=.1"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center gap-10 bg-[#0F1114] px-5 md:px-[30px] lg:px-[50px] pt-8 md:pt-10 lg:pt-[60px] pb-[60px]"
    >
      <div
        className=" relative min-w-full  rounded-[20px]  md:rounded-[30px] p-5 md:p-[50px] lg:p-[100px] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/home/footer_banner.webp)" }}
      >
        <div className="relative z-10">
          <Heading2 className="mb-5 md:mb-[30px]">
            {/* Be part of <span className="text-primary">Etarath</span>, <br />{" "}
            boost your business */}
            Ready to <span className="text-primary">Transform</span> <br /> Your Tyre Business?
          </Heading2>
          <Paragraph className="mb-[40px] max-w-[633px]">
            Join hundreds of vendors and retailers building
            success on Etarath.
          </Paragraph>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-5">
            <Button textColor="black">Get Started Today</Button>
            <Button variant="outline" color="primary">
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent pointer-events-none  "></div>
      </div>

      <div className="relative  w-full flex items-center justify-between  ">
        <div className="flex flex-col md:flex-row items-center max-md:gap-4 justify-between w-full   md:h-[58px]">
          <Link
            href={"/"}
            className="w-[130px] h-[30px] md:w-[170px] md:h-[40px] relative"
          >
            <Image
              src="/etarath_logo.svg"
              alt="logo"
              width={170}
              height={40}
              className="object-contain cursor-pointer w-full h-full"
            />
          </Link>
          <div className="md:absolute left-1/2 top-1/2 md:-translate-x-1/2 md:-translate-y-1/2   flex items-center justify-center gap-7 lg:gap-10 text-[16px] font-[600] rounded-full   py-[15px] transition-all duration-300 ease-in-out ">
            <Link href={"/#"} className="">
              Pricing
            </Link>
            <Link href={"/#"} className="">
              Blog
            </Link>
            <Link href={"/#"} className="">
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center max-md:mt-2 gap-5">
            <div className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out">
              <FaFacebookF size={16} />
            </div>
            <div className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out">
              <FaXTwitter size={16} />
            </div>
            <div className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out">
              <FaDribbble size={16} />
            </div>
            <div className="w-11 h-11 grid place-content-center border border-white hover:border-primary hover:bg-primary cursor-pointer rounded-full transition-all duration-300 ease-in-out">
              <IoLogoInstagram size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col max-md:gap-3 md:flex-row items-center justify-between">
        <p className="max-md:text-center text-[15px] md:text-[18px] font-[400]">

          Etarath © {new Date().getFullYear()}. All rights reserved. <br />

          <Link href={"/privacy-policy"} className="underline">Privacy Policy</Link> |{" "}

          <Link href={"/terms-and-conditions"} className="underline">
            Terms and Conditions
          </Link>

        </p>



        <p className="max-md:text-center text-[15px] md:text-[18px] font-[400]">
          Developed by{" "}
          <Link href={"http://credot.co/"} className="underline">
            Credot
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
