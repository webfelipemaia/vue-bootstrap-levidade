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
  
<script>
  import { defineComponent } from 'vue';
  
  /** 
   * The content of the cards can be free text, a title or subtitle. By default, the component displays 
   * as text surrounded by the <coede>div</code> tag.
  */
  export default defineComponent({
    
    name: "leve-card-content",
        
    props: { 
      tag: {
      type: String,
      required: false,
        validator(value) {
          return ["p", "div", "span", "h1", "h2", "h3", "h4", "h5", "h6"].includes(value)
        }
      },
      type: {
      type: String,
      default: "text",
        validator(value) {
          return [ "text", "title","subtitle"].includes(value);        
        }
      },
    },

    data() {
      return {
        contentTags: ["p", "div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
      }
    },
      
  });
  
</script>