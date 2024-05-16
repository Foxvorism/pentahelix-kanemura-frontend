import { ref } from "vue";
import useAxios from "./axios";

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
            const res = await axios.get(`/menus?siganture=true`);
            menus.value = await res.data.data;
            console.log(res.data.data);
            console.log(menus.value);
        } catch (error) {
            console.log(error);
        }
    };

    return {
        menus,
        getMenuById,
        getMenusByCategory,
        getSignatureMenus
    };
}

export default useMenu;