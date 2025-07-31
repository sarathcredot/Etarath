import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Button from "@/components/common/Button";
import Features from "@/components/Features";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      <Features />

      {/* <h1 className="font-jakarta">Home</h1> */}
      {/* <Button variant="solid" color="primary" textColor="black" >Button</Button> */}
    </div>
  );
}
