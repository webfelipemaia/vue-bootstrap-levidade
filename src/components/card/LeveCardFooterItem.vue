<template>
  <a :href="link" class="card-footer-item">
    <slot></slot>
  </a>
</template>

<script setup>
/**
 * Add actions via anchors to cards.
 */

defineProps({
  link: {
    type: String,
  },
});
</script>

<style lang="scss">
.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:not(:last-child) {
    border-right: 1px solid #ededed;
  }

  &:hover {
    background: rgba(108, 117, 125, 15%);
    color: #222222;
  }
}
</style>
