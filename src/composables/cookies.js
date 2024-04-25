import { useCookies } from "@vueuse/integrations/useCookies";
const cookies = useCookies();

const useSession = () => {
    const sesi = cookies.get("session-admin");
    return { sesi };
};

export default useSession;