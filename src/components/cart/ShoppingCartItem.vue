<script lang="ts">
    import { useCartStore } from '@/stores/cart';
    import type { CartDetail } from '@/model/Types';
    import { mapActions } from 'pinia';
    import type { PropType } from 'vue';
    export default {
        props: {
            detail: {
                type: Object as PropType<CartDetail>,
                    required: true
            }
        },
        methods: {
            /* Definirnos estos métodos como ejemplos 
                que llaman acciones en stores, esto con 
                el uso de estados en Pinia.
            */ 

            // decrementQuantity(productId: number) {
            //     this.cartStore.decrement(productId);
            // },
            // incrementQuantity(productId: number) {
            //     this.cartStore.increment(productId);
            // },
            // deleteProducts(productId: number) {
            //     this.cartStore.deleteProducts(productId);
            // }

            /*
                Podemos Simplificar los métodos arriba con el uso 
                mapActions una característica o función que nos provee pinia.
            */

            ...mapActions(useCartStore, {
                decrementQuantity: 'decrement',
                incrementQuantity: 'increment',
                deleteProducts: 'deleteProducts'
            })
        },
        computed: {
            productImageUrl(){
                return this.detail.product.image ?? 'https://dummyimage.com/600x600/3b3b3b/4a4a4a'
            },
            subTotal() {
                return this.detail.product.price * this.detail.quantity;
            }
        }
    }
</script>
<template>
    <tr>
        <td>
            <v-avatar size="40px" class="mr-5">
                <v-img :src="productImageUrl" />
            </v-avatar>
            {{ detail.product.name }} 
        </td>
        <td class="text-center"> 
            <v-btn
                class="ml-2"
                size="x-small"
                icon="mdi-minus"
                @click="decrementQuantity(detail.product.id)" 
            />
            
            {{ detail.quantity }}
           
            <v-btn 
                size="x-small"
                icon="mdi-plus"
                @click="incrementQuantity(detail.product.id)"
            />
        </td>
        
        <td class="text-center">
            {{ detail.product.price }}
        </td>

        <td class="text-center">
            {{  subTotal }}
        </td>
        <td class="text-center">
            <v-btn 
                class="ml-2"
                icon="mdi-trash-can"
                size="x-small" 
                color="red"
                @click="deleteProducts(detail.product.id)" 
            />
        </td>
    </tr>
</template>