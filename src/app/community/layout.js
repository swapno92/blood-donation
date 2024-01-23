
import { Inter } from "next/font/google";
import ComNavbar from "@/components/Community/ComNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drop Sync",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ComNavbar/>
      {children}
    </>
  );
}
