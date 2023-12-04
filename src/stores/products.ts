import { defineStore } from "pinia";
import type { Product } from "@/model/Types";

export const useProductsStore = defineStore('products', {
    state: () => ({
        // Casting
        // products: <Array<Product>> [
        //     {name: 'Silla', price: 56, id:3},
        //     {name: 'Monitor', price: 450, id:7},
        //     {name: 'Micrófono', price: 120, id:1},
        //     {name: 'KeyBoard', price: 200, id:6},
        //     {name: 'Silla', price: 56, id:5},
        //     {name: 'Monitor', price: 450, id:8},
        //     {name: 'Micrófono', price: 120, id:9},
        //     {name: 'KeyBoard', price: 200, id:10},
        // ],
        //? Refactoring
        categoryId: null as number | null,
        _products: [
            {
                name: 'Control PS2', 
                price: 56, id:1, 
                image: '/products/control-ps2.jpg',
                categoryId: 3
            },
            {
                name: 'Macbook', 
                price: 450, id:2, 
                image: '/products/macbook-air.jpg',
                categoryId: 1
            },
            {
                name: 'Cámara Retro', 
                price: 120, id:3, 
                image: '/products/camara-retro.jpg',
                categoryId: 3
            },
            {
                name: 'KeyBoard', 
                price: 200, id:4, 
                image: '/products/keyboard.jpg',
                categoryId: 2
            }, 
            {
                name: 'Silla', 
                price: 56, id:5, 
                image: '/products/silla.jpg',
                categoryId: 1
            },
            {
                name: 'Escritorio', 
                price: 450, id:6, 
                image: '/products/escritorio.jpg',
                categoryId: 1
            },
            {
                name: 'Cámara Profesional', 
                price: 120, id:7, 
                image: '/products/camara-profesional.jpg',
                categoryId: 3
            },
            {
                name: 'iPhone 4s', 
                price: 200, id:8, 
                image: '/products/iphone-4s.jpg',
                categoryId: 3
            },
        ] as Product[]
    }),
    getters: {
        products(state) {
            if (!state.categoryId){
                return state._products
            }
            
            return state._products
                .filter(p => p.categoryId === state.categoryId);
        }
    },
    actions: {
        selectCategory(categoryId: number) {
            this.categoryId = categoryId;
        }
    }
})