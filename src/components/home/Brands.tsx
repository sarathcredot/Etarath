"use client";

import React, { useEffect, useRef } from "react";
import Heading8 from "../common/Heading8";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const brandLogos = [
    { src: "/images/brands/Yokohama_Logo.svg" },
    { src: "/images/brands/MRF_Logo.svg" },
    { src: "/images/brands/FALKEN_Logo.svg" },
    { src: "/images/brands/Bridgestone_Logo.svg" },
    { src: "/images/brands/CEAT_Logo.svg" },
    { src: "/images/brands/Yokohama_Logo.svg" },
    { src: "/images/brands/MRF_Logo.svg" },
    { src: "/images/brands/FALKEN_Logo.svg" },
    { src: "/images/brands/Bridgestone_Logo.svg" },
    { src: "/images/brands/CEAT_Logo.svg" },
    { src: "/images/brands/Yokohama_Logo.svg" },
    { src: "/images/brands/MRF_Logo.svg" },
    { src: "/images/brands/FALKEN_Logo.svg" },
    { src: "/images/brands/Bridgestone_Logo.svg" },
    { src: "/images/brands/CEAT_Logo.svg" },
  ];

  const component = brandLogos.map((brand, index) => (
    <div
      key={index}
      className=" flex items-center justify-center mx-[30px] my-[25px] "
    >
      <img src={brand?.src} alt="brand logos" className="" />
    </div>
  ));

  useEffect(() => {
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
        {
          opacity: 0,
          y: 100,
        },
        { opacity: 1, y: 0, duration: .4,  ease: "power2.out" }
      )
      .fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.8, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: .6, ease: "power2.out" }
        // start after previous
      );

    // const cardsAnim = gsap.fromTo(
    //   cardsRef.current,
    //   {
    //     opacity: 0,
    //     scale: 0.8,
    //     y: 100,
    //   }, // FROM values
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     y: 0,
    //     ease: "power2.out",
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: cardsRef.current, // can also use containerRef
    //       start: "top 90%",
    //       end: "bottom 100%",
    //       scrub: 1,
    //     },
    //   } // TO values
    // );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      // cardsAnim.scrollTrigger?.kill();
      // cardsAnim.kill();
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className="opacity-100 ">
        <Heading8 className="text-center mb-5">
          Working with industry <br className="block md:hidden" />
          leaders
        </Heading8>
        <div
          ref={cardsRef}
          className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden "
        >
          <InfiniteMovingCards
            component={component}
            speed="slow"
            direction={"left"}
            pauseOnHover={false}
            mask={true} // Apply mask to create a fade effect on the edges
            isBrand={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands; // brand logos slider section component
