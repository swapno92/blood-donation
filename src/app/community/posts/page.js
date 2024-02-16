import Posts from "@/components/Community/Posts/Posts";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
// import React from 'react';

const posts = () => {
  return (
    <div>
      <PrivateRoute>
        <Posts />
      </PrivateRoute>
    </div>
  );
};

export default posts;
