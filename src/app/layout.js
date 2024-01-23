import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer/Footer2";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drop Sync",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
        <Footer2></Footer2>
      </body>
    </html>
  );
}
