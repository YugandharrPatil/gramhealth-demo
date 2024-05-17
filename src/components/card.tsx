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
    <div className="grad flex max-w-36 items-center bg-white min-[440px]:max-w-44 sm:max-w-64 sm:p-6 md:max-w-72">
      <div className="p-0">
        <Image src={imgSrc} alt="fuck" className="mx-auto max-md:w-10" />
        <h1
          className={`mt-3 font-bold sm:text-2xl ${montserrat.variable} font-montserrat`}
        >
          {title}
        </h1>
        <p
          className={`mx-auto mt-4 text-xs sm:text-lg md:text-xl ${poppins.variable} font-poppins`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
