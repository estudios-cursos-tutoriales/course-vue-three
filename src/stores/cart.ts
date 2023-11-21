// stores/counter.js
import { defineStore } from 'pinia'
import type { CartDetail } from '@/model/Types'

export const useCartStore = defineStore('cart', {
  state: () => ({
    details: <Array<CartDetail>>[]
  }),
  getters: {

  },
  actions: {
    AddProduct(productId: number) {
        const detailFound = this.details.find(d => d.productId === productId);
        if(detailFound){
            detailFound.quantity += 1;
        }else{
            this.details.push({
                productId,
                quantity: 1
            });

        }
    }
  },
})