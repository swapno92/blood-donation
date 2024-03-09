import Posts from "@/components/Community/Posts/Posts";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
export const metadata = {
  title: "Drop Sync - Community",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

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
