<template>
  <div
    class="accordion"
    :class="accordionFlush ? 'accordion-flush' : ''"
    :id="id"
  >
    <LeveAccordionItem
      v-for="(item, index) in contents"
      :id="id + index"
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
  id: {
    type: String,
    default: 'accordionId',
  },
});

const contents = ref(props.items);
const groupId = ref(null);
const currentId = ref(null);

onMounted(() => {
  // Garante que o groupId seja único para cada instância do componente
  groupId.value = `accordion_${props.id}`;
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
