import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const UseLikes = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: allLikes = [] } = useQuery({
    queryKey: ["allLikes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/likes");
      return res.data;
    },
  });
  return [allLikes, refetch];
};

export default UseLikes;