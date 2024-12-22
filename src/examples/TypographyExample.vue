<template>
    <p class="py-5 my-5 text-center">Typography</p>
    <p>{{ exampleText.phrase }}</p>
    <p>{{ exampleText.text }}</p>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Defines the toast content in an object
  const exampleText = ref(
    {
          phrase: "Lorem ipsusm dolor sit amet",
          text: "De tudo, ao meu amor serei atento Antes, e com tal zelo, e sempre, e tanto, Que mesmo em face do maior encanto Dele se encante mais meu pensamento.",
    }
  )
  
</script>
