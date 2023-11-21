<script lang="ts">
import type { PropType } from 'vue';
import type { CartDetail } from '@/model/Types';
import { useCartStore } from '@/stores/cart';

export default{
    // Antes se recibía por Props
    // props: {
    //     details: {
    //         type: Object as PropType<Array<CartDetail>>,
    //         required: true
    //    }
    // }

    // A hora con Pinia se recibe por estado
    computed: {
        details() {
            const cartStore = useCartStore();
            return cartStore.details;
        }
    }
}
</script>

<template>
    <v-card class="mt-4">
        <v-card-title>
            Products Added to cart:
        </v-card-title>
        <v-card-text>
            <v-list>
                <v-list-item v-for="detail in details" :value="detail.productId">
                    <v-list-title>
                        Product: {{ detail.productId }} 
                        (Qty: {{ detail.quantity }})

                    </v-list-title>
                </v-list-item>
            </v-list>
        </v-card-text>
    </v-card>
</template>