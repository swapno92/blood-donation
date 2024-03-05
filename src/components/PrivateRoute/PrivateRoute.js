"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/provider/AuthProvider";
import { useContext } from "react";
import Lottie from "lottie-react";
import loadingAnimation from '../../../public/animations/heart.json';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="w-full  flex items-center justify-center">
        <Lottie animationData={loadingAnimation} />
      </div>
    );
  }
  if (user) {
    return children;
  }
  const router = useRouter();
  return router.push("/login");
};

export default PrivateRoute;