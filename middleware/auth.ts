import { defineNuxtRouteMiddleware, useRouter, useCookie } from "#app";
import { useGlobalStore } from "~/stores/useGlobalStore";
import userService from "~/services/userService";

export default defineNuxtRouteMiddleware(async (to) => {
  const globalStore = useGlobalStore();
  const router = useRouter();
  const tokenCookie = useCookie("AccessToken");
  const { isAuthorizedUser } = useGlobalStoreRefs();

  if (to.path === "account/inventory" && isAuthorizedUser.value) {
    console.log(!isAuthorizedUser.value, value);
    return navigateTo("/not-authorized");
  }

  try {
    await userService.getSelf();
  } catch (error) {
    if (error.response?.status === 401) {
      handleUnauthorizedUser(globalStore, tokenCookie, router);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
});

function handleUnauthorizedUser(globalStore, tokenCookie, router) {
  tokenCookie.value = null;
  globalStore.setAuthorized(false);
  globalStore.setCurrentUser(null);

  return router.push("/not-authorized");
}
