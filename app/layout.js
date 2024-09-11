import "./globals.css";
import { Geist } from "../utils/customFonts";

export const metadata = {
  title: "Infnite Text Move On Scroll",
  description: "Infinite Text Move on Scroll with Next.js and GSAP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Geist.className} antialiased`}>{children}</body>
    </html>
  );
}
