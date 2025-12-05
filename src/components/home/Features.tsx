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
          <Heading8 className="mb-[10px]">TYRE BUSINESS MADE EASY</Heading8>{" "}
          <Paragraph className=" mb-[15px] md:mb-5 ">
            Etarath simplifies the business with an all-in-one solution for sourcing, ordering, and
            managing inventory with unmatched efficiency, with one powerful platform.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className="order-3 1180:order-none 1180:col-span-9    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">SMART DATA ANALYTICS</Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Manage the entire tyre business from tracking sales and performance, Actionable
            insights into products and market trends, monitoring orders, and generating detailed
            inventory reports with one centralised dashboard.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className="order-4 1180:order-none 1180:col-span-4    row-span-2 border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]"> PRIVACY AND SECURITY</Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            We ensure enterprise-grade data protection, encrypted transactions, and full
            compliance with international security standards to ensure your business data stays
            protected.
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
            INTELLIGENT BUSINESS TOOLS

          </Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Streamline operations with our suite of intelligent business tools, such as the Sales
            Executive app for real-time performance monitoring, an integrated claim management
            system, and a smart quotation generator that creates instant and official quotes
            professionally.
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className=" order-6 1180:order-none 1180:col-span-7    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">SCALE BUSINESS AUTONOMOUSLY</Heading8>
          <Paragraph className=" mb-[15px] md:mb-5">
            Expand your business reach effortlessly with built-in marketing tools and automated
            visibility features. Increase brand presence, reach new customers/vendors, and
            increase your market share without additional overhead
          </Paragraph>
          <Button3
            color="white"
            className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            Get Started
          </Button3>
        </div>
        <div className="order-7  1180:order-none  1180:col-span-7    border border-white rounded-[15px] md:rounded-[20px] lg:rounded-[23px] px-5 py-[15px] md:px-[30px]  md:py-[25px] group hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out">
          <Heading8 className="mb-[10px]">MULTI-LEVEL NETWORKING.</Heading8>{" "}
          <Paragraph className=" mb-[15px] md:mb-5">
            Find new partners, collaborate with industry leaders, and boost visibility and
            accessibility for all participants. Our network supports seamless connections, making
            it easy to work with trusted businesses across the tyre industry.
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
