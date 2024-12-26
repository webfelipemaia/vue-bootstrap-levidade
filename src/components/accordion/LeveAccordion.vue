<template>
  <div
    id="accordionComponent"
    class="accordion"
    :class="accordionFlush ? 'accordion-flush' : ''"
  >
    <LeveAccordionItem
      v-for="(item, index) in contents"
      :id="'accordion' + index"
      :item="item"
      :groupId="groupId"
      :key="item.title"
      @accordion-opened="getAccordionId"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LeveAccordionItem from './LeveAccordionItem.vue';

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  accordionFlush: {
    type: Boolean,
    default: false,
  },
  items: {
    type: [Array, Object],
    required: false,
  },
});

const contents = ref(props.items);
const groupId = ref(null);
const currentId = ref(null);

onMounted(() => {
  groupId.value = "accordionComponent";
});

function getAccordionId(currentIdValue) {
  currentId.value = currentIdValue;
  if (!props.multiple) {
    closeOtherItems(currentIdValue);
  }
}

function closeOtherItems(currentIdValue) {
  contents.value.forEach((element) => {
    if (element.accordionId !== currentIdValue) {
      element.expanded = false;
    }
  });
}
</script>