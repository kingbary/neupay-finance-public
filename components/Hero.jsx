"use client";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import FormModal from "./FormModal";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 md:gap-16 items-center">
      <div className="relative flex flex-col  items-center justify-center px-7 overflow-hidden mt-24 md:mt-[124px] 2xl:mt-[170px]">
        <h1 className="text-[30px] md:text-[54px] font-semibold tracking-tighter leading-normal text-center max-w-[80%]">
          Enabling secure <span className="text-primary">escrow</span>{" "}
          transactions between{" "}
          <span className="text-primary">
            buyers, sellers, freelancers and clients.
          </span>
        </h1>
        <p className="text-secondary text-base md:text-2xl mt-4 text-center md:max-w-[60%]">
          At Neupay, we provide secure escrow transactions and worry-free deals
          between buyers and sellers.
        </p>
        <FormModal className="items-center gap-2 font-normal w-[271px] mt-8 hidden md:flex" />
        <div className="absolute hidden lg:block bottom-4 lg:right-0 xl:right-24">
          <Image
            src={"/assets/icons/curved-line.svg"}
            width={371}
            height={72}
            alt="curved line"
          />
        </div>
      </div>
      <div className="w-full flex justify-center px-5">
        <Image
          className="w-[100%] md:w-[70%]"
          src={"/assets/icons/phone-screens.png"}
          width={1000}
          height={1000}
          alt=""
        />
      </div>
    </div>
  );
}
