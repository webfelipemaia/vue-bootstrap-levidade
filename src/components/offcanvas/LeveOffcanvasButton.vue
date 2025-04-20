<template>
  <button
    @click="handleClick"
    class="leve-offcanvas-button"
    :class="[buttonClass, { 'disabled': isDisabled }]"
    :style="buttonStyle"
    type="button"
    :aria-controls="ariaControls"
    :aria-expanded="isOpen.toString()"
    :aria-label="ariaLabel"
    :disabled="isDisabled"
  >
    <slot>
      <span class="navbar-toggler-icon"></span>
    </slot>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: 'primary',
    validator: value => [
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
      'link'
    ].includes(value)
  },
  buttonClass: {
    type: [String, Array, Object],
    default: ''
  },
  buttonStyle: {
    type: [String, Object],
    default: null
  },
  ariaControls: {
    type: String,
    default: 'offcanvasNavbar'
  },
  ariaLabel: {
    type: String,
    default: 'Toggle navigation'
  },
  disabled: Boolean
})

const emit = defineEmits(['toggle'])

const buttonClass = computed(() => {
  return ['btn', `btn-${props.variant}`]
});

const isDisabled = computed(() => props.disabled);

const handleClick = () => {
  if (isDisabled.value) return;
  emit('toggle');
};
</script>

<style>
.leve-offcanvas-button {
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.leve-offcanvas-button.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.leve-offcanvas-button:hover {
  opacity: 0.8;
}
</style>