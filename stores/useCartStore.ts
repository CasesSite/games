import { defineStore, storeToRefs } from 'pinia';

export const useCartStore = defineStore('carts', {
  state: () => ({
    carts: [] as any,
  }),
  actions: {
    addCart(item: any) {
      const existingCartItem = this.carts.find((cart: any) => cart.id === item.id);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
      } else {
        this.carts.push({ ...item, quantity: 1 });
      }
    },
    removeCart(item: any) {
      const existingCartItem = this.carts.find((cart: any) => cart.id === item.id);
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          existingCartItem.quantity -= 1;
        } else {
          this.carts = this.carts.filter((cart: any) => cart.id !== item.id);
        }
      }
    },
  },
  persist: true,
});

export const useCartStoreRefs = () => storeToRefs(useCartStore());
