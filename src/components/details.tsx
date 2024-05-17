import Image from "next/image";
import waitlistImage from "../../public/contact-image.png";
import Icon from "./icon";

import { cardContent, iconContent } from "@/static/details-content";

import Card from "./card";

// FONTS
import { arialRoundedMTBold } from "@/utils/fonts/fonts";

import { inter, montserrat } from "@/utils/fonts/fonts";
import Form from "./form";

const textContent = {
  heading1: "How GramHealth Partners With Trusted Pharmacies",
  heading2: "How GramHealth Delivers Medicines Without Damage",
};

export default async function Details() {
  return (
    <main className="container py-20 text-center">
      <h1
        className={`details-heading ${arialRoundedMTBold.variable} font-arialRoundedMTBold`}
      >
        {textContent.heading1}
      </h1>
      <div className="mt-16 flex flex-wrap justify-around">
        <Icon {...iconContent.icon1} />
        <Icon {...iconContent.icon2} />
        <Icon {...iconContent.icon3} />
        <Icon {...iconContent.icon4} />
      </div>
      <hr className="mx-auto my-24 block w-1/12 border-t-8 border-dotted border-gray-400" />
      <h1
        className={`details-heading mt-4 ${arialRoundedMTBold.variable} font-arialRoundedMTBold`}
      >
        {textContent.heading2}
      </h1>
      <div className="mt-8 flex flex-wrap justify-center gap-8 max-md:gap-6 sm:max-lg:justify-center sm:max-md:gap-8">
        <Card {...cardContent.card1} />
        <Card {...cardContent.card2} />
        <Card {...cardContent.card3} />
        <Card {...cardContent.card4} />
      </div>
      <div className="mt-24">
        <h3 className="my-4 text-center text-lg font-semibold uppercase">
          get early access
        </h3>
        <div className="flex rounded-xl bg-[#004AAD]">
          <Image
            src={waitlistImage}
            priority={false}
            alt="image"
            className="w-5/12"
          />
          <div className="flex w-7/12 items-center justify-center">
            <div className="w-2/3">
              <h1
                className={`${inter.variable} mb-5 text-left font-inter text-lg font-semibold text-white md:text-2xl lg:text-3xl`}
              >
                Get on the waiting list
              </h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
