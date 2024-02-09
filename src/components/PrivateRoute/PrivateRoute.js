"use client";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/provider/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (user) {
    return children;
  }
  const router = useRouter();
  return router.push("/login");
};

export default PrivateRoute;