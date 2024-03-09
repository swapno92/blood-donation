import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const UseRequest = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: all_Request = [] } = useQuery({
    queryKey: ["request"],
    queryFn: async () => {
      const res = await axiosSecure.get("/requests");
      return res.data;
    },
  });
  return [all_Request, refetch];
};

export default UseRequest;
