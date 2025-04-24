<template>
    <a class="navbar-brand" :href="brandHref">
      <i v-if="showIcon" :class="iconClass" class="me-2"></i>
      {{ brandText }}
    </a>
</template>

<script setup>
const props = defineProps({
  brandText: {
    type: String,
    default: 'Navbar'
  },
  brandHref: {
    type: String,
    default: '#'
  },
  iconClass: {
    type: String,
    default: 'bi bi-bootstrap' // Bootstrap Icons padrão
  },
  showIcon: {
    type: Boolean,
    default: true
  }
})
</script>