import React from "react";
import Heading2 from "../common/Heading2";
import Paragraph from "../common/Paragraph";
import Image from "next/image";
import Heading4 from "../common/Heading4";
import SubHeading1 from "../common/Subheading1";
import { BsArrowDownRight } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import Heading3 from "../common/Heading3";

const VendorPlans = () => {
  return (
    <div className="pt-[50px] md:pt-20 lg:pt-[100px] pb-[70px] md:pb-[100px] lg:pb-[120px] transition-all duration-300 ease-in-out">
      <div className="flex flex-col md:flex-row  gap-5 md:items-center justify-between mb-[30px] md:mb-[60px] transition-all duration-300 ease-in-out">
        <div>
          <Heading2 className="mb-5 lg:mb-[30px]">
            Choose Idle plan for vendor
          </Heading2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna.
          </Paragraph>
        </div>
        <div className="relative flex items-center gap-5 ">
          <h1 className="text-[80px] md:text-[120px] lg:text-[150px] leading-none tracking-[3px] font-[700]  text-outline-shadow-primary font-manrope md:mr-[50px]">
            250+
          </h1>
          <h6 className="absolute -right-[38px] text-[20px] md:text-[22px] lg:text-[24px] font-[600] font-jakarta uppercase rotate-90   whitespace-nowrap">
            VENDORS
          </h6>
        </div>
      </div>
      <div className="relative w-screen left-1/2 -translate-x-1/2  ">
        <div className="grid md:grid-cols-2  md:h-[650px] border-t border-b border-white">
          <div className="min-h-[500px] flex items-end justify-start relative group outline  transition-all duration-300 ease-in-out">
            <div className="p-5 md:p-10 lg:p-[70px] z-30 transition-all duration-300 ease-in-out">
              <Heading4 className="text-primary mb-[20px]">Executive</Heading4>
              <SubHeading1 className="mb-5 md:mb-[40px] group-hover:opacity-0 group-hover:hidden  transition-all duration-300 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </SubHeading1>
              <div className="hidden group-hover:flex flex-col gap-3 md:gap-5 mb-5 md:mb-10">
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>
                    Lorem ipsum set amet elit sed dotempor enim.
                  </Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>Amet set ipsum elit set do tempor.</Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>Ipsum elit lorem sed tempor que amet.</Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>
                    Sed afet set amet que ipsum elite do eiusmod.
                  </Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>Adispising veniam minim enim ad magna.</Paragraph>
                </div>
              </div>
              <div className="flex items-center gap-[20px] hover:gap-[25px] transition-all duration-300 ease-in-out">
                <Heading3 className="hidden group-hover:block">
                  49 AED{" "}
                </Heading3>
                <BsArrowDownRight
                  size={35}
                  color="#FF600F"
                  className="group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 top-[50%] -translate-y-[50%] w-full h-[100%] md:h-[110%] transition-all duration-300 ease-in-out">
              <Image
                src={"/home/banner_img.webp"}
                alt="plan img"
                fill
                className="object-cover  !w-0  group-hover:!w-full  !h-[100%] transition-all duration-300 ease-in-out "
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="min-h-[500px] flex items-end justify-start relative group outline  transition-all duration-300 ease-in-out">
            <div className="p-5 md:p-10 lg:p-[70px] z-30 transition-all duration-300 ease-in-out">
              <Heading4 className="text-primary mb-[20px]">Corporate</Heading4>
              <SubHeading1 className="mb-5 md:mb-[40px] group-hover:opacity-0 group-hover:hidden  transition-all duration-300 ease-in-out">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </SubHeading1>
              <div className="hidden group-hover:flex flex-col gap-3 md:gap-5 mb-5 md:mb-10">
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>
                    Lorem ipsum set amet elit sed dotempor enim.
                  </Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>Amet set ipsum elit set do tempor.</Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>Ipsum elit lorem sed tempor que amet.</Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>
                    Sed afet set amet que ipsum elite do eiusmod.
                  </Paragraph>
                </div>
                <div className="flex items-center gap-[15px]">
                  <GoCheckCircleFill className="text-[20px] !min-w-5 md:!w-[30px] md:text-[30px]" />
                  <Paragraph>Adispising veniam minim enim ad magna.</Paragraph>
                </div>
              </div>
              <div className="flex items-center gap-[20px] hover:gap-[25px] transition-all duration-300 ease-in-out">
                <Heading3 className="hidden group-hover:block">
                  99 AED{" "}
                </Heading3>
                <BsArrowDownRight
                  size={35}
                  color="#FF600F"
                  className="group-hover:-rotate-45 transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="absolute opacity-0 group-hover:opacity-100 top-[50%] -translate-y-[50%] w-full h-[100%] md:h-[110%] transition-all duration-300 ease-in-out">
              <Image
                src={"/home/banner_img.webp"}
                alt="plan img"
                fill
                className="object-cover  !w-0  group-hover:!w-full  !h-[100%] transition-all duration-300 ease-in-out "
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPlans;
