import axios from "axios";

const axiosSecure = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },

    baseURL: 'https://blood-donation-server-binary-avanger.vercel.app'
})

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;