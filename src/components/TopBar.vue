<script lang="ts">
import { useCartStore } from '@/stores/cart';
export default {
    computed: {
        itemsCount() {
            const cartStore = useCartStore();
            return cartStore.cartItemsCount;
        }
    }
}
</script>

<template>
    <v-app-bar flat>
        <v-container class="mx-auto d-flex align-center justify-center">
            <v-avatar
                class="me-4"
                size="32">
                <v-img src="/logo-3mins.jpg" />
            </v-avatar>

            <RouterLink  to="/" custom v-slot="{navigate}">
                <v-btn prepend-icon="mdi-vuetify" :active="$route.name === 'home' || $route.name === 'category'" variant="text" @click="navigate">
                    Home
                </v-btn>
            </RouterLink>

            <RouterLink to="/cart" custom v-slot="{navigate}">
                <v-badge :content="itemsCount" :model-value="itemsCount > 0" color="red">
                    <v-btn :active="$route.name === 'cart'" variant="text" @click="navigate">
                        Cart
                    </v-btn>
                </v-badge>
            </RouterLink>

            <RouterLink to="/about" custom v-slot="{navigate}">
                <v-btn :active="$route.name === 'about'" variant="text" @click="navigate">
                    About
                </v-btn>
            </RouterLink>

            <v-spacer></v-spacer>

            <v-responsive max-width="160">
                <v-text-field
                    density="compact"
                    flat
                    hide-details
                    label="Search"
                    rounded="lg"
                    single-line
                    variant="solo-filled">
                </v-text-field>
            </v-responsive>
        </v-container>
    </v-app-bar>
</template>