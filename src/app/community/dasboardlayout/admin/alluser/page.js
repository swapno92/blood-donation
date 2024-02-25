
import AllUser from "@/components/Community/Dashboard/DasboardLayout/admin/AllUser/AllUser";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const page = () => {




  return (
    <PrivateRoute>
      <div>
        <AllUser />
      </div>
    </PrivateRoute>
  );
};

export default page;
