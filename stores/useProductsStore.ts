import { defineStore, storeToRefs } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    attributesWithTerms: {} as Record<string, any>,
    attr: {} as Record<string, any>,
    categories: [] as any[],
    sizes: [] as any[],
    products: [] as any[],
  }),
  actions: {
    async getFilteredProducts(
      catId?: any,
      size?: any,
      color?: any,
      search?: string | null,
      orderby?: any,
      order?: any,
      catFromUrl?: any // добавляем параметр для категории из URL
    ) {
      const { $wooco } = useNuxtApp();
      try {
        let url = "/filter-products";
        
        // Проверяем, есть ли категория в URL
        if (catFromUrl) {
          url += `/categories/${catFromUrl}`;
        }

        const params: any = {};
        
        // Если категории из URL нет, проверяем catId из query
        if (!catFromUrl) {
          if (Array.isArray(catId) && catId.length > 0) {
            params.category = catId.join(",");
          } else if (catId) {
            params.category = catId;
          }
        }
        
        if (size) {
          params.size = String(size);
        }
        
        if (color) {
          params.color = String(color);
        }
        
        if (search) {
          params.search = search;
        }
        
        if (orderby) {
          params.orderby = orderby;
          params.order = order;
        }

        const response = await $wooco.get(url, { params });
        this.products = response.data.map((product: any) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          category: product.category,
          slug: product.slug,
          default_attributes: product.default_attributes,
        }));
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    },

    async fetchCategories() {
      const { $wooco } = useNuxtApp();
      try {
        const response = await $wooco.get("/products/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    },

    async fetchSizes() {
      const { $wooco } = useNuxtApp();
      try {
        const response = await $wooco.get("/products/attributes");
        const sizeAttribute = response.data.find(
          (attr: any) => attr.name.toLowerCase() === "size"
        );
        if (sizeAttribute) {
          const sizesResponse = await $wooco.get(
            `/products/attributes/${sizeAttribute.id}/terms`
          );
          this.sizes = sizesResponse.data;
        }
      } catch (error) {
        console.error("Failed to fetch sizes:", error);
      }
    },

    async fetchProducts() {
      const { $wooco } = useNuxtApp();
      try {
        const response = await $wooco.get("/products", {
          params: { per_page: 10 },
        });
        this.products = response.data;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    },

    async fetchAttr() {
      const { $wooco } = useNuxtApp();
      try {
        const attrMain = await $wooco.get("/products/attributes");
        const attr = attrMain.data;

        const termRequests = attr.map((attribute: any) => {
          return $wooco.get(`/products/attributes/${attribute.id}/terms`);
        });

        const termsResponses = await Promise.all(termRequests);
        const attributesWithTerms = attr.map(
          (attribute: any, index: number) => ({
            ...attribute,
            terms: termsResponses[index].data,
          })
        );

        this.attributesWithTerms = attributesWithTerms;
      } catch (error) {
        console.error("Failed to fetch attribute terms:", error);
      }
    },
  },
});

export const useProductStoreRefs = () => storeToRefs(useProductStore());
