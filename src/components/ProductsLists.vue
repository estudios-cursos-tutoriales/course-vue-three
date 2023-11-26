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
                {name: 'Silla', price: 56, id:3},
                {name: 'Monitor', price: 450, id:7},
                {name: 'Micrófono', price: 120, id:1},
                {name: 'KeyBoard', price: 200, id:6},
                {name: 'Silla', price: 56, id:5},
                {name: 'Monitor', price: 450, id:8},
                {name: 'Micrófono', price: 120, id:9},
                {name: 'KeyBoard', price: 200, id:10},
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

