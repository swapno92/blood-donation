
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./useAxiosSecure";

const UseCampaign = () => {
  const axiosSecure = UseAxiosSecure();
  const {refetch, data: campaign = [] } = useQuery({
    queryKey: ["campaign"],
    queryFn: async () => {
        const res =  await axiosSecure.get('/campaign')
        return res.data;
        
    },
    
  });
  return [campaign, refetch];

};

export default UseCampaign;
