import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const UsePosts = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: post = [] } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosSecure.get("/posts");
      return res.data;
    },
  });
  return [post, refetch];
};

export default UsePosts;
