<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useCartStore, ['totalAmount'])
    }
}
</script>

<template>
    <v-card>
        <v-card-title>
            Purchasing Summary
        </v-card-title>
        <v-card-subtitle>
            Total to pay $ {{ totalAmount }}
        </v-card-subtitle>
        <v-card-text>
            <v-btn variant="tonal" color="orange-lighten-2">
                Place an order  
            </v-btn>
        </v-card-text>
    </v-card>
</template>