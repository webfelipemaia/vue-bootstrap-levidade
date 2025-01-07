<template>
  <div class="card" :class="[cardClass, textAlign]" :style="cardStyle">
    <template v-if="imageOverlay">
      <div class="card-img-overlay">
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script setup>
import { computed } from "vue";

// Definição das Props
const props = defineProps({
  cardStyle: {
    type: [Object, String],
    default: null
  },
  cardClass: {
    type: [Object, String],
    default: null
  },
  alignment: {
    type: String,
    default: "left",
    validator: (value) => ["left", "center", "right"].includes(value)
  },
  imageOverlay: {
    type: Boolean,
    default: false
  }
});

// Computed Property para definir a classe de alinhamento
const textAlign = computed(() => {
  return {
    left: "text-start",
    center: "text-center",
    right: "text-end"
  }[props.alignment];
});
</script>
