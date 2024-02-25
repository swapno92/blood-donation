import UserUpdate from "@/components/Community/Dashboard/DasboardLayout/admin/UserUpdate/UserUpdate";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const page = () => {
  return (
    <PrivateRoute>
      <div>
        <UserUpdate />
      </div>
    </PrivateRoute>
  );
};

export default page;
