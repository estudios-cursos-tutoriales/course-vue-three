<script lang="ts">
import ProductCard from './ProductCard.vue';
import type { Product } from '@/model/Types';
export default {
    components: {
        ProductCard
    },
    data(){
        return {
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
            products: [
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
        }
    }
}
</script>

<template>
    <v-row>
        <v-col 
            v-for="product in products"
            :key="product.id" 
            cols="3">
            <ProductCard :product="product"/>
        </v-col>
    </v-row>    
</template>

