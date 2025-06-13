<template>
  <component
    :is="isRouterLink ? RouterLink : 'a'"
    :to="isRouterLink ? brandHref : undefined"
    :href="!isRouterLink ? brandHref : undefined"
    :class="['navbar-brand', brandClasses]"
  >
  
    <slot v-if="$slots.default" />

    <template v-else-if="brandImage">
      <img
        :src="brandImage"
        alt="Brand logo"
        class="me-2"
        :style="{ height: brandHeight, width: brandWidth }"
      />
      <span class="navbar-brand mb-0 h1">{{ brandText }}</span>
    </template>

    <template v-else>
      <i
        v-if="showIcon"
        :class="[iconClass, 'me-2']"
        :style="{ height: brandHeight, width: brandWidth }"
      ></i>
      {{ brandText }}
    </template>
  </component>
</template>

<script setup>
import { computed, inject } from 'vue'
import { RouterLink } from 'vue-router'

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
    default: ''
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  useRouterLink: {
    type: Boolean,
    default: false
  },
  brandImage: {
    type: String,
    default: ''
  },
  brandHeight: {
    type: String,
    default: '32px'
  },
  brandWidth: {
    type: String,
    default: '32px'
  }
})

const navbarTheme = inject('navbarTheme', null)
const navbarBgColor = inject('navbarBgColor', 'bg-body-primary')

const isRouterLink = computed(() => props.useRouterLink && props.brandHref.startsWith('/'))

const brandClasses = computed(() => {
  if (navbarTheme !== null) {
    return {
      'text-white': navbarTheme === 'dark' && !navbarBgColor.includes('body'),
      'text-dark': navbarTheme === 'light' && !navbarBgColor.includes('body'),
      'text-body-emphasis': navbarBgColor.includes('body')
    }
  }
  return {}
})
</script>
