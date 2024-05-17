import { Inter, Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const arialRoundedMTBold = localFont({
  src: "./arialroundedmtbold.ttf",
  variable: "--font-arialRoundedMTBold",
});
