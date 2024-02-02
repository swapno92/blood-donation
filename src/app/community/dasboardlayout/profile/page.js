
import React from "react";
import UserInfo from "@/components/Community/Dashboard/DasboardLayout/UserInfo/UserInfo";

const Profile = () => {
  return (
    <div className="max-w-full pt-4 pr-5 rounded-md flex  h-auto lg:h-screen flex-wrap mx-auto  ">
      <div>
        <UserInfo></UserInfo>
      </div>
    </div>
  );
};
export default Profile;
