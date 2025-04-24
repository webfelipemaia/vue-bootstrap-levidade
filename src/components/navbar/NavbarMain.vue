<template>
    <nav class="navbar navbar-expand-lg" :class="[computedBgColor, computedTextColor, props.additionalClasses]">
      <div :class="props.containerType">
        <slot name="navbar-brand"></slot>
        <slot name="navbar-toggle"></slot>
        
        <div class="collapse navbar-collapse" id="navbarContent">
          <slot name="navbar-nav"></slot>
          <slot name="navbar-search"></slot>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue'
  
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
    }
  })
  
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