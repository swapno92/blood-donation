import Payment from '@/components/Payment/Payments';
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute';

const page = () => {
  return (
    <div>
      <PrivateRoute>
        <Payment />
      </PrivateRoute>
    </div>
  );
};

export default page;