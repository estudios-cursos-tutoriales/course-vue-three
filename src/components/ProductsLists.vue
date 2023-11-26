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
                {name: 'Control PS2', price: 56, id:1, image: 'https://picsum.photos/id/96/600/600'},
                {name: 'Macbook', price: 450, id:2, image: 'https://picsum.photos/id/0/600/600'},
                {name: 'Cámara Retro', price: 120, id:3, image: 'https://picsum.photos/id/250/600/600'},
                {name: 'KeyBoard', price: 200, id:4, image: 'https://picsum.photos/id/366/600/600'},
                {name: 'Silla', price: 56, id:5, image: 'https://picsum.photos/id/534/600/600'},
                {name: 'Escritorio', price: 450, id:6, image: 'https://picsum.photos/id/1068/600/600'},
                {name: 'Cámara Profesional', price: 120, id:7, image: 'https://picsum.photos/id/454/600/600'},
                {name: 'iPhone 4s', price: 200, id:8, image: 'https://picsum.photos/id/816/600/600'},
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

