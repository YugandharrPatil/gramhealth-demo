import { Montserrat, Poppins } from "next/font/google";
import Image, { StaticImageData } from "next/image";

const montserratbold = Montserrat({
	weight: "700",
	subsets: ["latin"],
});

const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
});

type CardPropTypes = {
	image: StaticImageData;
	title: string;
	body: string;
};

export default function Card({ image, title, body }: CardPropTypes) {
	return (
		<div className="bg-gray-200 shadow-[0_5px_10px_0px_rgba(0,0,0,0.3)] w-72 rounded-lg px-6 pt-8 pb-12 mt-12">
			<Image src={image} alt="fuck" className="mx-auto w-12" />
			<h3 className={`font-bold text-lg mt-3 ${montserratbold.className}`}>{title}</h3>
			<p className={`w-11/12 mx-auto mt-4 ${poppins.className}`}>{body}</p>
		</div>
	);
}
