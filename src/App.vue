<template>
  <p class="py-5 my-5 text-center">Levidade Bootstrap component for Vue.</p>  
  <leve-toast></leve-toast>
</template>

<script setup>
import { provide, ref } from 'vue'

// Defines the toast content in an object
const notification = ref(
  {
        id: 1,
        text: "Lorem ipsusm dolor sit amet",
        comment: "Sample comment text here",
        type: "primary",
        notificationTime: 'just now',
        createdAt: new Date(),
    }
)
// Sends the information to be displayed
provide('notification', notification)

// Next step: add reactivity 
// https://vuejs.org/guide/components/provide-inject.html#working-with-reactivity

</script>

<style>
</style>