<template>
    <div class="accordion-item">
        <LeveAccordionHeader>
              <button   @click="toggleItem(item);" 
                        class="accordion-button" 
                        :class="item.expanded ? '' : 'collapsed'" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        :data-bs-target="'collapse'+`${item.accordionId}`" 
                        :aria-expanded="item.expanded" 
                        :aria-controls="'collapse'+`${item.accordionId}`">
                {{ item.title }}
              </button>
              
        </LeveAccordionHeader>
        <transition name="accordion-item">
            <LeveAccordionBody v-if="item.expanded" 
                            :id="'collapse'+`${item.accordionId}`" 
                            class="accordion-collapse" 
                            :class="item.expanded ? 'collapse show' : 'collapse'" 
                            data-bs-parent="#accordionComponent">
                {{ item.description }}
            </LeveAccordionBody>
        </transition>
    </div>
</template>

<script>
import LeveAccordionHeader from './LeveAccordionHeader.vue';
import LeveAccordionBody from './LeveAccordionBody.vue';

export default {

    name: "leve-accordion-item",        

    components: {
        LeveAccordionHeader, LeveAccordionBody
    },

    props: {
        item: {
            type: Object,
        },
    },

    data () {
        return {
            isActive: null,
        }
    },
    
    methods: {

        toggleItem (item) {
            item.expanded = !item.expanded
            this.$emit('accordion-opened',item.accordionId)

        },
    }
}
</script>

<style lang="scss" scoped>

.accordion-item-enter-active {
    will-change: height;
    transition: height 0.6s ease-in;
}

.accordion-item-leave-active {
    height : 0 !important;
}
</style>