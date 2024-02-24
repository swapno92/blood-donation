import axios from "axios";

export const axiosPublic = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },

    baseURL: 'https://blood-donation-server-binary-avanger.vercel.app/'
})

const useAxiosSecure = () => {
    return axiosPublic()
};

export default useAxiosSecure;