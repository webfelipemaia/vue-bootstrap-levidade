<template>
    <div class="card-footer">
      <slot></slot>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  /** 
   * Cards are general-purpose containers for displaying any type of content
  */
  export default defineComponent({
    
    name: "leve-card-footer",
      
    setup() {
     
     
    //return { },

    },
  
    //props: { },
  
    methods: { },
  
    computed: { },
  
    updated () { }
      
  });
  
</script>
  
<style lang="scss">
  
</style>