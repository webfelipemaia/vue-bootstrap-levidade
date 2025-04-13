<template>
    <div class="offcanvas-header" :class="headerClass" :style="headerStyle">
      <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
        <slot name="title">{{ title || 'Offcanvas menu' }}</slot>
      </h5>
      <div class="sidebar-separator"></div>
      <button
        @click="$emit('close')"
        v-if="showCloseButton"
        type="button"
        class="btn-close"
        :class="closeButtonClass"
        :style="closeButtonStyle"
        aria-label="Close"
      ></button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: {
      type: String,
      default: ''
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    headerClass: {
      type: [String, Array, Object],
      default: ''
    },
    headerStyle: {
      type: [String, Object],
      default: null
    },
    closeButtonClass: {
      type: [String, Array, Object],
      default: ''
    },
    closeButtonStyle: {
      type: [String, Object],
      default: null
    }
  })
  
  defineEmits(['close'])
  </script>