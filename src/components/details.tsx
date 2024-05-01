import Icon from "./icon";

// UI ELEMENTS
import { Input } from "@/components/ui/input";

import { cardContent, iconContent } from "@/static/details-content";

import Card from "./card";

// FONTS
import { arialRoundedMTBold } from "@/utils/fonts/fonts";

import { montserrat } from "@/utils/fonts/fonts";

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
        <h3 className="text-center text-lg font-semibold uppercase">
          get early access
        </h3>
        <div className="mx-auto mt-4 flex gap-3 rounded-md bg-gradient-to-r from-[#004AAD] from-60% via-[#2EEB31] to-[#004AAD] p-1 md:w-2/3 xl:w-1/2">
          <Input
            className="w-full border border-black"
            placeholder="Enter your email here"
          />
          <button
            className={`font-bold uppercase text-white transition duration-300 ease-in-out hover:bg-black hover:bg-opacity-20 max-sm:w-60 ${montserrat.variable} w-44 rounded-sm font-montserrat`}
          >
            join waitlist
          </button>
        </div>
      </div>
    </main>
  );
}
