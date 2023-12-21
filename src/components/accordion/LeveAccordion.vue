<template>
    <div class="accordion" id="accordionComponent">
        
      <AccordionItem :id="'accordion'+c.accordionId" v-for="c of contents" :key="c.title">

            <AccordionHeader>
                <button  @click="c.expanded = !c.expanded" 
                          class="accordion-button" 
                          :class="c.expanded ? '' : 'collapsed'" 
                          type="button" 
                          data-bs-toggle="collapse" 
                          :data-bs-target="'collapse'+`${c.accordionId}`" 
                          :aria-expanded="c.expanded ? true : false" 
                          :aria-controls="'collapse'+`${c.accordionId}`">
                    {{ c.title }}
                </button>
            </AccordionHeader>

            <Transition appear name="slide-fade" 
                        v-if="c.expanded" 
                        :id="'collapse'+`${c.accordionId}`" 
                        class="accordion-collapse" 
                        :class="c.expanded ? 'collapse show' : 'collapse'" 
                        data-bs-parent="#accordionComponent">
              <AccordionBody>
                  {{ c.description }}
              </AccordionBody>
            </Transition>
        </AccordionItem>

    </div>
  </template>
  
  <script>

  import AccordionItem from './AccordionItem.vue';
  import AccordionHeader from './AccordionHeader.vue';
  import AccordionBody from './AccordionBody.vue';
  const contents = Array(3)
    .fill()
    .map((_, i) => {
      return {
        accordionId: i+1,
        title: `title ${i}`,
        description: `description ${i}`,
        expanded: false,
      };
    });
  
  export default {
    name: "leve-accordion",
    
    components: {
      AccordionItem, AccordionHeader, AccordionBody
    },
    data() {
      return {
        contents,
      };
    },
  };
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