import { Inter } from "next/font/google";
import Dashboard from "@/components/Community/Dashboard/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drop Sync",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex h-full">
        <Dashboard />
        {children}
      </div>
    </>
  );
}
