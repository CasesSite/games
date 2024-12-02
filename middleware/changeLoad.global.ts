import { defineNuxtRouteMiddleware } from "#app";
import { useGlobalStore } from "~/stores/useGlobalStore";

export default defineNuxtRouteMiddleware(async (to) => {
  const globalStore = useGlobalStore();

  globalStore.checkAuthorization();

  if (to.path === "/account/inventory" && !globalStore.isAuthorizedUser) {
    return navigateTo("/not-authorized");
  }
});
