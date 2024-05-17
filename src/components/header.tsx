import backgroundImage from "../../public/background.png";

import { arialRoundedMTBold, montserrat, poppins } from "@/utils/fonts/fonts";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TEXT_CONTENT = {
  heading: "GramHealth.",
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
      className="my-auto h-screen w-full bg-black bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
      }}
    >
      <div className="container flex h-full flex-col items-center justify-center px-2">
        <h1
          className={`${montserrat.variable} heading-gradient font-montserrat text-3xl font-bold min-[400px]:text-6xl sm:text-7xl lg:text-8xl 3xl:text-9xl`}
        >
          {TEXT_CONTENT.heading}
        </h1>
        <h2
          className={`mt-3 text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl ${montserrat.variable} font-montserrat font-semibold uppercase text-white`}
        >
          {TEXT_CONTENT.subHeading}
        </h2>
        <h3
          className={`mt-12 ${poppins.className} font-poppins text-xl font-semibold uppercase text-white sm:text-2xl lg:text-3xl 3xl:text-4xl`}
        >
          {TEXT_CONTENT.soon}
        </h3>
        <div
          className={`relative mx-auto mt-5 rounded-lg border-2 border-white px-28 py-3 text-center text-2xl text-white 3xl:text-4xl ${poppins.className} font-poppins`}
        >
          <FontAwesomeIcon
            icon={faLocationDot}
            className="absolute left-6 inline w-5 text-white max-sm:top-4 sm:w-6 3xl:top-4"
          />
          {TEXT_CONTENT.location}
        </div>
        <p
          className={`${arialRoundedMTBold.className} text-md mx-auto mt-28 max-w-5xl text-center text-xl font-semibold text-white sm:text-2xl lg:text-3xl 3xl:text-4xl`}
        >
          {TEXT_CONTENT.tagLine}
        </p>
        <p
          className={`mt-6 text-white ${poppins.className} px-2 text-center font-poppins text-lg font-semibold sm:text-xl 3xl:text-3xl`}
        >
          {TEXT_CONTENT.by}
        </p>
      </div>
    </header>
  );
}
