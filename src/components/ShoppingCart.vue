<script lang="ts">
import { useCartStore } from '@/stores/cart';

export default{
    methods: {
        decrementQuantity(productId: number) {
            this.cartStore.decrement(productId);
        },
        incrementQuantity(productId: number) {
            this.cartStore.increment(productId);
        },
        deleteProducts(productId: number) {
            this.cartStore.deleteProducts(productId);
        }
    },
    computed: {
        // computed Property
        cartStore() {
            return useCartStore();
        },
        details() {
            return this.cartStore.details;
        }
    },
}
</script>

<template>
    <v-card class="mt-4">
        <v-card-title>
            Products Added to cart:
        </v-card-title>

        <v-card-text>
            <v-list v-if="details.length > 0">
                <v-list-item v-for="detail in details" :key="detail.productId" :value="detail.productId">
                    <v-list-title>
                        Product: {{ detail.productId }} 
                        <v-btn
                            class="ml-2"
                            size="x-small"
                            icon="mdi-minus"
                            @click="decrementQuantity(detail.productId)" 
                        />
                            {{ detail.quantity }}
                            <v-btn 
                            size="x-small"
                            icon="mdi-plus"
                            @click="incrementQuantity(detail.productId)"
                        />

                        <v-btn 
                            class="ml-2"
                            icon="mdi-trash-can"
                            size="x-small" 
                            color="red"
                            @click="deleteProducts(detail.productId)" />
                    </v-list-title>

                </v-list-item>
            </v-list>
            <p v-else>
                Aún no has agregado items a tu carrito de compras.
                Haz <RouterLink to="/" color="">clic aquí</RouterLink> para ver los productos disponibles
            </p>
        </v-card-text>
    </v-card>
</template>