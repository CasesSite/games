import { defineStore, storeToRefs } from 'pinia';


export const useLikeStore = defineStore('likes', {
  state: () => ({
    likes: [] as any,
  }),
  actions: {
    addLike(item: any) {
      if (!this.likes.find((like: any) => like.id === item.id)) {
        this.likes.push(item);
      }
    },
    removeLike(item: any) {
      this.likes = this.likes.filter((like: any) => like.id !== item.id);
    },
  },
 persist: true,
});

export const useLikeStoreRefs = () => storeToRefs(useLikeStore());
