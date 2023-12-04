<script lang="ts">
import ProductCard from './ProductCard.vue';
import { useProductsStore } from '@/stores/products';
import { mapState } from 'pinia';
export default {
    components: {
        ProductCard
    },
    computed: {
        ...mapState(useProductsStore, ['products'])
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

