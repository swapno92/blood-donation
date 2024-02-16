import { Inter } from "next/font/google";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Dashboard from "@/components/Community/Dashboard/Dashboard";

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
