<template>
  <component
    :is="tag"
    :type="(tag !== 'button' || tag ==='input') ? undefined : nativeType"
    :disabled="(disabled || loading) ? true : undefined"
    @click="handleClick"
    class="btn"
    :class="[
      { 'animation-on-hover': animationOnHover},
      { 'btn-round': round },
      { 'btn-block': block },
      { 'btn-icon btn-fab': icon },
      { [`btn-${type}`]: type },
      { [`btn-${size}`]: size },
      { 'btn-simple': simple },
      { 'btn-link': link },
      { disabled: disabled && tag !== 'button' },
    ]"
  >
    <slot name="loading">
      <i v-if="loading" class="fas fa-spinner fa-spin"></i>
    </slot>

    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "base-button",
  props: {
    tag: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "a"].includes(value);        
      }
    },
    animationOnHover: {
      type: String,
      default: "",
    },
    round: Boolean,
    icon: Boolean,
    block: Boolean,
    disabled: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "",
    },
    simple: {
      type: Boolean,
    },
    link: {
      type: Boolean,
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style></style>