import backgroundImage from "../../public/background.png";

import { arialRoundedMTBold, montserrat, poppins } from "../utils/fonts/fonts";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const textContent = {
  heading: "GramHealth",
  subHeading: "30 minute medicine delivery",
  soon: "coming soon",
  location: "Kolkata",
  tagLine:
    "15 lakh lives could be saved every year in India by simply delivering medicines on time",
  by: "- The Public Health Foundation of India in Research",
};

export default function Header() {
  return (
    <header
      className="h-screen w-full bg-black bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h1
          className={`${montserrat.variable} inline-block bg-gradient-to-r from-[#004AAD] from-30% to-[#2EEB31] bg-clip-text font-montserrat text-5xl font-bold text-transparent xs:text-6xl sm:text-7xl lg:text-8xl xl:text-8xl 2xl:text-10xl`}
        >
          {textContent.heading}
        </h1>
        <h2
          className={`mt-3 ${montserrat.variable} font-montserrat text-xl font-semibold uppercase text-white md:text-2xl lg:text-3xl 2xl:text-5xl`}
        >
          {textContent.subHeading}
        </h2>
        <h3
          className={`mt-8 xs:mt-12 ${poppins.variable} font-poppins text-lg font-semibold uppercase text-white xs:text-2xl 2xl:text-4xl`}
        >
          {textContent.soon}
        </h3>
        <div
          className={`mx-auto mt-2 w-fit border-2 border-white px-10 py-1 text-lg text-white xs:mt-5 xs:px-24 xs:py-2 xs:text-2xl 2xl:text-4xl ${poppins.variable} font-poppins`}
        >
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mb-1 mr-3 inline w-4 text-white xs:w-5"
          />
          {textContent.location}
        </div>
        <p
          className={`${arialRoundedMTBold.className} text-md mx-auto mt-8 max-w-5xl px-2 text-center font-semibold text-white xs:mt-28 xs:text-2xl sm:text-3xl 2xl:text-5xl`}
        >
          {textContent.tagLine}
        </p>
        <p
          className={`mt-2 text-white xs:mt-6 ${poppins.variable} px-2 font-poppins text-lg font-semibold sm:text-xl 2xl:text-3xl`}
        >
          {textContent.by}
        </p>
      </div>
    </header>
  );
}
