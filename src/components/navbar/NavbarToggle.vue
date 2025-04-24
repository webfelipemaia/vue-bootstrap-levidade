<template>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            :data-bs-target="'#' + target" aria-controls="navbarContent" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span v-if="!customIcon" class="navbar-toggler-icon"></span>
      <i v-else :class="iconClass"></i>
    </button>
  </template>
<script setup>
const props = defineProps({
  target: {
    type: String,
    default: 'navbarContent'
  },
  iconClass: {
    type: String,
    default: 'navbar-toggler-icon' // Ícone padrão do Bootstrap
  },
  customIcon: {
    type: Boolean,
    default: false
  }
})
</script>