import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href={"#"} className="hover:opacity-90">
          <Image
            className="w-[109px] md:w-[178px] h-[45px] md:h-[74px] px-1"
            src={"/assets/icons/neupay-logo-white.svg"}
            width={1780}
            height={740}
            alt="Neupay logo"
          />
        </Link>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 gap-4 md:gap-2 font-light">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>How it works</Link>
        </div>
      </div>
      <div className="bg-white/35 h-[1px] w-full hidden md:block"></div>
      <div className="flex flex-col-reverse gap-6 md:flex-row justify-between items-center">
        <p className="text-white/65 font-light text-sm">
          Copyright Neupay {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="flex gap-5">
          <Link href={"https://linkedin.com/"}>
            <Image
              src={"/assets/icons/linkedin-icon.svg"}
              width={48}
              height={48}
              alt=""
            />
          </Link>
          <Link href={"https://instagram.com/"}>
            <Image
              src={"/assets/icons/instagram-icon.svg"}
              width={48}
              height={48}
              alt=""
            />
          </Link>
          <Link href={"https://facebook.com/"}>
            <Image
              src={"/assets/icons/facebook-icon.svg"}
              width={48}
              height={48}
              alt=""
            />
          </Link>
          <Link href={"https://twitter.com/"}>
            <Image
              src={"/assets/icons/twitter-icon.svg"}
              width={48}
              height={48}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
