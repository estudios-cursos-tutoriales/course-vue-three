<script lang="ts">
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';
import ShoppingCartItem from './ShoppingCartItem.vue';

/*
    Términos:
    Helpers
    Computed Property
    Destructor
*/

export default{
    components: {
        ShoppingCartItem
    },
    computed: {
          /* Definirnos estos métodos como ejemplos 
            que llaman acciones en stores, esto con 
            el uso de estados en Pinia.
        */  
        // computed Property
        // cartStore() {
        //     return useCartStore();
        // },
        // details() {
        //     return this.cartStore.details;
        // }

         /*
            Computed Property: 
            Podemos Simplificar los métodos arriba con el uso 
            mapState una característica o función que nos provee pinia.
        */
        ...mapState(useCartStore, ['details'])
    },
}
</script>

<template>
    <v-card>
        <v-card-title>
            Products Added to cart:
        </v-card-title>

        <v-card-text>
            <v-table v-if="details.length > 0">
                
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-center">
                            Quantity
                        </th>
                        <th class="text-center">
                            Precio
                        </th>
                        <th class="text-center">
                            SubTotal
                        </th>
                        <th class="text-center">
                            <span class="d-sr-only">
                                Delete
                            </span>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <ShoppingCartItem 
                        v-for="detail in details" 
                        :key="detail.product.id" 
                        :detail="detail"
                    />
                </tbody>

            </v-table>
           
            <p v-else>
                Aún no has agregado items a tu carrito de compras.
                Haz <RouterLink to="/" color="">clic aquí</RouterLink> para ver los productos disponibles
             </p>
       
        </v-card-text>
    </v-card>
</template>