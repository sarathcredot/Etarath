"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
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

  /* Navbar Reveal Animation */
  useEffect(() => {
    if (!navbarRef.current || !logoRef.current || !buttonRef.current || !hamburgerRef.current) return;

    const tl = gsap.timeline();
    
    // Set initial states
    gsap.set([logoRef.current, buttonRef.current, hamburgerRef.current], {
      y: -50,
      opacity: 0,
    });

    if (menuRef.current) {
      gsap.set(menuRef.current, {
        y: -30,
        opacity: 0,
        scale: 0.9,
      });
      
      // Set initial state for menu links
      const menuLinks = menuRef.current.querySelectorAll("a");
      gsap.set(menuLinks, {
        y: -20,
        opacity: 0,
      });
    }

   ;

    // Animate logo
    tl
    .to(logoRef.current, {
      y: 0,
      opacity: 1,
      zIndex: 202,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
    })
    // Animate desktop menu
    .to(menuRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "ease",
    }, "-=0.6");

    // Animate menu links with stagger
    if (menuRef.current) {
      const menuLinks = menuRef.current.querySelectorAll("a");
      tl.to(menuLinks, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      }, "-=0.1");
    }

    // Animate button and hamburger
    tl.to([buttonRef.current, hamburgerRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    }, "-=0.3");

  }, []);

  /* Scroll-based navbar enhancement */
  useEffect(() => {
    if (!navbarRef.current) return;

    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollThreshold = 100;

      if (currentScrollY > scrollThreshold) {
        
        
        // Slight scale animation on scroll direction change
        if (scrollingDown !== (lastScrollY > currentScrollY)) {
          gsap.to(navbarRef.current, {
            scale: scrollingDown ? 0.98 : 1,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      } else {
        // Return to original state
        gsap.to(navbarRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Enhanced GSAP Offcanvas Animation */
  useEffect(() => {
    const offcanvas = document.getElementById("mobile-offcanvas");
    if (!offcanvas) return;

    const offcanvasLinks = offcanvas.querySelectorAll("a");
    const offcanvasButton = offcanvas.querySelector("div:last-child");

    if (menuOpen) {
      // Set initial states for staggered animation
      gsap.set(offcanvasLinks, { x: 50, opacity: 0 });
      gsap.set(offcanvasButton, { y: 30, opacity: 0 });

      // Create timeline for opening animation
      const tl = gsap.timeline();
      
      tl.to(offcanvas, { 
        x: 0, 
        duration: 0.4, 
        ease: "power3.out" 
      })
      .to(offcanvasLinks, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.2")
      .to(offcanvasButton, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }, "-=0.3");

      window.document.body.style.overflow = "hidden";
    } else {
      // Closing animation
      const tl = gsap.timeline();
      
      tl.to([offcanvasLinks, offcanvasButton], {
        x: 30,
        opacity: 0,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
      })
      .to(offcanvas, { 
        x: "100%", 
        duration: 0.3, 
        ease: "power3.in" 
      }, "-=0.1");

      window.document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <div 
        ref={navbarRef}
        className="relative w-full flex items-center justify-between p-5 md:px-[30px] lg:px-[60px] md:py-[25px] transition-all duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between w-full md:h-[58px]">
          {/* Logo */}
          <div ref={logoRef}>
            <Link
              href={"/"}
              className="w-[130px] h-[30px] md:w-[170px] md:h-[40px] relative block "
            >
              <Image
                src="/etarath_logo.svg"
                alt="logo"
                fill
                className="object-contain cursor-pointer w-full h-full !z-[101]"
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="navbar_menu absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              ref={menuRef}
              className="relative hidden md:flex items-center justify-center gap-10 text-[16px] font-[600] rounded-full bg-[#1E1F21] md:px-10 lg:px-[78px] py-[15px] cursor-none overflow-hidden transition-all duration-300 ease-in-out"
            >
              <Link className="cursor-none" href={"/about"}>About</Link>
              <Link className="cursor-none" href={"/pricing"}>Pricings</Link>
              <Link className="cursor-none" href={"/blog"}>Blog</Link>
              <Link className="cursor-none" href={"/contact"}>Contact</Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Animated Hamburger */}
            <button
              ref={hamburgerRef}
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

            <div ref={buttonRef}>
              <Button
                type="link"
                href="/quick-start"
                className="!hidden md:!inline-flex"
                textColor="black"
              >
                Get Started
              </Button>
            </div>
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
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </div>
        <Button type="link" href="/quick-start"  onClick={() => setMenuOpen(false)} className="" textColor="black">
          Get Started
        </Button>
      </div>
    </>
  );
};

export default Navbar;
