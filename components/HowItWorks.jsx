import { roboto } from "@/app/fonts";
import Image from "next/image";
import React from "react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-neutral-100 flex flex-col-reverse md:flex-row justify-center gap-4 lg:gap-8 xl:gap-16 2xl:gap-20 items-center px-5 md:px-12 xl:px-20 mt-20 py-16 mx-0 mdd:mx-5 xl:mx-20 rounded-none mdd:rounded-[53px]">
      <div>
        <Image
          className="h-[550px] lg:h-[650px] w-auto"
          src={"/assets/images/phone-img.png"}
          width={405}
          height={829}
          alt=""
        />
      </div>
      <div>
        <div className="bg-gray-200 rounded-[9px] px-2 py-1 w-fit">
          <p className={roboto.className}>How it works</p>
        </div>
        <div>
          <p
            className={`${roboto.className} text-3xl lg:text-4xl tracking-tight font-medium mt-2`}
          >
            It only takes 5 minutes{" "}
            <span className="text-3xl lg:text-5xl">🚀</span>
          </p>
          <div className={`${roboto.className} relative mt-9 pb-16`}>
            <div className="max-w-[435px]">
              <p className="text-2xl font-medium">
                <span className="text-primary pr-2">01</span>Create an account
              </p>
              <p className="text-secondary ml-9">
                Download the Neupay app, create your account and verify your
                identity.
              </p>
            </div>
            <div className="absolute top-8 left-3 bg-primary w-[3.7px] h-[102px] rounded-sm"></div>
          </div>
          <div className={`${roboto.className} relative pb-16`}>
            <div className="max-w-[435px]">
              <p className="text-2xl font-medium">
                <span className="text-primary pr-2">02</span>Deposit funds
              </p>
              <p className="text-secondary ml-9">
                The buyer deposits the agreed upon funds into their wallet.
              </p>
            </div>
            <div className="absolute top-8 left-3 bg-primary w-[3.7px] h-[102px] rounded-sm"></div>
          </div>
          <div className={`${roboto.className}`}>
            <div className="max-w-[435px]">
              <p className="text-2xl font-medium">
                <span className="text-primary pr-2">03</span>Start transacting
              </p>
              <p className="text-secondary ml-9">
                Both parties can start transacting and end it when they’re
                pleased with the outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <Image
          className="w-[75px] h-[45px] md:w-[150px] md:h-[89px] lg:w-full lg:h-full"
          src={"/assets/images/wavy-lines.svg"}
          width={150}
          height={89}
          alt=""
        />
      </div>
    </section>
  );
}
