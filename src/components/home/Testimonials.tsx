import React from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const Testimonials = () => {
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
      className="w-[380px]  flex flex-col  justify-center gap-5  border border-white rounded-[25px] px-[30px] py-[25px]"
    >
      <FaQuoteLeft size={30} />
      <p className="text-[15px] font-[400]">{item?.message}</p>
      <div className="flex items-center gap-[10px]">
        <Image src={item?.avatar} alt="" width={40} height={40} className="rounded-full" />
        <div>
          <h6 className="text-[15px] font-[600] font-jakarta">
            {item?.name}
          </h6>
          <p className="text-[10px] font-[400] uppercase">
            {item?.role}, {item?.company}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mb-[100px]">
      <div>
        <div className="mb-[60px] flex flex-col items-center justify-center gap-5">
          <Heading2 className="text-center">
            Words of praise from others <br /> about our presence
          </Heading2>
          <Paragraph className="text-center max-w-[730px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet.
          </Paragraph>
        </div>
        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden ">
          <InfiniteMovingCards
            component={component}
            speed="slow"
            direction={"left"}
            className="mb-5"
          />
          <InfiniteMovingCards
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
