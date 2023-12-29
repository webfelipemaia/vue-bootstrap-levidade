<template>
  <div class="accordion" id="accordionComponent">
    <AccordionItem 
        v-for="(item, index) in contents"
        :id="'accordion'+index"  
        :item="item" 
        :key="item.title">
    </AccordionItem>

  </div>
</template>

<script>
  
  import AccordionItem from './AccordionItem.vue';

const contents = Array(3)
  .fill()
  .map((_, i) => {
    return {
      accordionId: i,
      title: `title ${i}`,
      description: `description ${i}`,
      expanded: false,
    };
  });

  export default {
  name: "leve-accordion",

  components: {
        AccordionItem,
    },

  props: {
    multiple: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      contents,
      groupId: null,
    };
  },

  mounted() {
    console.log(this.$el.id)
  }

  }

</script>

<style scoped>
 /*
Enter and leave animations can use different
durations and timing functions.
*/
.slide-fade-enter-active {
transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
transform: translateX(20px);
opacity: 0;
}
</style>