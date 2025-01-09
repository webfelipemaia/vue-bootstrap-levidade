<template :is="tag">

  <template v-if="type === 'title'">
    <component :is="contentTags.includes(tag) ? tag : 'h5'" class="card-title">
      <slot></slot>
    </component>
  </template>

  <template v-else-if="type === 'subtitle'">
    <component :is="contentTags.includes(tag) ? tag : 'h6'" class="card-subtitle mb-2 text-body-secondary">
      <slot></slot>
    </component>
  </template>
  
  <template v-else>
    <component :is="contentTags.includes(tag) ? tag : 'div'" class="card-text">
      <slot></slot>
    </component>
  </template>

</template>
  
<script setup>
import { ref } from 'vue';

/** 
 * The content of the cards can be free text, a title or subtitle. By default, the component displays 
 * as text surrounded by the <code>div</code> tag.
*/

defineProps({
  tag: {
    type: String,
    required: false,
    validator: (value) => ["p", "div", "span", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value)
  },
  type: {
    type: String,
    default: "text",
    validator: (value) => ["text", "title", "subtitle"].includes(value)
  }
});

const contentTags = ref(["p", "div", "span", "h1", "h2", "h3", "h4", "h5", "h6"]);
</script>
