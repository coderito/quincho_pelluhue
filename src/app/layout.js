import Navbar from "./components/Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Quincho Pelluhue | Home",
  description: "Restaurant  y cabañas Quincho Pelluhue",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        <div className="pt-28 md:pt-0">{children}</div>
      </body>
    </html>
  );
}
