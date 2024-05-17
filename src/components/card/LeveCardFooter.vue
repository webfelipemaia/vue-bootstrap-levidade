<template>

    <div v-if="type" class="card-footer" :style="isGroupedStyle">
      <div :class="cardActions">
        <slot></slot>
      </div>
    </div>

    <div v-else class="card-footer">
      <slot></slot>
    </div>

</template>
  
<script>
import { defineComponent } from 'vue';
  
  /** 
   * To assign actions to cards, you can use the LeveCardFooter component.
  */
  export default defineComponent({
    
    name: "leve-card-footer",
    
    props: {      
      type: {
        type: String,
        validator(value) {
          return [ "cardGroupedContent", "cardActions"].includes(value);        
        }
      },
    },
  
    computed: {
      isGroupedStyle () {
        return this.type ? { padding: 0, } : undefined
      },
      cardActions () {
        return this.type ? { 'card-actions': true, } : undefined
      }
    },
        
  });
  
</script>
  
<style lang="scss">

  .card-grouped-content {
    display: flex;
  }

  .card-actions {
    display: flex;
    align-items: stretch;
  }
  
</style>