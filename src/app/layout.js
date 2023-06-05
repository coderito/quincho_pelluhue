import Footer from "./components/Footer";
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
        <div className="lg:pt-8">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
