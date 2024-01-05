<template>
    <div class="card" :class="helperClass" :style="helperStyle">
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
      
      helperStyle: {
            type: [Object,String]
        },
      helperClass: {
        type: [Object,String]
      },   
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