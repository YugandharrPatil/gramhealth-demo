import Image, { StaticImageData } from "next/image";

type IconPropTypes = { imgSrc: StaticImageData; text: string };

export default function Icon({ imgSrc, text }: IconPropTypes) {
  return (
    <div className="flex w-48 flex-col items-center justify-start py-4 max-sm:w-36">
      <div className="relative inline-block h-40 w-40 rounded-full bg-black bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31] text-white max-sm:h-28 max-sm:w-28">
        <Image
          src={imgSrc}
          alt="fuck"
          className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2 max-sm:w-16"
        />
      </div>
      <h1 className="mx-auto mt-2 text-center text-xl font-semibold sm:text-2xl">
        {text}
      </h1>
    </div>
  );
}
