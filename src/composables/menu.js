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

    const updateMenuData = async (id, menu_name, payload) => {
        try {
            const res1 = await axios.put(`/auth/menus/${id}`, payload);
            if (res1.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                
                Toast.fire({
                    icon: "success",
                    title: menu_name + " berhasil diubah!",
                });
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
        } catch (error) {
            console.log(error);
        } 
    }

    const updateMenuImg = async (menu_name, payload) => {
        try {
            const res1 = await axios.post(`/auth/image/fileSystem`, payload);
            if (res1.status == 200) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                
                Toast.fire({
                    icon: "success",
                    title: menu_name + " berhasil diubah!",
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
            const res = await axios.delete(`/auth/menus/${id}`);
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
                    title: nama_menu + " berhasil dihapus!",
                });
                setTimeout(function () {
                    location.reload();
                }, 2000);
            }
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
        updateMenuData,
        updateMenuImg,
        destroyMenu
    };
}

export default useMenu;