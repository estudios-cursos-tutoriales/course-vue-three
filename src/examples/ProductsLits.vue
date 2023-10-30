<script lang="ts">
export default {
    data(){
        return {
            products: [
                {name: 'Silla', price: 56},
                {name: 'Monitor', price: 450},
                {name: 'Micrófono', price: 120},
            ]
        }
    },
    methods: {},
    
}
</script>

<template>
    <ul>
        <li v-for="product in products">{{ product.name }}</li>
    </ul>
</template>

