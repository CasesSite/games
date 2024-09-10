import { defineStore, storeToRefs } from 'pinia';
import { useNuxtApp } from '#app';

export const useGlobalStore = defineStore('main', {
    state: () => ({
      load: false as boolean,
    categories: [] as any,
    contacts: null as any,
    showAllProducts: false as boolean,
    main: {
      home: {
        hero_title: '',
        subtitle: '',
        main_img: '',
        hit_title: '',
        hit_products: [] as any[],
        best_title: '',
        best_products: [] as any[],
        cat_title: '',
        cat_list: [] as any[],
        about_title: '',
        about_txt: '',
        about_img: ''
      }
    } as any,
  }),
  actions: {
    async getHome() {
      this.load = true; // Устанавливаем флаг загрузки в true
      const { $main } = useNuxtApp();
      
      try {
          // Получаем контент страницы
          const response = await $main.get("/pages/16?acf_format=standard");
          const content = response.data?.acf?.content;
          
          // Параллельное получение товаров и категорий
          const [hitProducts, bestProducts, categories] = await Promise.all([
              this.fetchProductsByIds(content.hit_products),
              this.fetchProductsByIds(content.best_products),
              this.fetchCategoriesByIds(content.cat_list)
          ]);
      
          // Присваиваем полученные данные
          this.main.home = {
              ...content,
              hit_products: hitProducts,
              best_products: bestProducts,
              cat_list: categories,
          };
      } catch (error) {
          console.error("Error loading home data:", error);
          // Можете добавить логику обработки ошибок здесь
      } finally {
          this.load = false; // Устанавливаем флаг загрузки в false независимо от результата
      }
  },  
        
  async fetchProductsByIds(ids: number[]) {
    const { $wooco } = useNuxtApp();
    const response = await $wooco.get(`/products`, {
        params: {
            include: ids.join(','),
        },
    });
    const products = response.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0]?.src,
        category: product.categories[0]?.id,
        slug: product.slug,
        default_attributes: product.default_attributes,
    }));
    return products;
},
        
        async getOptions() {
          const { $acf } = useNuxtApp();
          const response = await $acf.get("/options/options");
            this.main.options = response.data.acf;
             
        },
        async fetchCategoriesByIds(ids: number[]) {
          const { $wooco } = useNuxtApp();
          const response = await $wooco.get(`/products/categories`, {
              params: {
                  include: ids.join(','),
              },
          });
          const categories = response.data.map((category: any) => ({
              id: category.id,
              name: category.name,
              image: category.image,
          }));
          return categories;
      },      
        async getCategories() {
            const { $wooco } = useNuxtApp();
            const response = await $wooco.get('/products/categories/');
            const filteredCategories = response.data.filter((category: any) => category.id !== 15);

            this.categories = filteredCategories.map((category: any) => ({
                image: category.image,
                id: category.id,
                name: category.name
            }));
        }, 
        async changeLoad() {
            this.load = !this.load
        },
        async  getAbout() {
            const { $main } = useNuxtApp();
            try {
                const response = await $main.get("/pages/212?acf_format=standard");
                this.contacts = response.data.acf;
            } catch (error) {
            } finally {
                this.load = false
            }
        }
  },
  persist: true,
});

export const useGlobalStoreRefs = () => storeToRefs(useGlobalStore());
