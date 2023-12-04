<script lang="ts">
import ProductsLists from '@/components/ProductsLists.vue';
import CategoryList from '@/components/CategoryList.vue';
import { useProductsStore } from '@/stores/products';
import { mapActions } from 'pinia';

function updateCategoryFromRouteParams(categoryIdParam: string | string[]){
    const productsStore = useProductsStore();
    const categoryId = Number(categoryIdParam);
    productsStore.selectCategory(categoryId);
}

export default {
    components: {
        ProductsLists,
        CategoryList
    },
    methods: {
    },
    beforeRouteEnter(to, from){
        console.log('beforeRouteEnter', to.params);
        updateCategoryFromRouteParams(to.params.categoryId);
    },
    beforeRouteUpdate(to, from){
        console.log('beforeRouteUpdate', to.params);
        updateCategoryFromRouteParams(to.params.categoryId);
    }
}
</script>

<template>
    <v-row>
        <v-col cols="2">
            <CategoryList />
        </v-col>
        <v-col cols="10">
          <ProductsLists />
        </v-col>
    </v-row>
</template>
