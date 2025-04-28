<template>
  <component
    :is="tag"
    :type="(tag !== 'button' || tag === 'input') ? undefined : nativeType"
    :disabled="(disabled || loading) ? true : undefined"
    @click="handleToggleClick"
    class="btn"
    :class="[
      { [`btn-outline-${outline}`]: outline && !isNavbarToggler },
      { [`btn-${type}`]: type && !isNavbarToggler },
      { [`btn-${size}`]: size && !isNavbarToggler },
      { disabled: disabled && tag !== 'button' },
      { 'navbar-toggler': isNavbarToggler },
      { 'collapsed': isCollapsed },
    ]"
    :style="[buttonStyle, style]"
    :aria-label="isNavbarToggler ? ariaLabel || 'Toggle navigation' : ariaLabel"
    :href="tag === 'a' ? href : undefined"
    :aria-expanded="isNavbarToggler ? String(!isCollapsed) : undefined"
  >
    <slot v-if="loading" name="loading">
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    </slot>

    <slot v-if="icon && !isNavbarToggler" name="icon">
      <i class="bi" :class="[{ [`bi-${icon}`]: icon }]"></i>
    </slot>

    <span v-if="isNavbarToggler" class="navbar-toggler-icon"></span>

    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "leve-button",
  props: {
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
    tag: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "a"].includes(value);
      }
    },
    href: {
      type: String,
      default: "#"
    },
    outline: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: ''
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    style: {
      type: String,
      default: '',
    },
    // Novas props para o toggle button
    isNavbarToggler: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: null
    },
    controls: {
      type: String,
      default: null
    },
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    buttonStyle() {
      let height;
      switch (this.size) {
        case 'sm':
          height = '30px';
          break;
        case 'md':
          height = '38px';
          break;
        case 'lg':
          height = '48px';
          break;
        default:
          height = undefined;
      }
      return { height };
    }
  },
  methods: {
    handleToggleClick() {
      this.$emit('toggle-navbar', !this.isCollapsed);
    },
  },
};
</script>