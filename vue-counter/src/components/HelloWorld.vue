<template>
  <div>
    <h1>Contador: {{ contador }}</h1>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contador = ref(0)

function incrementar() {
  contador.value++
}

function decrementar() {
  contador.value--
}
</script>
<style scoped>
h1 {
  color: #ffffff;
}
button {
  margin: 5px;
  padding: 10px;
  background-color: #b6195a;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #b6195a;
}
button:active {
  background-color: #b6195a;
}
</style>
