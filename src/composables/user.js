import { ref } from "vue";
import Swal from "sweetalert2";
import useAxios from "./axios";

const useUser = () => {
    const axios = useAxios();
    const users = ref([]);

    const getUsers = async () => {
        try {
            const res = await axios.get(`/auth/users`);
            users.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };
    
    const storeUser = async (payload) => {    
        try {
            const res = await axios.post(`/auth/users`, payload);
            if (res.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                
                Toast.fire({
                    icon: "success",
                    title: "User baru berhasil dibuat!",
                });
                    setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        } 
    }; 

    const updateUser = async (payload) => {    
        try {
            const res = await axios.put(`/users/current`, payload);
            if (res.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                
                Toast.fire({
                    icon: "success",
                    title: "Akun anda berhasil di update!",
                });
                    setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        } 
    }; 

    const destroyUser = async (uname) => {    
        try {
            const res = await axios.delete(`/auth/users/${uname}`);
            if (res.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
    
                Toast.fire({
                    icon: "success",
                    title: "Akun anda berhasil dihapus!",
                });
                router.push({ name: 'auth'})
                setTimeout(function(){
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        } 
    };  

    return {
        users,
        getUsers,
        storeUser,
        updateUser,
        destroyUser
    };
}

export default useUser;