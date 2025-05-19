<template>
  <form class="d-flex navsearch" role="search" @submit.prevent="handleSearch">
    <input
      v-model="searchInput"
      class="form-control me-2"
      :class="inputClasses"
      type="search"
      :placeholder="placeholder"
      aria-label="Search"
    />
    <button class="btn" :class="buttonClasses" type="submit">
      <i v-if="showButtonIcon" :class="buttonIcon" class="me-1"></i>
      {{ buttonText || '' }}
    </button>
  </form>
</template>

<script setup>
import { ref, computed, inject } from 'vue'
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
    default: ''
  },
  borderVariant: {
    type: String,
    default: ''
  }
})

const navbarTheme = inject('navbarTheme', null)
const searchStore = useSearchStore()
const searchInput = ref('')

const buttonClasses = computed(() => {
  // Se buttonClass foi especificado, usa ele
  if (props.buttonClass) return props.buttonClass
  
  // Se theme foi definido, aplica as classes correspondentes
  if (navbarTheme !== null) {
    return navbarTheme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'
  }
  
  // Padrão do Bootstrap quando theme não está definido
  return 'btn-outline-secondary'
})

const inputClasses = computed(() => {
  const classes = {
    'bg-transparent': true
  }
  
  // Aplica classes apenas se theme foi explicitamente definido
  if (navbarTheme !== null) {
    Object.assign(classes, {
      [`border-${props.borderVariant}`]: props.borderVariant,
      'border-light': !props.borderVariant && navbarTheme === 'dark',
      'border-dark': !props.borderVariant && navbarTheme === 'light',
      'text-white': navbarTheme === 'dark',
      'text-dark': navbarTheme === 'light'
    })
  }
  
  return classes
})

const handleSearch = () => {
  searchStore.setQuery(searchInput.value)
}
</script>

<style lang="scss">
.navsearch {
  button.btn {
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
    
    &:hover {
      opacity: 0.9;
    }
  }

  .form-control {
    &:focus {
      box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.25);
    }
  }
}
</style>