<template>
  <component
    :is="tag"
    :type="(tag !== 'button' || tag === 'input') ? undefined : nativeType"
    :disabled="(disabled || loading) ? true : undefined"
    @click="handleClick"
    class="btn"
    :class="[
      { [`btn-outline-${outline}`]: outline },
      { [`btn-${type}`]: type },
      { [`btn-${size}`]: size },
      { disabled: disabled && tag !== 'button' },
    ]"
    :style="[buttonStyle, style]"
    :ariaLabel="ariaLabel"
    :href="tag === 'a' ? href : undefined"
  >
    <slot v-if="loading" name="loading">
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    </slot>

    <slot v-if="icon" name="icon">
      <i class="bi" :class="[{ [`bi-${icon}`]: icon }]"></i>
    </slot>

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
          height = '38px';
      }
      return { height };
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style></style>
