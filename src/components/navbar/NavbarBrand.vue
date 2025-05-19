<template>
  <RouterLink 
    v-if="isRouterLink"
    class="navbar-brand"
    :to="brandHref"
    :class="brandClasses"
  >
    <i v-if="showIcon" :class="iconClass" class="me-2"></i>
    {{ brandText }}
  </RouterLink>
  <a
    v-else
    class="navbar-brand"
    :href="brandHref"
    :class="brandClasses"
  >
    <i v-if="showIcon" :class="iconClass" class="me-2"></i>
    {{ brandText }}
  </a>
</template>

<script setup>
import { computed, inject } from 'vue'

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
    default: 'bi bi-bootstrap'
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  useRouterLink: {
    type: Boolean,
    default: false
  }
})

const navbarTheme = inject('navbarTheme', null)
const navbarBgColor = inject('navbarBgColor', 'bg-body-primary')

const isRouterLink = computed(() => props.useRouterLink && props.brandHref.startsWith('/'))

const brandClasses = computed(() => {
  // Aplica classes apenas se theme foi explicitamente definido
  if (navbarTheme !== null) {
    return {
      'text-white': navbarTheme === 'dark' && !navbarBgColor.includes('body'),
      'text-dark': navbarTheme === 'light' && !navbarBgColor.includes('body'),
      'text-body-emphasis': navbarBgColor.includes('body')
    }
  }
  return {} // Retorna objeto vazio para usar classes padrão do Bootstrap
})
</script>