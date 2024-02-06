import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxiosSecure = () => {
    return axiosPublic()
};

export default useAxiosSecure;