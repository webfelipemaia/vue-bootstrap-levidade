<template>
    <div class="card" :style="textAlign">
        <slot></slot>
    </div>
</template>
  
<script>

    import { defineComponent } from 'vue';
  
  /** 
   * Cards are general-purpose containers for displaying any type of content.
  */
  export default defineComponent({
    
    name: "leve-card",
        
    props: {      
      alignment: {
      type: String,
      default: "left",
        validator(value) {
          return [ "left", "center","right"].includes(value);        
        }
      },
    },
  
    computed: {      
      textAlign () {
        return { 'text-align':  this.alignment }
      },
    },
      
  });
  
</script>