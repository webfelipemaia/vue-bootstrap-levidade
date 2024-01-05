<template>
    <div class="card-header">
      <slot></slot>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  /** 
   * Add highlighted title to the Card component.
  */
  export default defineComponent({
    
    name: "leve-card-header",
      
  });
  
</script>