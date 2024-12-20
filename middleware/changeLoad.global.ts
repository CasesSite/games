import { useGlobalStore, useGlobalStoreRefs } from "@/stores/useGlobalStore";
import { useRouter, useCookie, navigateTo } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  const globalStore = useGlobalStore();
  const router = useRouter();
  const tokenCookie = useCookie("AccessToken");
  const { isAuthorizedUser } = useGlobalStoreRefs();

  if (to.path === "/account/inventory" && !isAuthorizedUser.value) {
    return navigateTo("/not-authorized");
  }
  if (to.path === "/not-authorized" && isAuthorizedUser.value) {
    return navigateTo("/");
  }
});
