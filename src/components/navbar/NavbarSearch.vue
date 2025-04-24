<template>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" :placeholder="placeholder" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">
        <i v-if="showButtonIcon" :class="buttonIcon" class="me-1"></i>
        {{ buttonText }}
      </button>
    </form>
</template>
<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search'
  },
  buttonText: {
    type: String,
    default: 'Search'
  },
  buttonIcon: {
    type: String,
    default: 'bi bi-search'
  },
  showButtonIcon: {
    type: Boolean,
    default: false
  }
})
</script>

