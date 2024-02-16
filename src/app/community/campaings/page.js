import Campaings from "@/components/Community/Campaings/Campaings";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";

const campaingPage = () => {
  return (
    <div>
      <PrivateRoute>
        <Campaings></Campaings>
      </PrivateRoute>
    </div>
  );
};

export default campaingPage;
