<script lang="ts">
import type { Category } from '@/model/Types';

export default {
    data() {
        return {
            
            // Casting
            // categories: <Array<Category>>[
            //     {
            //         id: 1,
            //         name: 'Technology'
            //     },
            //     {
            //         id: 2,
            //         name: 'Toys'
            //     }
            // ]
            //? Refactoring
            categories: [
                {
                    id: 1,
                    name: 'Office',
                    description: 'Products for the office'
                },
                {
                    id: 2,
                    name: 'Computers',
                    description: 'Accessories for computers'
                },
                {
                    id: 3,
                    name: 'Tech',
                    description: 'Technology accessories'
                }
            ] as Category[]
        };
    },
    methods: {
        selectCategory(categoryId: number) {
            this.$router.push({
                name: 'category',
                
                // params: {categoryId: categoryId}

                // * Forma simplificada
                params: {categoryId}
            })
        }
    }
}
</script>

<template>  
    <v-sheet rounded="lg">
        <v-list rounded="lg">
            <v-list-item
                v-for="category in categories"
                :key="category.id"
                link
                @click="selectCategory(category.id)"
                >
                <v-list-item-title>
                    {{ category.name }}
                </v-list-item-title>
            </v-list-item>

            <v-divider class="my-2"></v-divider>

            <v-list-item
                color="grey-lighten-4"
                link
                title="Refresh">
            </v-list-item>
        </v-list>
    </v-sheet>
</template>