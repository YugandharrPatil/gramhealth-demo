import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserratSemibold = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="h-96 bg-[#00367F] px-2 xs:h-72 lg:h-60">
      <div className="flex h-full flex-col justify-between text-center text-white">
        <div className="">
          <h1 className="pt-12 text-4xl font-semibold">
            The mission is to Save live with medicine
          </h1>
          <p className="mx-auto mt-4 text-lg md:w-2/3">
            Be the pioneer in accessing medication within minutes, ensuring your
            health needs are addressed promptly and efficiently.
          </p>
        </div>
        <div className="mx-auto mb-4 flex w-fit">
          <p
            className={`mr-2 font-semibold uppercase ${montserratSemibold.className}`}
          >
            Connect with Us
          </p>
          <Link href="#">
            <FontAwesomeIcon
              icon={faFacebook}
              className="mb-1 mr-4 inline w-5 text-white hover:text-[#1877F2]"
            />
          </Link>
          <Link href="#">
            <FontAwesomeIcon
              icon={faInstagram}
              className="mb-1 mr-4 inline w-5 text-white hover:text-[#C13584]"
            />
          </Link>
          <Link href="#">
            <FontAwesomeIcon
              icon={faTwitter}
              className="mb-1 mr-4 inline w-5 text-white hover:text-[#1DA1F2]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
