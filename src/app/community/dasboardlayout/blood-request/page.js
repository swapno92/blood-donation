import DonnerRequest from "@/components/Community/Dashboard/DasboardLayout/DonnerRequest/DonnerRequest";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const bloodRequest = () => {
  return (
    <div>
        <PrivateRoute><DonnerRequest></DonnerRequest></PrivateRoute>
    </div>
  );
};
export default bloodRequest ;