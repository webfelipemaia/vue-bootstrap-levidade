<template>
  <form class="d-flex" role="search" @submit.prevent="handleSearch">
    <input
      v-model="searchInput"
      class="form-control me-2"
      type="search"
      :placeholder="placeholder"
      aria-label="Search"
    />
    <button class="btn" :class="buttonClass" type="submit">
      <i v-if="showButtonIcon" :class="buttonIcon" class="me-1"></i>
      {{ buttonText || '' }}
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '@/store/searchStore'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search'
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonIcon: {
    type: String,
    default: 'bi bi-search'
  },
  showButtonIcon: {
    type: Boolean,
    default: false
  },
  buttonClass: {
    type: String,
    default: 'btn-outline-light'
  },
})

const searchStore = useSearchStore()
const searchInput = ref('')

const handleSearch = () => {
  searchStore.setQuery(searchInput.value)
}
</script>
