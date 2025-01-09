<template>
  <div v-if="type" class="card-footer" :style="isGroupedStyle">
    <div :class="cardActions">
      <slot></slot>
    </div>
  </div>

  <div v-else class="card-footer">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue'

/**
 * To assign actions to cards, you can use the LeveCardFooter component.
 */

 const props = defineProps({
  type: {
    type: String,
    validator(value) {
      return ["cardGroupedContent", "cardActions"].includes(value);
    },
  },
})

const isGroupedStyle = computed(() => (props.type ? { padding: 0 } : undefined))
const cardActions = computed(() => (props.type ? { 'card-actions': true } : undefined))
</script>

<style lang="scss">
.card-grouped-content {
  display: flex;
}

.card-actions {
  display: flex;
  align-items: stretch;
}
</style>
