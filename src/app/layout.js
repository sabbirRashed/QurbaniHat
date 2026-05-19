import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
})


export const metadata = {
  title: "QurbaniHat – Livestock Booking Platform",
  description: "A modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col  ${poppins.className}`}>
        <Navbar></Navbar>
        <main className="">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
