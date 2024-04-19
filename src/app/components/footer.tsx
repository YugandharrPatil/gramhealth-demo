import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Montserrat } from "next/font/google";

const montserratSemibold = Montserrat({
	weight: ["600"],
	subsets: ["latin"],
});

export default function Footer() {
	return (
		<div className="bg-[#00367F]">
			<div className="h-80 text-center text-white py-4 flex flex-col justify-between">
				<div className="">
					<h1 className="pt-12 text-4xl font-semibold">The mission is to Save live with medicine</h1>
					<p className="mt-4 md:w-2/3 text-lg mx-auto">
						Be the pioneer in accessing medication within minutes, ensuring your health needs are addressed promptly and efficiently.
					</p>
				</div>
				<div className="flex w-fit mx-auto">
					<p className={`mr-2 font-semibold uppercase ${montserratSemibold.className}`}>Connect with Us</p>
					<FontAwesomeIcon icon={faFacebook} className="w-5 mb-1 mr-4 inline text-white" />
					<FontAwesomeIcon icon={faInstagram} className="w-5 mb-1 mr-4 inline text-white" />
					<FontAwesomeIcon icon={faTwitter} className="w-5 mb-1 mr-4 inline text-white" />
				</div>
			</div>
		</div>
	);
}
