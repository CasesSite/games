import { defineNuxtRouteMiddleware, useNuxtApp } from "#app";
import { useGlobalStore, useGlobalStoreRefs } from "~/stores/useGlobalStore";

export default defineNuxtRouteMiddleware(() => {
  const { load } = useGlobalStoreRefs();
});
