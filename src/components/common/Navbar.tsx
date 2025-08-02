"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Cursor animation */
  useEffect(() => {
    if (!menuRef.current || !cursorRef.current) return;

    const cursorEl = cursorRef.current;
    const menuEl = menuRef.current;

    gsap.set(cursorEl, { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorEl, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power3.out",
      });
    };

    const showCursor = () =>
      gsap.to(cursorEl, { opacity: 1, scale: 1, duration: 0.2 });
    const hideCursor = () =>
      gsap.to(cursorEl, { opacity: 0, scale: 0.5, duration: 0.2 });

    const links = menuEl.querySelectorAll("a");

    const enterLink = () =>
      gsap.to(cursorEl, {
        scale: 1.6,
        // backgroundColor: "#FF6A00",
        duration: 0.3,
      });
    const leaveLink = () =>
      gsap.to(cursorEl, {
        scale: 1,
        backgroundColor: "rgba(255,255,255,0.4)",
        duration: 0.3,
      });

    window.addEventListener("mousemove", moveCursor);
    menuEl.addEventListener("mouseenter", showCursor);
    menuEl.addEventListener("mouseleave", hideCursor);
    links.forEach((link) => {
      link.addEventListener("mouseenter", enterLink);
      link.addEventListener("mouseleave", leaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      menuEl.removeEventListener("mouseenter", showCursor);
      menuEl.removeEventListener("mouseleave", hideCursor);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enterLink);
        link.removeEventListener("mouseleave", leaveLink);
      });
    };
  }, []);

  /* GSAP Offcanvas Slide */
  useEffect(() => {
    const offcanvas = document.getElementById("mobile-offcanvas");
    if (!offcanvas) return;

    if (menuOpen) {
      gsap.to(offcanvas, { x: 0, duration: 0.3, ease: "power3.out" });
    } else {
      gsap.to(offcanvas, { x: "100%", duration: 0.3, ease: "power3.in" });
    }
  }, [menuOpen]);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    const offcanvas = document.getElementById("mobile-offcanvas");
    if (!offcanvas) return;

    if (menuOpen) {
      gsap.to(offcanvas, { x: 0, duration: 0.3, ease: "power3.out" });
      window.document.body.style.overflow = "hidden";
    } else {
      gsap.to(offcanvas, { x: "100%", duration: 0.3, ease: "power3.in" });
      window.document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <div className="relative w-full flex items-center justify-between p-5 md:px-[30px] lg:px-[60px] md:py-[25px] transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-between w-full md:h-[58px]">
          {/* Logo */}
          <Link
            href={"/"}
            className="w-[130px] h-[30px] md:w-[170px] md:h-[40px] relative"
          >
            <Image
              src="/etarath_logo.svg"
              alt="logo"
              fill
              className="object-contain cursor-pointer w-full h-full z-[101]"
            />
          </Link>

          {/* Desktop menu */}
          <div className="navbar_menu absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              ref={menuRef}
              className="relative hidden md:flex items-center justify-center gap-10 text-[16px] font-[600] rounded-full bg-[#1E1F21] md:px-10 lg:px-[78px] py-[15px] cursor-none overflow-hidden transition-all duration-300 ease-in-out"
            >
              <Link className="cursor-none" href={"/pricing"}>Pricings</Link>
              <Link className="cursor-none" href={"/blog"}>Blog</Link>
              <Link className="cursor-none" href={"/contact"}>Contact</Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Animated Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="relative group md:hidden z-[101]"
            >
              <div className="relative flex overflow-hidden items-center justify-center   transform transition-all  duration-200 ">
                <div
                  className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${
                    menuOpen ? "" : ""
                  }`}
                >
                  {/* Hamburger lines */}
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                      menuOpen ? "translate-x-10" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                      menuOpen ? "translate-x-10 delay-75" : ""
                    }`}
                  ></div>
                  <div
                    className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                      menuOpen ? "translate-x-10 delay-150" : ""
                    }`}
                  ></div>

                  {/* Cross icon */}
                  <div
                    className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                      menuOpen ? "translate-x-0 w-12" : "-translate-x-10 w-0"
                    } flex`}
                  >
                    <div
                      className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
                        menuOpen ? "rotate-45" : ""
                      }`}
                    ></div>
                    <div
                      className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
                        menuOpen ? "-rotate-45" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </button>

            <Button
              type="link"
              href="/"
              className="!hidden md:!inline-flex"
              textColor="black"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Cursor */}
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white/40 pointer-events-none"
        ></div>
      </div>

      {/* Offcanvas */}
      <div
        id="mobile-offcanvas"
        className="fixed flex flex-col p-5 justify-between top-0 right-0 h-full w-screen bg-white/10 backdrop-blur-lg text-white shadow-lg z-[100] translate-x-full"
      >
        <div className=" flex flex-col gap-4 mt-16 text-[16px] font-[600]">
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricings
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
        <Button type="link" href="/" className="" textColor="black">
          Get Started
        </Button>
      </div>
    </>
  );
};

export default Navbar;
