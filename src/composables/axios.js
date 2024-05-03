import axios from "axios";
import { useCookies } from '@vueuse/integrations/useCookies'

const useAxios = (path = "") => {
    const cookies = useCookies();
    const token = cookies.get("session-admin");
    console.log(token);

    const axiosClient = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL + path,
        headers: {
            Authorization: `X-API-TOKEN ${token}`
        }
    });

    return axiosClient;
};

export default useAxios;