import axios from "axios";
import { useGlobalStore } from "~/stores/useGlobalStore";
import { useRouter, useCookie } from "#app";

const axiosInstance = axios.create({
  baseURL: "https://dev.24cases.ru/v1/",
  withCredentials: true,
});

let isRefreshing = false;
let subscribers = [];

const subscribeTokenRefresh = (callback) => {
  subscribers.push(callback);
};

const onRrefreshed = (token) => {
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const globalStore = useGlobalStore();
    const router = useRouter();
    const accessTokenCookie = useCookie("AccessToken");
    const refreshTokenCookie = useCookie("RefreshToken");

    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          subscribeTokenRefresh((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const response = await axiosInstance.post("/auth/refresh", {
          refreshToken: refreshTokenCookie.value,
        });

        const { accessToken } = response.data;

        accessTokenCookie.value = accessToken;

        onRrefreshed(accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        globalStore.setAuthorized(false);
        globalStore.setCurrentUser(null);

        accessTokenCookie.value = null;
        refreshTokenCookie.value = null;

        router.push("/not-authorized");
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use((config) => {
  const accessTokenCookie = useCookie("AccessToken");
  if (accessTokenCookie.value) {
    config.headers.Authorization = `Bearer ${accessTokenCookie.value}`;
  }
  return config;
});

export default axiosInstance;
