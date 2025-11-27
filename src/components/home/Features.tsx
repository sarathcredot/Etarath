"use client";

import React, { useEffect, useRef } from "react";
import Heading8 from "../common/Heading8";
import Paragraph from "../common/Paragraph";
import Heading1 from "../common/Heading1";
import Button3 from "../common/Button3";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    ).fromTo(
      containerRef.current.children,
      { opacity: 0, scale: .6, y: 50, stagger: 0.2 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      }
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="my-[50px] md:my-[80px] lg:my-[100px]  ">
      <div ref={containerRef} className=" grid 1180:grid-cols-18 gap-5">
        <div className="order-2 1180:order-none 1180:col-span-9    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Tyre Business Made Easy</Heading8>{" "}
          <Paragraph className=" mb-[15px] md:mb-5 ">
            Simplify sourcing, ordering, and inventory management
            with one powerful platform.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className="order-3 1180:order-none 1180:col-span-9    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Smart Data Analytics</Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Track sales, monitor orders, and unlock actionable
            insights from a centralised dashboard.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className="order-4 1180:order-none 1180:col-span-4    row-span-2 border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]"> Intelligent Business Tools</Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Access real-time sales tracking, automated claim management,
            and instant quotation generation.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className=" order-1 1180:order-none  1180:col-span-10  flex flex-col items-center justify-center gap-0  px-5 py-[15px] md:px-[30px]  md:py-[25px]  transition-all duration-300 overflow-hidden">
          <Heading1 className="">KEY</Heading1>
          <h1 className="text-center  text-[42px] sm:text-[80px] md:text-[90px] lg:text-[115px] leading-none tracking-[3px] font-[800]  text-outline-shadow font-jakarta">
            FEATURES
          </h1>
        </div>
        <div className="order-5 1180:order-none 1180:col-span-4     border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]  ">
            Autonomous Scaling

          </Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Expand reach with built-in marketing tools and
            automated visibility features.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className=" order-6 1180:order-none 1180:col-span-7    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Multi Level Marketing</Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Connect with industry leaders and grow through
            strategic partnerships.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className="order-7  1180:order-none  1180:col-span-7    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">Privacy & Security</Heading8>{" "}
          <Paragraph className=" mb-[15px] md:mb-5">
            Enterprise-grade encryption and compliance ensure
            your business data stays protected.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
      </div>
    </div>
  );
};

export default Features;
