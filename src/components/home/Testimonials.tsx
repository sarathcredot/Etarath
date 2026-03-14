import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Ahli",
      role: "Founder",
      company: "ABC Tyres",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_1.webp",
    },
    {
      id: 2,
      name: "Alexis Sanchez",
      role: "CEO",
      company: "ABC Tyres",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_2.webp",
    },
    {
      id: 3,
      name: "John Hardy",
      role: "CEO",
      company: "XYZ Tyres",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_3.webp",
    },
    {
      id: 4,
      name: "Sebastian Haller",
      role: "CFO",
      company: "ABC Tyres",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_4.webp",
    },
    {
      id: 5,
      name: "Sarah Samual",
      role: "Marketing Manager",
      company: "XYZ Company",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_5.webp",
    },
    {
      id: 6,
      name: "Micheal Johnson",
      role: "Entrepreneur",
      company: "XYZ Company",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_6.webp",
    },
    {
      id: 7,
      name: "Jimmy Haller",
      role: "Business Owner",
      company: "XYZ Company",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor sit amet.",
      avatar: "/images/avatars/avatar_1.webp",
    },
  ];

  const component = testimonials.map((item, index) => (
    <div
      key={index}
      className=" w-[380px]  flex flex-col  justify-center gap-3 md:gap-5  border border-white rounded-[15px] md:rounded-[25px] px-[20px] md:px-[30px] py-[15px] md:py-[25px]"
    >
      <FaQuoteLeft className="text-[25px] md:text-[30px]" />
      <p className="text-[15px] font-[400]">{item?.message}</p>
      <div className="flex items-center gap-[10px]">
        <Image
          src={item?.avatar}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h6 className="text-[15px] font-[600] font-jakarta">{item?.name}</h6>
          <p className="text-[10px] font-[400] uppercase">
            {item?.role}, {item?.company}
          </p>
        </div>
      </div>
    </div>
  ));

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
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
      )
      .fromTo(
        heading2Ref.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
      )
      .fromTo(
        paragraphRef.current,
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=.1",
      )
      .fromTo(
        testimonialRef.current,
        { opacity: 0, scale: 1.5, y: 100 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=.2",
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div className="mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div ref={containerRef}>
        <div className="mb-[60px] flex flex-col items-center justify-center gap-5">
          <Heading2 ref={heading2Ref} className="text-center">
            Words of praise from others <br /> about our presence
          </Heading2>
          <Paragraph ref={paragraphRef} className="text-center max-w-[730px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet.
          </Paragraph>
        </div>
        <div
          ref={testimonialRef}
          className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden "
        >
          <InfiniteMovingCards
            pauseOnHover={false}
            component={component}
            speed="slow"
            direction={"left"}
            className="mb-5"
          />
          <InfiniteMovingCards
            pauseOnHover={false}
            component={component}
            speed="slow"
            direction={"right"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
