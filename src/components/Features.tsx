import React from "react";
import Heading8 from "./common/Heading8";
import Paragraph from "./common/Paragraph";
import Heading1 from "./common/Heading1";

const Features = () => {
  return (
    <div className="my-[100px]">
      <div className=" grid grid-cols-10 gap-5">
        <div className=" col-span-5 border border-white rounded-[23px] p-[35px]">
          <Heading8>Interaction</Heading8>{" "}
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Do eiusmod
            dolore ut magna sed ipsum
          </Paragraph>
        </div>
        <div className=" col-span-5 border border-white rounded-[23px] p-[35px]">
          <Heading8>Privacy & Security</Heading8>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Do eiusmod
            dolore ut magna sed ipsum elit due eiusmod tempor do etil.
          </Paragraph>
        </div>
        <div className=" col-span-2 row-span-2 border border-white rounded-[23px] p-[35px]">
          <Heading8>Warehouse management</Heading8>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Sed ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod. suit ipsum
            dolor sit amet, consectetur adipiscing elit ut dem sed magna.
          </Paragraph>
        </div>
        <div className=" col-span-6  p-[35px]">
          <Heading1 className="text-stroke">KEY</Heading1>
        </div>
        <div className=" col-span-2  border border-white rounded-[23px] p-[35px]">
          <Heading8>
            Sales Exicutive management
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut dem sed
              magna.
            </Paragraph>
          </Heading8>
        </div>
        <div className=" col-span-4 border border-white rounded-[23px] p-[35px]">
          <Heading8>Multi Level Marketing</Heading8>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod
            tempor incididunt.
          </Paragraph>
        </div>
        <div className=" col-span-4 border border-white rounded-[23px] p-[35px]">
          <Heading8>Online Invoice Generation</Heading8>{" "}
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna sed do eiusmod
            tempor incididunt.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default Features;
