import Banner from "@/components/home/Banner";
import Brands from "@/components/home/Brands";
import Button from "@/components/common/Button";
import Features from "@/components/home/Features";
import Image from "next/image";
import VendorBenefits from "@/components/home/VendorBenefits";
import RetailerBenefits from "@/components/home/RetailerBenefits";
import RetailerPlans from "@/components/home/RetailerPlans";
import VendorPlans from "@/components/home/VendorPlans";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Brands />
      <Features />
      <VendorBenefits />
      <RetailerBenefits />
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-white overflow-hidden">
        <RetailerPlans />
      </div>
      <VendorPlans />
      <Testimonials />

    </div>
  );
}
