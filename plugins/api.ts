import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const main = axios.create({
    baseURL: config.public.BASE_URL,
  });

  function addAuthInterceptor(axiosInstance: any) {
    axiosInstance.interceptors.request.use(
      (config: any) => {
        // if (user.value && user.value.token) {
        //   config.headers.Authorization = `Bearer ${user.value.token}`;
        // }
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );
  }

  addAuthInterceptor(main);

  return {
    provide: {
      main: main,
    },
  };
});
