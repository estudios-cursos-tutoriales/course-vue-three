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
                :title="`${category.name}`">
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