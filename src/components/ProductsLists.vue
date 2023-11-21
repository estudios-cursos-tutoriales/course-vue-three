<script lang="ts">
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';
import type { CartDetail, Product } from '@/model/Types';
export default {
    components: {
        ProductCard,
        Cart
    },
    data(){
        return {
            // Casting
            products: <Array<Product>> [
                {name: 'Silla', price: 56, id:3},
                {name: 'Monitor', price: 450, id:7},
                {name: 'Micrófono', price: 120, id:1},
                {name: 'KeyBoard', price: 200, id:6},
            ],
            details: <Array<CartDetail>>[]
        }
    },
    methods: {
        
    },
    
}
</script>

<template>
    <v-row>
        <v-col v-for="product in products" cols="3">
            <ProductCard 
                :product="product" 
                @addProduct="onAddProduct(product.id)"
            />
        </v-col>
    </v-row>
    
    <Cart :details="details"/>
    
</template>

