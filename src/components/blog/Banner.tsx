"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading1 from "../common/Heading1";
import Heading2 from "../common/Heading2";
import Heading3 from "../common/Heading3";
import Paragraph from "../common/Paragraph";
import { BsClock } from "react-icons/bs";


import SubHeading1 from "../common/Subheading1";
import Button from "../common/Button";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Heading4 from "../common/Heading4";

const Banner = () => {
    const heading1Ref = useRef<HTMLDivElement>(null);
    const subHeading1Ref = useRef<HTMLDivElement>(null);
    const buttonContainerRef = useRef<HTMLDivElement>(null);
    const bannerImgRef = useRef<HTMLDivElement>(null);
    const bannerLogoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mySplitText = new SplitText(heading1Ref.current, { type: "lines" }),
            headingLines = mySplitText.lines;
        const mySplitText2 = new SplitText(subHeading1Ref.current, { type: "lines" }),
            subLines = mySplitText2.lines;

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

    const slides = [
        {
            image: "/images/home/banner_img.webp",
            title: "Why Hiring a Sales Agent Costs You $350K",
            author: "Shameer",
            authorImage: "/images/avatars/avatar_1.webp",
            time: "9 minutes",
        },
        {
            image: "/images/home/banner_img.webp",
            title: "How Founders Waste Money on Sales",
            author: "John",
            authorImage: "/images/avatars/avatar_2.webp",

            time: "7 minutes",
        },
        {
            image: "/images/home/banner_img.webp",
            title: "How Founders Waste Money on Sales",
            author: "John",
            authorImage: "/images/avatars/avatar_3.webp",

            time: "7 minutes",
        },
        {
            image: "/images/home/banner_img.webp",
            title: "How Founders Waste Money on Sales",
            author: "John",
            authorImage: "/images/avatars/avatar_4.webp",

            time: "7 minutes",
        },
    ];

    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0);
    const AUTO_SLIDE_DELAY = 5000; // 5 seconds
    const prevIndexRef = useRef(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, AUTO_SLIDE_DELAY);

        return () => clearInterval(interval);
    }, []);

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         gsap.fromTo(
    //             imageRef.current,
    //             { opacity: 0, scale: 0.96 },
    //             { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    //         );

    //         gsap.fromTo(
    //             contentRef.current,
    //             { opacity: 0, y: 20 },
    //             { opacity: 1, y: 0, duration: 0.6, delay: 0.15 }
    //         );
    //     });

    //     return () => ctx.revert();
    // }, [index]);




    //     const ctx = gsap.context(() => {
    //         gsap.fromTo(
    //             imageRef.current,
    //             { opacity: 0, x: 50 },
    //             { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
    //         );

    //         gsap.fromTo(
    //             contentRef.current,
    //             { opacity: 0, y: 30 },
    //             { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
    //         );
    //     });

    //     return () => ctx.revert();
    // }, [index]);


    useEffect(() => {
        const direction =
            index > prevIndexRef.current ? 1 : -1;

        const ctx = gsap.context(() => {
            // Image slide
            gsap.fromTo(
                imageRef.current,
                {
                    x: direction * 80,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            // Content slide (slightly delayed)
            gsap.fromTo(
                contentRef.current,
                {
                    x: direction * 40,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.15,
                    ease: "power3.out",
                }
            );
        });

        prevIndexRef.current = index;

        return () => ctx.revert();
    }, [index]);

    return (
        <div>
            <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
                <Heading2 ref={heading1Ref} className=" text-center ">
                    {/* Introducing <span className="text-primary">Etarath </span>
          <br /> for you, a b2B tyre selling
          <br className="max-md:hidden " /> platform */}
                    {/* The <span className="text-primary">UAE’s </span> Ultimate
                    <br />
                    B2B Tyre Marketplace */}
                    The Etarath Insights
                </Heading2>
                <Paragraph
                    ref={subHeading1Ref}
                    className="text-center  max-w-[730px]"
                >
                    {/* The Etarath Blog */}
                    The Etarath news and blogs.
                </Paragraph>

            </div>

            <div className="mb-20">
                {/* Slider */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
                    {/* Image */}
                    <div
                        ref={imageRef}
                        className="
        w-full
        max-w-[1000px]
        h-[220px]
        sm:h-[320px]
        md:h-[420px]
        lg:h-[501px]
        rounded-2xl
        overflow-hidden
      "
                    >
                        <img
                            src={slides[index].image}
                            className="w-full h-full object-cover"
                            alt="blog cover"
                        />
                    </div>

                    {/* Content */}
                    <div
                        ref={contentRef}
                        className="
        max-w-full
        lg:max-w-[420px]
        text-center
        lg:text-left
      "
                    >
                        {/* <Paragraph className="text-sm opacity-70 mb-3"> */}
                         <p className="flex items-center gap-[10px] text-[14px] font-[400]  mb-[15px]">

                            <BsClock className="inline-block" /> {slides[index].time}
                         </p>
                        {/* </Paragraph> */}

                        <h4 className="text-[31px] md:text-[33px] lg:text-[35px] font-[600] font-jakarta">
                            {slides[index].title}
                        </h4>
                        {/* <Heading4 className="
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-[34px]
        font-semibold
        leading-tight
        
      ">
                            {slides[index].title}
                        </Heading4> */}

                        {/* Author */}
                        <div className="
        flex items-center gap-[10px] mt-5 md:mt-[30px]
        justify-center lg:justify-start
      ">
                            <img
                                src={slides[index].authorImage}
                                alt={slides[index].author}
                                className="min-w-10 min-h-10 w-10 h-10 rounded-full object-cover"
                            />

                            <div className=" text-left">
                               <p className=" text-[12px] font-[400]  mb-[5px]">Founding CEO</p>

                                <p className=" text-[14px] font-[600] ">{slides[index].author}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8 sm:mt-10">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`transition-all duration-300 rounded-full
          ${index === i
                                    ? "w-6 h-2 bg-white"
                                    : "w-2 h-2 bg-gray-500"
                                }`}
                        />
                    ))}
                </div>
            </div>



        </div>
    );
};

export default Banner;
