import { ref } from "vue";
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
            await axios.post(`/auth/users`, payload);
            await getUsers();
        } catch (error) {
            console.log(error);
        } 
    }; 

    const updateUser = async (payload) => {    
        try {
            await axios.put(`/users/current`, payload);
            await getUsers();
        } catch (error) {
            console.log(error);
        } 
    }; 

    const destroyUser = async (uname) => {    
        try {
            await axios.delete(`/auth/users/${uname}`);
            await getUsers();
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