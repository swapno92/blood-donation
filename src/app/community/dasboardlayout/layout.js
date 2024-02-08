import { Inter } from "next/font/google";
import Dashboard from "@/components/Community/Dashboard/Dashboard";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Drop Sync",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

export default function RootLayout({ children }) {
  return (
    <>
      <div className="flex">
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
        {children}
      </div>
    </>
  );
}
