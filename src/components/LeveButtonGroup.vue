<template>
  <component
    :is="tag"
    :role="(role !== 'group' || role !== 'toolbar') ? undefined : role"
    @click="handleClick"
    :class="[
      { [`btn-group`]: (type === 'group') ? type : undefined },
      { [`btn-group`]: (type === '') ? defaultType : undefined },
      { [`btn-group-${type}`]: (type === 'vertical') ? type : undefined },
      { [`btn-toolbar`]: (type === 'toolbar') ? type : undefined },
      { [`btn-group-${size}`]: size !== '' }, 
      { options: options },
    ]"
    :type="type"
    :ariaLabel="ariaLabel"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "leve-button-group",
  props: {
    ariaLabel: {
      type: String,
      default: "This is a button group",
    },
    tag: {
      type: String,
      default: "div",
      validator(value) {
        return ["div"].includes(value);
      },
    },
    type: {
      type: String,
      default: "group",
      validator(value) {
        return ["group", "vertical", "toolbar", ""].includes(value);
      },
    },
    role: {
      type: String,
      default: "",
    },
    defaultType: {
      type: String,
      default: "group",
    },
    size: {
      type: String,
      default: "",
      validator(value) {
        return ["", "lg", "sm"].includes(value);
      },
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style>
</style>
