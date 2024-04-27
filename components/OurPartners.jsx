import Image from "next/image";
import React from "react";

export default function OurPartners() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center py-5 md:py-8 bg-gray58">
      <p className="text-black/47 font-light">Our partners</p>
      <div className="flex gap-5 items-center justify-center overflow-hidden no-scrollbar">
        <div className="w-[76px] md:w-[135px] h-auto">
          <Image
            className="w-full"
            src={"/assets/images/brand-logo.png"}
            width={300}
            height={300}
            alt="partner brand logo"
          />
        </div>
        <div className="w-[76px] md:w-[135px] h-auto">
          <Image
            className="w-full"
            src={"/assets/images/brand-logo-2.png"}
            width={300}
            height={300}
            alt="partner brand logo"
          />
        </div>
        <div className="w-[76px] md:w-[135px] h-auto">
          <Image
            className="w-full"
            src={"/assets/images/brand-logo.png"}
            width={300}
            height={300}
            alt="partner brand logo"
          />
        </div>
        <div className="w-[76px] md:w-[135px] h-auto">
          <Image
            className="w-full"
            src={"/assets/images/brand-logo-2.png"}
            width={300}
            height={300}
            alt="partner brand logo"
          />
        </div>
      </div>
    </div>
  );
}
