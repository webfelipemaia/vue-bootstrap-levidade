<template>
    <figure class="figure">
      <img
        :src="imageSrc"
        :class="['figure-img', 'img-fluid', { rounded: isRounded }]"
        :alt="imageAlt"
      />
      <figcaption :class="captionClass">{{ captionText }}</figcaption>
    </figure>
  </template>
  
  <script setup>
  import { defineProps, computed } from 'vue';
  
  // Definindo as props que o componente recebe
  const props = defineProps({
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      default: '',
    },
    captionText: {
      type: String,
      default: '',
    },
    captionPosition: {
      type: String,
      default: 'left', // Pode ser 'left', 'right', ou 'center'
      validator: (value) => ['left', 'right', 'center'].includes(value),
    },
    rounded: {
      type: Boolean,
      default: true, // Por padrão, a classe rounded é aplicada
    },
  });
  
  // Computed property para determinar a classe do figcaption com base na posição
  const captionClass = computed(() => {
    switch (props.captionPosition) {
      case 'right':
        return 'figure-caption text-end';
      case 'center':
        return 'figure-caption text-center';
      default:
        return 'figure-caption';
    }
  });
  
  // Computed property para verificar se a classe rounded deve ser aplicada
  const isRounded = computed(() => props.rounded);
  </script>
  
  <style scoped>
  /* Estilos opcionais, se necessário */
  </style>