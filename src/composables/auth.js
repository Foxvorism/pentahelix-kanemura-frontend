import { ref } from "vue";
import dayjs from "dayjs";
import { useCookies } from '@vueuse/integrations/useCookies'

import useAxios from "./axios";

const useAuth = () => {
    const user = ref("");
    const axios = useAxios();
    const cookies = useCookies();

    const login = async (payload) => {    
        try {
            const res = await axios.post(`/auth/login`, payload);
            console.log(await res.data.data);
            const token = await res.data.data.token;
            const expired = new Date(dayjs().add(30, "d"));
            cookies.set("session-admin", token, {
                expires: expired,
            });
            // window.location.href = "/home";
        } catch (error) {
            console.log(error);
        } 
    };  

    return {
        user,
        login,
    };
}

export default useAuth;