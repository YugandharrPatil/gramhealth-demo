import Image, { StaticImageData } from "next/image";

type IconPropTypes = { link: StaticImageData; text: string };

export default function Icon({ link, text }: IconPropTypes) {
	return (
		<div className="">
			<div className="relative h-24 w-24 rounded-full inline-block bg-black text-white bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31]">
				<Image src={link} alt="fuck" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14" />
			</div>
			<p className="text-center font-semibold w-2/3 mx-auto">{text}</p>
		</div>
	);
}
