// stores/counter.js
import { defineStore } from 'pinia'
import type { Product, CartDetail } from '@/model/Types'
export const useCartStore = defineStore('cart', {
    state: () => ({
        //! Before 
        // details: <Array<CartDetail>>[]
        
        //* After
        details: [] as CartDetail[]
    }),
    getters: {
        cartItemsCount: (state) => {
            let count = 0;
            state.details.forEach(detail => {
                count += detail.quantity;
            });
            return count;
        },
        totalAmount: (state) => {
            let total = 0;
            state.details.forEach(d => {
                total += d.product.price * d.quantity;
            });
            return total;
        }
    },
    actions: {
        addProduct(product: Product) {
            const detailFound = this.details.find(d => d.product.id === product.id);
            if(detailFound){
                detailFound.quantity += 1;
            }else{
                this.details.push({
                    product,
                    quantity: 1
                });
            }
        },
        //* Elimina el producto 
        deleteProducts(productId: number){
            const index = this.details.findIndex(d => d.product.id === productId);
            this.details.splice(index, 1)

        },
        //* Incrementa la cantidad del productos en Cart
        increment(productId: number){
            const detailFound = this.details.find(d => d.product.id === productId);
            if(detailFound){
                detailFound.quantity += 1;
            }
        },
        //* Disminuye la cantidad de los productos en el carrito, al llegar a 0 lo elimina
        decrement(productId: number){
            const detailFound = this.details.find(d => d.product.id === productId);
            if(detailFound){
                detailFound.quantity -= 1;
                
                //* Validación para eliminar producto si llega a 0
                if(detailFound.quantity === 0){
                    this.deleteProducts(productId);
                }
            }

        }
    },
})