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

    const validationLogin = async () => {
        try {
            const token = cookies.get("session-admin")
            const res = await axios.get(`/users/current`);
            if (res.status == 200 || !token ) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
        
                Toast.fire({
                    icon: "error",
                    title: "Anda harus logout terlebih dahulu!",
                });
                router.push({ name: 'ad-user'})
                setTimeout(function(){
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const validationDashboard = async () => {
        try {
            const res = await axios.get(`/users/current`);
        } catch (error) {
            console.log(error.response.status);
            if (error.response.status != 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
        
                Toast.fire({
                    icon: "error",
                    title: "Session anda telah habis, silahkan login kembali!",
                });
                router.push({ name: 'auth'})
                setTimeout(function(){
                    location.reload();
                }, 2000);
            }
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
            }, 2000);
        } catch (error) {
            if (error.response.status == 400) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
        
                Toast.fire({
                    icon: "error",
                    title: "Username atau Password yang dimasukan salah!",
                });
            }
        } 
    };  

    return {
        detail_user,
        getUserInfo,
        validationLogin,
        validationDashboard,
        login,
    };
}

export default useAuth;