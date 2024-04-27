"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [onScrollNav, setOnScrollNav] = useState(false);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setOnScrollNav(true);
      } else {
        setOnScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!onScrollNav && (
        <nav className="fixed bg-white w-full z-40 px-5 md:px-5 xl:px-20 2xl:px-[102px] pt-5 pb-2 xl:pb-5 2xl:pt-10 2xl:pb-7 flex justify-between items-center text-secondary border-b border-[#D9D9D9]">
          <Link href={"#"} className="hover:opacity-90">
            <Image
              className="w-[109px] md:w-[178px] h-[45px] md:h-[74px] px-1"
              src={"/assets/icons/neupay-logo.svg"}
              width={1780}
              height={740}
              alt="Neupay logo"
            />
          </Link>
          <button className="mdd:hidden">
            <Image
              src={"/assets/icons/hamburger-icon.svg"}
              width={41}
              height={41}
              alt="hamburger button"
            />
          </button>
          <div className="hidden mdd:block">
            <ul className="flex gap-7 text-base xl:text-xl text-secondary">
              <li
                className={`${
                  activeLink === "Home"
                    ? "border-primary text-primary border-b-2"
                    : ""
                }`}
              >
                <Link href={"#"} onClick={() => handleSetActiveLink("Home")}>
                  Home
                </Link>
              </li>
              <li
                className={`${
                  activeLink === "About Us"
                    ? "border-b-2 border-primary text-primary"
                    : ""
                }`}
              >
                <Link
                  href={"#"}
                  onClick={() => handleSetActiveLink("About Us")}
                >
                  About Us
                </Link>
              </li>
              <li
                className={` ${
                  activeLink === "How it works"
                    ? "border-b-2 text-primary border-primary"
                    : ""
                }`}
              >
                <Link
                  href={"#"}
                  onClick={() => handleSetActiveLink("How it works")}
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative hidden mdd:block">
            <Button
              variant="default"
              className="flex items-center gap-2 font-normal"
            >
              Join waitlist <MoveRight />
            </Button>
            <div className="h-[60px] w-[184px] bg-[#0B489D1C] rounded-[11px] absolute top-[4px] left-[4px] -z-10"></div>
          </div>
        </nav>
      )}
      {onScrollNav && (
        <nav className="fixed w-full bg-primary z-40 px-5 md:px-5 xl:px-20 2xl:px-[102px] pt-5 pb-2 xl:pb-5 2xl:pt-10 2xl:pb-7 flex justify-between items-center text-secondary">
          <Link href={"#"} className="hover:opacity-90">
            <Image
              className="w-[109px] md:w-[178px] h-[45px] md:h-[74px] px-1"
              src={"/assets/icons/neupay-logo-white.svg"}
              width={1780}
              height={740}
              alt="Neupay logo"
            />
          </Link>
          <button className="mdd:hidden">
            <Image
              src={"/assets/icons/hamburger-icon-white.svg"}
              width={41}
              height={41}
              alt="hamburger button"
            />
          </button>
          <div className="hidden mdd:block">
            <ul className="flex gap-7 text-base xl:text-xl text-white">
              <li
                className={`${
                  activeLink === "Home"
                    ? "border-white text-white border-b-2"
                    : ""
                }`}
              >
                <Link href={"#"} onClick={() => handleSetActiveLink("Home")}>
                  Home
                </Link>
              </li>
              <li
                className={`${
                  activeLink === "About Us"
                    ? "border-b-2 border-white text-white"
                    : ""
                }`}
              >
                <Link
                  href={"#"}
                  onClick={() => handleSetActiveLink("About Us")}
                >
                  About Us
                </Link>
              </li>
              <li
                className={` ${
                  activeLink === "How it works"
                    ? "border-b-2 text-white border-whitext-white"
                    : ""
                }`}
              >
                <Link
                  href={"#"}
                  onClick={() => handleSetActiveLink("How it works")}
                >
                  How it works
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative hidden mdd:block">
            <Button
              variant="white"
              className="flex items-center gap-2 font-normal"
            >
              Join waitlist <MoveRight />
            </Button>
            <div className="h-[60px] w-[184px] bg-white/50 rounded-[11px] absolute top-[4px] left-[4px] -z-10"></div>
          </div>
        </nav>
      )}
    </>
  );
}
