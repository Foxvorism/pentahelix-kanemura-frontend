import { ref } from "vue";
import useAxios from "./axios";
import Swal from "sweetalert2";

const useMenu = () => {
    const axios = useAxios();
    const menus = ref([]);

    const getMenuById = async (id) => {
        try {
            const res = await axios.get(`/menus/${id}`);
            menus.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getMenusByCategory = async (category) => {
        try {
            const res = await axios.get(`/menus?kategori=${category}`);
            menus.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };

    const getSignatureMenus = async () => {
        try {
            const res = await axios.get(`/menus?signature=true`);
            menus.value = await res.data.data;
            console.log(menus.value);
        } catch (error) {
            console.log(error);
        }
    };

    const storeMenu = async (payload) => {
        try {
            const res = await axios.post(`/auth/menus`, payload);
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
                    title: "Menu baru berhasil ditambah!",
                });
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        } 
    }

    const destroyMenu = async (id, nama_menu) => {
        try {
            await axios.delete(`/auth/menus/${id}`);

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
            
            Toast.fire({
                icon: "success",
                title: nama_menu + " berhasil dihapus!",
            });
            setTimeout(function () {
                location.reload();
            }, 2000);
        } catch (error) {
            console.log(error);
        } 
    }

    return {
        menus,
        getMenuById,
        getMenusByCategory,
        getSignatureMenus,
        storeMenu,
        destroyMenu
    };
}

export default useMenu;