import React from "react";
import UserInfo from "@/components/Community/Dashboard/DasboardLayout/UserInfo/UserInfo";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const Profile = () => {
  return (
    <div className="max-w-full pt-4 pr-5 rounded-md flex  h-auto lg:h-screen flex-wrap mx-auto  ">
      <div>
        <PrivateRoute>
          {" "}
          <UserInfo></UserInfo>
        </PrivateRoute>
      </div>
    </div>
  );
};
export default Profile;
