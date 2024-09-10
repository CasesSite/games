import { defineNuxtRouteMiddleware, useNuxtApp } from '#app';
import { useGlobalStore } from '~/stores/useGlobalStore';

export default defineNuxtRouteMiddleware(() => {
  const globalStore = useGlobalStore();
  
  // Вызов метода changeLoad
  globalStore.changeLoad();
});
