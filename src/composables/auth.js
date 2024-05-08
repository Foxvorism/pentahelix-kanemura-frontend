import { ref } from "vue";
import { useCookies } from '@vueuse/integrations/useCookies'

import dayjs from "dayjs";
import useAxios from "./axios";

const useAuth = () => {
    const axios = useAxios();
    const cookies = useCookies();

    const detail_user = ref([]);

    const getUserInfo = async () => {
        try {
            const res = await axios.get(`/users/current`);
            detail_user.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };
    
    const login = async (payload) => {    
        try {
            const res = await axios.post(`/auth/login`, payload);
            console.log(await res.data.data);
            const token = await res.data.data.token;
            const expired = new Date(dayjs().add(30, "d"));
            cookies.set("session-admin", token, {
                expires: expired,
            });
            window.location.href = "/admin-dashboard/user";
        } catch (error) {
            console.log(error);
        } 
    };  

    return {
        detail_user,
        getUserInfo,
        login,
    };
}

export default useAuth;