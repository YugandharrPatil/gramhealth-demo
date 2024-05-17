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
    <div className="grad m-2 flex w-40 items-center bg-white p-4 sm:w-56 sm:p-6 xl:w-64">
      {/* min-[440px]:max-w-44 */}
      <div className="p-0">
        <Image src={imgSrc} alt="fuck" className="mx-auto max-md:w-10" />
        <h1
          className={`mt-3 text-sm font-bold sm:text-xl xl:text-2xl ${montserrat.variable} font-montserrat`}
        >
          {title}
        </h1>
        <p
          className={`mx-auto mt-4 text-xs sm:text-lg md:text-xl ${poppins.className} font-poppins`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
