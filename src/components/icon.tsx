import Image, { StaticImageData } from "next/image";

type IconPropTypes = { imgSrc: StaticImageData; text: string };

export default function Icon({ imgSrc, text }: IconPropTypes) {
  return (
    <div className="m-3 flex w-48 flex-col items-center justify-start py-4 max-sm:w-36">
      <div className="bg-custom-gradient relative inline-block h-28 w-28 rounded-full text-white md:h-36 md:w-36 xl:h-40 xl:w-40">
        {/* bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31] */}
        <Image
          src={imgSrc}
          alt={text}
          className="absolute left-1/2 top-1/2 w-20 -translate-x-1/2 -translate-y-1/2 md:w-28 xl:w-32"
        />
      </div>
      <h1 className="mx-auto mt-2 text-center text-xl font-semibold sm:text-2xl">
        {text}
      </h1>
    </div>
  );
}
