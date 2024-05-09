import { ref } from "vue";
import { useCookies } from '@vueuse/integrations/useCookies'

import dayjs from "dayjs";
import useAxios from "./axios";

const useUser = () => {
    const axios = useAxios();
    const cookies = useCookies();

    const users = ref([]);

    const getUsers = async () => {
        try {
            const res = await axios.get(`/auth/users`);
            users.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };
    
    const login = async (payload) => {    
        try {
            const res = await axios.post(`/login`, payload);
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
        users,
        getUsers,
    };
}

export default useUser;