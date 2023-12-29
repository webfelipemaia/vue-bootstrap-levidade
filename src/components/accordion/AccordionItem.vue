<template>
    <div class="accordion-item">
        <AccordionHeader>
              <button  @click="toggleItem(item);" 
                        class="accordion-button" 
                        :class="item.expanded ? '' : 'collapsed'" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        :data-bs-target="'collapse'+`${item.accordionId}`" 
                        :aria-expanded="item.expanded" 
                        :aria-controls="'collapse'+`${item.accordionId}`">
                  {{ item.title }}
              </button>
              
        </AccordionHeader>
            <transition
                name="accordion-item"
        @enter="startTransition"
        @after-enter="endTransition"
        @before-leave="startTransition"
        @after-leave="endTransition">

            <AccordionBody v-if="item.expanded" 
                      :id="'collapse'+`${item.accordionId}`" 
                      class="accordion-collapse" 
                      :class="item.expanded ? 'collapse show' : 'collapse'" 
                      data-bs-parent="#accordionComponent">
                {{ item.description }}
            </AccordionBody>

        </transition>
    </div>
</template>

<script>

import AccordionHeader from './AccordionHeader.vue';
import AccordionBody from './AccordionBody.vue';

export default {

    name: "accordion-item",        
        
    props: {
        item: {
            type: Object,
        },
        dataBsParent: {
            type: String,
        },
    },

    components: {
        AccordionHeader, AccordionBody
    },

        data() {
            return {
            isActive: null,
            }
        },
        methods:{

            toggleItem(item) {
                item.expanded = !item.expanded
            },

            startTransition(el) {
            el.style.height = el.scrollHeight + 'px'
            },
            
            endTransition(el) {
            el.style.height = ''
            }
        }
    }
</script>

<style>
.accordion-item-enter-active, 
.accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter, 
.accordion-item-leave-to {
  height: 0 !important;
}
</style>