import { ref } from "vue";
// import { useCookies } from "@vueuse/integrations/useCookies";

import useAxios from "./axios";

const useAuth = () => {
    const user = ref("");
    const axios = useAxios();
    // const cookies = useCookies();

    const login = async (payload) => {    
        try {
            const res = await axios.post(`/auth/login`, payload);
            console.log(await res.data);
            // cookies.set("session-admin", await res.data);
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