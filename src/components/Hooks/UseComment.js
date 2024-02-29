import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const UseComment = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: comments = [] } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/comments");
      return res.data;
    },
  });
  return [comments, refetch];
};

export default UseComment;
