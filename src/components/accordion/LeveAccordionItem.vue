<template>
    <div class="accordion-item">
      <LeveAccordionHeader>
        <button
          @click="toggleItem(item)"
          class="accordion-button"
          :class="item.expanded ? '' : 'collapsed'"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'collapse' + `${item.accordionId}`"
          :aria-expanded="item.expanded"
          :aria-controls="'collapse' + `${item.accordionId}`"
        >
          {{ item.title }}
        </button>
      </LeveAccordionHeader>
      <transition name="accordion-item">
        <LeveAccordionBody
          v-if="item.expanded"
          :id="'collapse' + `${item.accordionId}`"
          class="accordion-collapse"
          :class="item.expanded ? 'collapse show' : 'collapse'"
          data-bs-parent="#accordionComponent"
        >
          <slot>
            {{ item.description }}
          </slot>
        </LeveAccordionBody>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { defineEmits, defineProps } from 'vue';
  import LeveAccordionHeader from './LeveAccordionHeader.vue';
  import LeveAccordionBody from './LeveAccordionBody.vue';
  
  defineProps({
    item: {
      type: Object,
      required: true,
    },
  });
  
  const emit = defineEmits(['accordion-opened']);
  
  function toggleItem(item) {
    item.expanded = !item.expanded;
    emit('accordion-opened', item.accordionId);
  }
  </script>  