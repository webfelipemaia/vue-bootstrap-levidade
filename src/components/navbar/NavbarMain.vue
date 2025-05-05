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
  <nav class="navbar navbar-expand-lg" :class="[computedBgColor, computedTextColor, props.additionalClasses]">
    <div :class="props.containerType">
      <slot name="navbar-brand"></slot>
      
      <leve-button
        v-if="$slots['navbar-nav']"
        is-navbar-toggler
        :is-collapsed="isCollapsed"
        @toggle-navbar="updateCollapseState"
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
  import { defineProps, computed, ref } from 'vue'
  import LeveButton from '../LeveButton.vue'

  const props = defineProps({
    containerType: {
      type: String,
      default: 'container-fluid',
      validator: (value) => ['container', 'container-fluid'].includes(value)
    },
    bgColor: {
      type: String,
      default: 'bg-body-primary'
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
    }
  })
  
  const isCollapsed = ref(true)

  const updateCollapseState = (newState) => {
    isCollapsed.value = newState;
  };

  // Computed para a cor de fundo
  const computedBgColor = computed(() => props.bgColor)
  
  // Computed para determinar a classe de cor de texto
  const computedTextColor = computed(() => {
    // Se textColor foi especificado manualmente, usa esse valor
    if (props.textColor) return props.textColor
    
    // Lógica automática de contraste
    const darkBackgrounds = [
      'bg-dark', 'bg-primary', 'bg-secondary', 
      'bg-success', 'bg-danger', 'bg-body-tertiary'
    ]
    
    return darkBackgrounds.includes(props.bgColor) ? 'navbar-dark' : 'navbar-light'
  })
  </script>