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
        clearCategory(){
            this.$router.push({
                name: 'home'
            });
        },
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
            <v-list-subheader>Categories</v-list-subheader>
            <v-list-item link @click="clearCategory()" :active="$route.name === 'home'">
                <v-list-item-title>
                    All 
                </v-list-item-title>
            </v-list-item>

            <!-- usamos la directiva :active para activar el iten del menu  en la category  -->
            <v-list-item :active="$route.name === 'category' && Number($route.params.categoryId) === category.id"
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

            <v-list-subheader>Order</v-list-subheader>

            <v-list-item link color="grey-lighten-4">
                <v-list-item-title>
                    For prices
                </v-list-item-title>
            </v-list-item>
            
            <v-list-item link color="grey-lighten-4">
                <v-list-item-title>
                    For Name
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-sheet>
</template>