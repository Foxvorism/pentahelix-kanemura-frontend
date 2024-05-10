import { ref } from "vue";
import useAxios from "./axios";

const useMenu = () => {
    const axios = useAxios();
    const menus = ref([]);

    const getMenus = async (category) => {
        try {
            const res = await axios.get(`/menus?kategori=${category}`);
            menus.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        menus,
        getMenus
    };
}

export default useMenu;