"use client";

import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Button3 from "../common/Button3";
import Image from "next/image";
import Heading7 from "../common/Heading7";
import ScrollContainer from "react-indiana-drag-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const items = [
    {
      title: "History",
      description: "Lorem ipsum dolor, sedconsectetur adipiscing",
      date: "December 4, 2022",
      comments: 0,
      image: "/images/home/insight_img.webp",
    },
    {
      title: "Market place",
      description: "Lorem ipsum dolor, sedconsectetur adipiscing",
      date: "December 3, 2022",
      comments: 0,
      image: "/images/home/banner_img.webp",
    },
    {
      title: "SALES",
      description: "Lorem ipsum dolor, sedconsectetur adipiscing",
      date: "December 2, 2022",
      comments: 0,
      image: "/images/home/plan_card_image.webp",
    },
    {
      title: "SALES",
      description: "Lorem ipsum dolor, sedconsectetur adipiscing",
      date: "December 2, 2022",
      comments: 0,
      image: "/images/home/plan_card_image.webp",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        containerRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div ref={containerRef}>
        <div className="flex justify-between items-end mb-[30px] md:mb-10 lg:mb-[60px]">
          <Heading2>Our insights</Heading2>
          <Button3 className="!hidden md:!flex" color="white">
            Explore More
          </Button3>
        </div>
        <ScrollContainer
          vertical={false}
          className="w-full flex flex-nowrap gap-[15px] md:gap-[25px] overflow-x-scroll "
        >
          {items?.map((item, index) => (
            <div key={index} className="min-w-[360px] flex flex-col gap-[17px]">
              <div className="relative w-full h-[226px]">
                <Image
                  src={item?.image}
                  alt="insight image"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-3 ">
                <p className="text-[13px] md:text-[14px] font-[500] font-jakarta uppercase">
                  {item?.title}
                </p>
                <Heading7 className="">{item?.description}</Heading7>
                <p className="text-[14px] font-[400]  ">
                  {item?.date} . {item?.comments} Comments
                </p>
              </div>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </div>
  );
};

export default Insights;
