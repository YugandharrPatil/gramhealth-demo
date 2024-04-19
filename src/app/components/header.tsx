import backgroundImage from "../../../public/background.png";

import { Montserrat, Poppins } from "next/font/google";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const montserratBold = Montserrat({
	weight: ["700"],
	subsets: ["latin"],
});

const montserratSemibold = Montserrat({
	weight: ["600"],
	subsets: ["latin"],
});

const poppinsBold = Poppins({
	weight: "400",
	subsets: ["latin"],
});

const poppinsSemibold = Poppins({
	weight: "600",
	subsets: ["latin"],
});

export default function Header() {
	return (
		<header>
			<div
				className="h-screen lg:h-screen w-full bg-no-repeat bg-top bg-cover bg-black text-center"
				style={{
					backgroundImage: `url(${backgroundImage.src})`,
				}}
			>
				<div className="pt-28">
					<h1
						className={`${montserratBold.className} text-5xl sm:text-7xl md:text-8xl bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31] inline-block text-transparent bg-clip-text`}
					>
						GramHealth
					</h1>
					<h3 className={`mt-3 ${montserratSemibold.className} text-3xl uppercase text-white`}>30 minute medicine delivery</h3>
					<h5 className={`mt-12 ${montserratSemibold.className} text-2xl uppercase text-white`}>coming soon</h5>
					<div className={`mt-3 border-2 text-2xl border-white text-white w-fit mx-auto py-2 px-24 ${poppinsBold.className}`}>
						<FontAwesomeIcon icon={faLocationDot} className="w-5 mb-1 mr-4 inline text-white" />
						Kolkata
					</div>
					<p className="mt-20 font-semibold text-white text-2xl sm:text-3xl max-w-2xl mx-auto">
						15 lakh lives could be saved every year in India by simply delivering medicines on time
					</p>
					<p className={`mt-2 text-white ${poppinsSemibold.className}`}>- The Public Health Foundation of India in Research</p>
				</div>
			</div>
		</header>
	);
}
