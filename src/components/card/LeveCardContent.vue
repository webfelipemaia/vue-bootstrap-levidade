<template :is="tag">

  <template v-if="type === 'title'">
    {{ type }}
  </template>
  <template v-else-if="type === 'subtitle'">
    {{ type }}
  </template>
  <template v-else>
    <component :is="contentTags.includes(tag) ? tag : 'div'" class="card-text">
      {{ type }}
    </component>
  </template>

</template>
  
<script>
  import { defineComponent } from 'vue';
  
  /** 
   * Cards are general-purpose containers for displaying any type of content
  */
  export default defineComponent({
    
    name: "leve-card-content",
      
    setup() {
     
     
    //return { },

    },
  
    props: { 
      tag: {
      type: String,
      required: false,
      default: "p",
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
  
    methods: { },
  
    computed: { },
  
    updated () { },
      
  });
  
</script>
  
<style lang="scss">
  
</style>