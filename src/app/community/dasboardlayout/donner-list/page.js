import DonnerList from "@/components/Community/Dashboard/DasboardLayout/DonnerList/DonnerList";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const page = () => {
  return (
   <PrivateRoute>
    <DonnerList></DonnerList>
   </PrivateRoute>
  );
};

export default page;
