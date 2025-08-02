import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2';



type Props = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
};
const Button3 = ({href="/", children,color="primary", className=""}:Props) => {
  return (
    <Link href={href} className={` !text-${color} inline-flex items-center justify-start gap-[15px] hover:gap-5 text-[17px] leading-none font-[500] font-jakarta transition-all duration-300 ease-in-out  ${className}`}>
      {children}
      {/* <Image src={"/arrow_right.svg"} height={20} width={40} alt="arrow" className='object-scale-down' /> */}
      <HiArrowLongRight className='text-[25px] md:text-[30px]  transition-all duration-300 ease-in-out' />
    </Link>
  )
}

export default Button3
