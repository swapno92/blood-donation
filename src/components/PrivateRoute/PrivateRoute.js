"use client";

import { useRouter } from "next/navigation";
import { AuthContext } from "@/components/provider/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  }
  const router = useRouter();
  return router.push("/login");
};

export default PrivateRoute;
