import Image, { StaticImageData } from "next/image";

type IconPropTypes = { imgSrc: StaticImageData; text: string };

export default function Icon({ imgSrc, text }: IconPropTypes) {
  return (
    <div className="m-3 flex w-48 flex-col items-center justify-start py-4 max-sm:w-36">
      <div className="relative inline-block h-28 w-28 rounded-full bg-black bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31] text-white md:h-36 md:w-36 xl:h-40 xl:w-40">
        <Image
          src={imgSrc}
          alt={text}
          className="absolute left-1/2 top-1/2 w-16 -translate-x-1/2 -translate-y-1/2 max-sm:w-16 md:w-20 xl:w-24"
        />
      </div>
      <h1 className="mx-auto mt-2 text-center text-xl font-semibold sm:text-2xl">
        {text}
      </h1>
    </div>
  );
}
