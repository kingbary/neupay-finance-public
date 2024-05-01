"use client";
import Image from "next/image";
import React from "react";
import FormModal from "./FormModal";

export default function AboutUs() {
  return (
    <section id="about-us" className="flex flex-col gap-4 md:gap-6 items-center mt-12 md:mt-24 px-0 sm:px-5 md:px-5 xl:px-20 2xl:px-[102px]">
      <div className="bg-gray-100 rounded-[9px] px-2 py-1">
        <p>About us</p>
      </div>
      <div className="pb-7 md:max-w-[80%] px-5">
        <h2 className="text-3xl md:text-5xl text-center font-semibold tracking-tight">
          Elevate your experience with{" "}
          <span className="relative text-primary pb-3 md:pb-4">
            Neupay.{" "}
            <span>
              <Image
                className="absolute bottom-0 right-0 w-full"
                src={"/assets/icons/zig-zag-line.svg"}
                width={200}
                height={17}
                alt="zig zag line"
              />
            </span>
          </span>
        </h2>
      </div>
      <p className="text-lg tracking-tight text-secondary text-center md:max-w-[70%] px-5">
        At Neupay, we are dedicated to revolutionizing the way transactions are
        securely conducted. Our platform provides a trusted space where buyers
        and sellers can engage in transactions, knowing that their funds are
        protected until both parties are satisfied with the outcome.
      </p>
      <div className="w-full bg-[url(/assets/images/about-us-bg.png)] bg-cover rounded-[20px] py-[150px] 2xl:py-[200px] px-12 hidden md:block">
        <div className="flex flex-col gap-10 items-end text-white">
          <p className="text-[28px] xl:text-[34px] 2xl:text-4xl font-medium">
            Your gateway to hassle-free deals
          </p>
          <FormModal className="items-center gap-2 font-normal w-[271px] mt-8 hidden md:flex" />
          <div className="flex items-center gap-2">
            <Image
              src={"/assets/images/group-img.png"}
              width={105}
              height={35}
              alt="group image"
            />
            <p className="text-xl">500+ awaiting customers</p>
          </div>
        </div>
      </div>
      <div className="max-w-full mt-6 md:hidden">
        <Image
          className=""
          src={"/assets/images/about-us-img.png"}
          width={290}
          height={600}
          alt=""
        />
      </div>
    </section>
  );
}
