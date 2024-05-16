import { ref } from "vue";
import useAxios from "./axios";

const useCategory = () => {
    const axios = useAxios();
    const categories = ref([]);

    const getCategories = async () => {
        try {
            const res = await axios.get(`/kategori`);
            categories.value = await res.data.data;
        } catch (error) {
            console.log(error);
        }
    };

    return {
        categories,
        getCategories
    };
}

export default useCategory;