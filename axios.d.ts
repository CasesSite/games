import { AxiosInstance } from 'axios';

declare module '#app' {
  interface NuxtApp {
    $api1: AxiosInstance;
    $api2: AxiosInstance;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api1: AxiosInstance;
    $api2: AxiosInstance;
  }
}
