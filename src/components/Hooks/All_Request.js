import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const All_Request = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: allRequest = [] } = useQuery({
    queryKey: ["allRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requests");
      return res.data;
    },
  });
  return [allRequest, refetch];
};

export default All_Request;
