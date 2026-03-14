import React, { useEffect, useRef } from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading8 from "../common/Heading8";

gsap.registerPlugin(ScrollTrigger);

const TeamMembers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);
  const membersContainerRef = useRef<HTMLDivElement>(null);

  const TEAM_MEMBERS = [
    {
      name: "Shani Shameer",
      designation: "Founding CEO",
      image: "/images/team/employee_1.webp",
    },
    {
      name: "Chinju Puthoor",
      designation: "Chief Operational Officer",
      image: "/images/team/employee_2.webp",
    },
    {
      name: "Muhammed Anas",
      designation: "Marketing Manager",
      image: "/images/team/employee_3.webp",
    },
    {
      name: "Sarath",
      designation: "Technical Officer",
      image: "/images/team/employee_4.webp",
    },
    {
      name: "Abdul Al Ahli",
      designation: "Project Manager",
      image: "/images/team/employee_5.webp",
    },
    {
      name: "David John",
      designation: "Chief Finance Officer",
      image: "/images/team/employee_6.webp",
    },
    {
      name: "Bushra Arafath",
      designation: "Board Member",
      image: "/images/team/employee_7.webp",
    },
    {
      name: "Alexandra Sanchez",
      designation: "Web Developer",
      image: "/images/team/employee_8.webp",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".member_card");
      const card_texts = gsap.utils.toArray(".card_texts");
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
          membersContainerRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=.2",
        )
        .from(
          cards,
          {
            opacity: 0,
            scale: 0.8,
            y: 80,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.2",
        )
        .fromTo(
          card_texts,
          { opacity: 0, scale: 0.8, y: 80 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=0.6",
        );

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert(); // 🔥 cleans everything
  }, []);

  return (
    <div className="mb-[50px] md:mb-[80px] lg:mb-[100px]">
      <div ref={containerRef}>
        <div className="mb-[60px] flex flex-col items-center justify-center gap-[30px]">
          <Heading2 ref={heading2Ref} className="text-center">
            Built by Humans. Driven by Purpose.
            {/* <span className="text-primary">Etarath</span> <br /> Powered
          Seller & Buyer */}
          </Heading2>

          <Paragraph ref={paragraphRef} className="text-center max-w-[730px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet.
          </Paragraph>
        </div>
        <div
          ref={membersContainerRef}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]"
        >
          {TEAM_MEMBERS?.map((item: any, index: number) => (
            <div
              className="member_card group relative flex flex-col justify-end rounded-[20px] overflow-hidden h-[375px] p-[10px] perspective-[1000px]"
              key={index}
            >
              <div
                className=" absolute inset-0 transition-transform duration-500 ease-out 
                           group-hover:scale-110 group-hover:-rotate-x-2 group-hover:rotate-y-2"
              >
                <Image
                  src={item?.image}
                  alt={item?.name}
                  fill
                  className="object-cover "
                />
              </div>
              <div className="card_texts relative bg-black/70 rounded-[20px] p-5 flex flex-col items-center justify-center ">
                <Heading8 className="text-center">{item?.name}</Heading8>
                <p className="text-[14px] font-[400] text-center">
                  {item?.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
