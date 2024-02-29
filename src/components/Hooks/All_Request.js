import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const All_Request = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: all_request = [] } = useQuery({
    queryKey: ["all_request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requests");
      refetch();
      return res.data;
    },
  });
  return [all_request, refetch];
};

export default All_Request;
