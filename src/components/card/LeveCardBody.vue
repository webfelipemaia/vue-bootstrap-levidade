<template>
    <div class="card-body">
      <slot></slot>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  /** 
   * Cards are general-purpose containers for displaying any type of content
  */
  export default defineComponent({
    
    name: "leve-card-body",
      
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