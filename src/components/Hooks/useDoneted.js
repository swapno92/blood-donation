import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const UseDoneted = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data:all_Doneted = [] } = useQuery({
    queryKey: ["doneted"],
    queryFn: async () => {
      const res = await axiosSecure.get("/doneted");
      return res.data;
    },
  });
  return [all_Doneted, refetch];
};

export default UseDoneted;
