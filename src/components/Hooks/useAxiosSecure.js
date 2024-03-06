import axios from "axios";

const axiosSecure = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },

    baseURL: 'http://localhost:5000'
})

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;