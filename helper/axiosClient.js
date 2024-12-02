import axios from "axios";
import { useGlobalStore } from "~/stores/useGlobalStore";
import { useRouter, useCookie } from "#app";

const axiosInstance = axios.create({
  baseURL: "https://dev.24cases.ru/v1/",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const globalStore = useGlobalStore();
      const router = useRouter();
      const tokenCookie = useCookie("AccessToken");

      tokenCookie.value = null;
      globalStore.setAuthorized(false);
      globalStore.setCurrentUser(null);

      router.push("/not-authorized");
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
