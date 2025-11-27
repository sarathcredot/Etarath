"use client";

import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import Features from "@/components/home/Features";
import VendorBenefits from "@/components/home/VendorBenefits";
import RetailerBenefits from "@/components/home/RetailerBenefits";
import RetailerPlans from "@/components/home/RetailerPlans";
import VendorPlans from "@/components/home/VendorPlans";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
        { opacity: 0, y:100},
        { opacity: 1, y:0, duration: 0.4, ease: "power2.out" }
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);
  return (
    <div>
      <Banner />
      <Brands />
      <Features />
      <VendorBenefits />
      <RetailerBenefits />
      {/* <div
        ref={containerRef}
        className="w-screen relative left-1/2 -translate-x-1/2 bg-white overflow-hidden"
      >
        <RetailerPlans />
      </div>
      <VendorPlans />
      <Testimonials /> */}
      {/* <Insights /> */}
    </div>
  );
}
