import { Montserrat, Poppins } from "next/font/google";
import Image, { StaticImageData } from "next/image";

import { montserrat, poppins } from "../utils/fonts/fonts";

type CardPropTypes = {
  imgSrc: StaticImageData;
  title: string;
  body: string;
};

export default function Card({ imgSrc, title, body }: CardPropTypes) {
  return (
    <div className="max-w-36 rounded-md bg-gray-200 p-4 shadow-[0_5px_10px_0px_rgba(0,0,0,0.3)] min-[440px]:max-w-44 sm:max-w-64 sm:p-6 md:max-w-72">
      <Image src={imgSrc} alt="fuck" className="mx-auto max-md:w-10" />
      <h1
        className={`mt-3 font-bold sm:text-2xl ${montserrat.variable} font-montserrat`}
      >
        {title}
      </h1>
      <p
        className={`mx-auto mt-4 text-left text-xs sm:text-lg md:text-xl ${poppins.variable} font-poppins`}
      >
        {body}
      </p>
    </div>
  );
}
