<template>
  <template v-if="isActiveFlexContainer">
    <nav class="navbar">
      <slot name="navbar-brand"></slot>
      <slot name="navbar-nav"></slot>
      <slot name="navbar-search"></slot>
      <slot name="navbar-option"></slot>
    </nav>
  </template>
  <template v-else>
    <nav 
      class="navbar navbar-expand-lg" 
      :class="[computedNavbarClasses, additionalClasses]"
      :data-bs-theme="computedTheme"
    >
      <div :class="containerType">
        <slot name="navbar-brand"></slot>
        
        <leve-button
          v-if="$slots['navbar-nav']"
          is-navbar-toggler
          :is-collapsed="isCollapsed"
          @toggle-navbar="updateCollapseState"
          :theme="computedTheme"
          aria-label="Toggle navigation"
        />
        
        <div class="navbar-collapse" :class="{ 'collapse': true, 'show': !isCollapsed }">
          <slot name="navbar-nav"></slot>
          <slot name="navbar-search"></slot>
        </div>
      </div>
    </nav>
  </template>
</template>

<script setup>
import { defineProps, computed, ref, provide } from 'vue'
import LeveButton from '../LeveButton.vue'

const props = defineProps({
  containerType: {
    type: String,
    default: 'container-fluid',
    validator: (value) => ['container', 'container-fluid'].includes(value)
  },
  bgColor: {
    type: String,
    default: 'bg-primary'
  },
  textColor: {
    type: String,
    default: null,
    validator: (value) => value === null || ['navbar-light', 'navbar-dark'].includes(value)
  },
  expandSize: {
    type: String,
    default: 'lg'
  },
  additionalClasses: {
    type: String,
    default: ''
  },
  collapseNavId: {
    type: String,
    default: 'navbarMainCollapse'
  },
  isActiveFlexContainer: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: null,
    validator: (value) => value === null || ['light', 'dark'].includes(value)
  }
})

const isCollapsed = ref(true)

const computedTheme = computed(() => {
  if (props.theme !== null) return props.theme
  return null
})

provide('navbarTheme', computedTheme.value)
provide('navbarBgColor', props.bgColor)

const updateCollapseState = (newState) => {
  isCollapsed.value = newState
}

const computedNavbarClasses = computed(() => {
  const classes = [props.bgColor]
  
  if (props.textColor) {
    classes.push(props.textColor)
  } else {
    classes.push(computedTheme.value === 'dark' ? 'navbar-dark' : 'navbar-light')
  }
  
  return classes
})
</script>