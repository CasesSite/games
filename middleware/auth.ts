import { defineNuxtRouteMiddleware, useRouter } from "#app";
import { useGlobalStore } from "~/stores/useGlobalStore";
import { useUserService } from "~/services/userService"; // Ensure you have this implemented
import { useCookie } from "#app";

export default defineNuxtRouteMiddleware(async (to) => {
  const globalStore = useGlobalStore();
  const router = useRouter();
  const tokenCookie = useCookie("AccessToken");

  if (globalStore.isAuthorized) {
    return;
  }

  try {
    const userService = useUserService();
    await userService.getSelf();
  } catch (error) {
    if (error.response?.status === 401) {
      tokenCookie.value = null;
      globalStore.setAuthorized(false);
      globalStore.setCurrentUser(null);

      return router.push("/not-authorized");
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
});
