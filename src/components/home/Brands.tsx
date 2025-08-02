import React from "react";
import Heading8 from "../common/Heading8";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Brands = () => {
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
    <div key={index} className="flex items-center justify-center mx-[30px] my-[25px] ">
      
      <img src={brand?.src} alt="brand logos" className="" />
    </div>
  ));

  return (
    <div>
      <div>
        <Heading8 className="text-center mb-5">
          Working with industry <br className="block md:hidden"/>leaders
        </Heading8>
        <div className="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden ">
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
