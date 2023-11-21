<script lang="ts">
import ProductsLists from '@/components/ProductsLists.vue';
import CategoryList from '@/components/CategoryList.vue';
export default {
    components: {
        ProductsLists,
        CategoryList
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
