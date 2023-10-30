<script lang="ts">
export default {
    data(){
        return {
            count: 0
        }
    },
    methods: {
        increase() {
            this.count += 1;
        }
    },
    
}
</script>

<template>
    <p>Objetivo: tienes que llegar a 20 clicks</p>
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Aumentar</button>
    <p v-if="count <= 10">Vamos tu puedes</p>
    <p v-else>Ya te falta my poco...</p>
</template>

