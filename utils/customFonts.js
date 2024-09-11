import localFont from "next/font/local";

const Geist = localFont({
  src: [
    {
      path: "../fonts/GeistVF.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/GeistVF.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

export { Geist };
