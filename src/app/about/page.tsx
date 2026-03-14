"use client";
import React, { useEffect, useRef } from "react";
import FAQComponent from "@/components/common/FAQComponent";
import Heading5 from "@/components/common/Heading5";
import { GoCheckCircleFill } from "react-icons/go";
import Paragraph from "@/components/common/Paragraph";
import Button from "@/components/common/Button";
import Image from "next/image";
import gsap from "gsap";
import Heading2 from "@/components/common/Heading2";
import Heading7 from "@/components/common/Heading7";
import Testimonials from "@/components/home/Testimonials";
import TeamMembers from "@/components/about/TeamMembers";
import BehindEtarath from "@/components/about/BehindEtarath";
const questions = [
  {
    question: "Which brands are available on Etarath?",
    answer:
      "Etarath gives you access to an extensive range of tyre products from some of the world's most trusted brands — including Michelin, Bridgestone, Goodyear, Continental, and Pirelli, alongside a growing portfolio of verified brands offered by vetted vendors across the UAE. Whether you're sourcing premium or value-tier tyres, our catalogue is built to meet the full spectrum of your business needs.",
  },
  {
    question: "What is Instant Quotation?",
    answer:
      "Instant Quotation is a powerful feature designed specifically for retailers on the Etarath platform. It enables retailers to generate professional, real-time tyre quotations for walk-in customers in seconds — complete with product details, live pricing, and your shop information. No vendor calls. No manual price checks. No delays. With just a few clicks, retailers can browse available stock from verified vendors, build a quotation, and share it with customers on the spot — delivering a faster, more professional in-store experience while staying connected to the wider supply chain.",
  },
  {
    question: "Is Etarath a B2B or B2C marketplace?",
    answer:
      "Etarath is a purely B2B digital marketplace and SaaS-based business solution. The platform is designed exclusively for tyre vendors, wholesalers, distributors, retailers, and service shops operating within the UAE. Individual consumer transactions are not supported. Every interaction on Etarath is business-to-business — keeping the platform focused, professional, and built for trade at scale.",
  },
  {
    question: "Are Etarath users verified?",
    answer:
      "Yes — and our verification process is one of the most rigorous in the industry. Every vendor and retailer on Etarath undergoes a thorough manual verification process conducted directly by our team, which includes physical visits to offices or shop premises to confirm an active, operational business presence in the UAE.To qualify, businesses must have a minimum of one year of operational history in the UAE and are required to submit valid legal and business documentation, which is reviewed and retained as part of their verified profile.This process exists for one reason: to ensure that every business you connect with on Etarath is real, compliant, and trustworthy — giving you the confidence to trade without doubt.",
  },
];
const plans = [
  {
    id: 1,
    title: "Become a Vendor",
    description:
      "Ready to grow your tyre business across the UAE? Joining Etarath as a verified vendor puts your products in front of real, active buyers — backed by a suite of intelligent digital tools designed to simplify your operations and accelerate your revenue.",
    features: [
      "Expand your customer base across the UAE and GCC ",
      " Improve operational efficiency with end-to-end digital tools ",
      "Gain real-time business insights through advanced analytics ",
      "Increase sales with AI-powered smart tools",
      "Strengthen and manage customer relationships with confidence",
    ],
    image: "/images/img1.webp",
    btnText: "Join as Vendor",
  },
  {
    id: 2,
    title: "Become a Retailer",
    description:
      "Ready to take your tyre retail business to the next level? Etarath gives retailers direct access to a wide network of verified suppliers and multiple markets across the UAE — all managed from one smart, intuitive digital platform. No more chasing quotes, managing fragmented supplier relationships, or operating in the dark.",
    features: [
      "Discover new, verified suppliers across the UAE ",
      "Expand your product offerings with a wider catalogue ",
      "Speed up the quotation process with instant digital tools ",
      "Improve claim handling with AI-powered management ",
      "Track every order transparently in real time ",
      "Grow your customer base with faster, smarter service",
    ],
    image: "/images/img2.webp",
    btnText: "Join as Retailer",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          duration: 0.6,
        },
        {
          opacity: 1,
          duration: 0.6,
        },
      )
        .from(headingRef.current, {
          opacity: 0,
          y: 60,
          scale: 0.9,
          duration: 0.6,
        })
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
          },
          "-=0.3",
        )
        .fromTo(
          videoRef.current,
          {
            opacity: 0,
            scale: 0.9,
            y: 100,
            duration: 0.6,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
          },
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="opacity-0">
      <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
        <Heading2 ref={headingRef} className="text-center">
          Become an <span className="text-primary">Etarath</span> <br /> Powered
          Seller & Buyer
        </Heading2>

        <Paragraph ref={paragraphRef} className="text-center max-w-[730px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
      </div>
      <div
        ref={videoRef}
        className="relative flex items-end h-[300px] sm:h-[400px] md:h-[550px] w-full rounded-[20px] sm:rounded-[40px] overflow-hidden  mb-[50px] md:mb-10 lg:mb-[100px]"
      >
        {/* Video Section */}
        <div className="absolute inset-0">
          <video
            src="/videos/about_intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className=" w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        <div className="relative z-10 p-5 sm:p-10 md:px-[60px] md:py-[70px]">
          <h1 className="text-[28px] md:text-[42px] lg:text-[50px] font-[700] font-jakarta md:leading-[65px] lg:leading-[70px]">
            Shani Shameer
          </h1>
          <Heading7 className="font-jakarta!">Founding CEO</Heading7>
        </div>
      </div>
      <BehindEtarath />
      <TeamMembers />
      <Testimonials />
      <FAQComponent questions={questions} />
    </div>
  );
};

export default About;
