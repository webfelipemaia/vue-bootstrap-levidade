<template>
    <div :class="['d-flex', { 'align-items-center': alignCenter }]">
      <div class="flex-shrink-0">
        <img 
            :src="imageSrc" 
            :alt="imageAlt"
            :style="{ width: imageSize.width, height: imageSize.height }" />
      </div>
      <div class="flex-grow-1 ms-3">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  // Definindo as props
  defineProps({
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        required: true,
    },
    alignCenter: {
        type: Boolean,
        default: false,
    },
    imageSize: {
        type: Object,
        default: () => ({ width: 'auto', height: 'auto' }), // Tamanho padrão
    },
  });
  </script>