<template>
    <div class="card-body">
      <slot></slot>
    </div>
</template>
  
<script>
  import { defineComponent } from 'vue';
  
  /** 
   * The casing for the body of the LeveCard component.
  */
  export default defineComponent({
    
    name: "leve-card-body",
      
  });
  
</script>