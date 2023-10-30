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
    <h1>Contador: {{ count }}</h1>
    <button @click="increase">Aumentar</button>
</template>

