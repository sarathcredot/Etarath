"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Link from "next/link";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { Blog } from "@/types/blog";
import { formatBlogDate } from "@/lib/blog";

interface BannerProps {
  blogs: Blog[];
}

const Banner = ({ blogs }: BannerProps) => {
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

    const slides = useMemo(
        () =>
            [...blogs]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 4),
        [blogs]
    );

    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0);
    const AUTO_SLIDE_DELAY = 5000; // 5 seconds
    const prevIndexRef = useRef(0);


    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, AUTO_SLIDE_DELAY);

        return () => clearInterval(interval);
    }, [slides.length]);

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

    if (slides.length === 0) return null;

    const currentSlide = slides[index];

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
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14">
                    <Link
                        href={`/blog/${currentSlide._id}`}
                        ref={imageRef}
                        className="w-full max-w-[1000px] h-[220px] sm:h-[320px] md:h-[420px] lg:h-[501px] rounded-2xl overflow-hidden block"
                    >
                        <img
                            src={currentSlide.imgUrl}
                            className="w-full h-full object-cover"
                            alt={currentSlide.title}
                        />
                    </Link>

                    <div
                        ref={contentRef}
                        className="max-w-full lg:max-w-[420px] text-center lg:text-left"
                    >
                        <p className="text-[14px] font-[400] mb-[15px] uppercase tracking-wide text-gray-300">
                            {currentSlide.category} • {formatBlogDate(currentSlide.date)}
                        </p>

                        <Link href={`/blog/${currentSlide._id}`}>
                            <h4 className="text-[31px] md:text-[33px] lg:text-[35px] font-[600] font-jakarta hover:text-primary transition-colors">
                                {currentSlide.title}
                            </h4>
                        </Link>
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
