import Campaings from "@/components/Community/Campaings/Campaings";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
export const metadata = {
  title: "Drop Sync - Campaign",
  description: "Drop Sync - Blood Donation Website Created by Binary Avengers",
};

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
