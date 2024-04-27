import Image, { StaticImageData } from "next/image";

type IconPropTypes = { imgSrc: StaticImageData; text: string };

export default function Icon({ imgSrc, text }: IconPropTypes) {
  return (
    <div className="h-52 w-52 max-xl:m-6">
      <div className="relative inline-block h-40 w-40 rounded-full bg-black bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31] text-white">
        <Image
          src={imgSrc}
          alt="fuck"
          className="absolute left-1/2 top-1/2 w-24 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <p className="mx-auto text-center text-xl font-semibold md:text-2xl">
        {text}
      </p>
    </div>
  );
}
