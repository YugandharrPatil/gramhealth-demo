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
    <div className="m-4 w-72 rounded-lg bg-gray-200 px-6 py-8 shadow-[0_5px_10px_0px_rgba(0,0,0,0.3)]">
      <Image src={imgSrc} alt="fuck" className="mx-auto w-14" />
      <h1
        className={`mt-3 text-2xl font-bold ${montserrat.variable} font-montserrat`}
      >
        {title}
      </h1>
      <p className={`mx-auto mt-4 text-xl ${poppins.variable} font-poppins`}>
        {body}
      </p>
    </div>
  );
}
