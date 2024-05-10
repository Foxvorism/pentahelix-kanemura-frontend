import { ref } from "vue";
import { useCookies } from '@vueuse/integrations/useCookies'

import dayjs from "dayjs";
import Swal from "sweetalert2";
import useAxios from "./axios";
import router from "@/router";

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
            const res = await axios.post(`/login`, payload);
            const token = await res.data.data.token;
            const expired = new Date(dayjs().add(30, "d"));
            cookies.set("session-admin", token, {
                expires: expired,
            });
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
    
            Toast.fire({
                icon: "success",
                title: "Login Berhasil!",
            });
            router.push({ name: 'ad-user'})
            setTimeout(function(){
                location.reload();
            }, 3000);
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