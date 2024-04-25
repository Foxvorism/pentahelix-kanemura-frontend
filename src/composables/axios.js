import axios from "axios";

const useAxios = (path = "") => {
    const axiosClient = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL + path,
    });

    return axiosClient;
};

export default useAxios;