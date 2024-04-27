import Image from "next/image";
import React from "react";

export default function OurServices() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 px-8">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/assets/icons/our-service-icon-2.svg"}
          width={74}
          height={74}
          alt=""
        />
        <p className="text-xl xl:text-2xl font-medium mt-6">
          Secure Transactions
        </p>
        <p className="xl:text-lg font-light text-center text-black/63">
          With our trusted escrow services, your transaction are securely
          managed from start to finish.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/assets/icons/our-service-icon.svg"}
          width={74}
          height={74}
          alt=""
        />
        <p className="text-xl xl:text-2xl font-medium mt-6">
          Efficient Process
        </p>
        <p className="xl:text-lg font-light text-center text-black/63">
          Say goodbye to delays and complications. We make the process smooth
          and efficient.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={"/assets/icons/our-service-icon-3.svg"}
          width={74}
          height={74}
          alt=""
        />
        <p className="xl:text-2xl font-medium mt-6">24/7 Support</p>
        <p className="xl:text-lg font-light text-center text-black/63">
          Our dedicated support team is available around the clock to assist
          whenever you need them.
        </p>
      </div>
    </section>
  );
}
