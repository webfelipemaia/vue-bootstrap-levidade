<template>
  <div class="dropdown" :class="{ show: isShow }" ref="dropdown">
    <button 
      v-if="!btnSplit" 
      class="btn dropdown-toggle" 
      :class="[btnClass, sizeClass]" 
      type="button" 
      data-toggle="dropdown"
      aria-haspopup="true" 
      :id="id" 
      ref="button" 
      @click="switchState" 
      :aria-expanded="isShow">
      {{ title }}
    </button>
    <div class="btn-group">
      <button 
        v-if="btnSplit" 
        class="btn" 
        :class="[btnClass, sizeClass]" 
        type="button" 
        data-toggle="dropdown" 
        aria-haspopup="true"
        :id="id" 
        ref="button">
        {{ title }}
      </button>
      <button 
        v-if="btnSplit" 
        class="btn dropdown-toggle dropdown-toggle-split" 
        :class="[btnClass, sizeClass]" 
        type="button"
        data-toggle="dropdown" 
        aria-haspopup="true" 
        :aria-expanded="isShow" 
        @click="switchState">
        <span class="visually-hidden">Toggle Dropdown</span>
      </button>
    </div>
    <div 
      class="dropdown-menu" 
      ref="popup" 
      data-bs-popper="static" 
      :class="dropdownClass" 
      :aria-labelledby="id"
      @click="switchState">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { createPopper } from '@popperjs/core';
import { useEventListener } from '@vueuse/core';

let dropdownCounter = 0;
const getIdGenerator = () => "dropdown-" + dropdownCounter++;

const Placement = [
  "auto", "auto-start", "auto-end", "top", "top-start", "top-end",
  "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end",
  "left", "left-start", "left-end",
];

const DropDownEvents = ["click"];
if (window.ontouchstart || navigator.msMaxTouchPoints > 0) {
  DropDownEvents.push("touchstart");
}

const DropDownInstances = [];
let isAdded = false;

const clickOutSide = (event) => {
  for (let i in DropDownInstances) {
    const el = DropDownInstances[i].el;
    const fn = DropDownInstances[i].fn;
    if (event.target !== el && !el.contains(event.target)) {
      processFN(fn, event);
    }
  }
};

const processFN = (fn, event) => {
  if (!fn) return;
  setTimeout(() => fn(event), 10);
};

const addDropdownInstances = () => {
  if (!isAdded) {
    for (let i in DropDownEvents) {
      useEventListener(DropDownEvents[i], clickOutSide);
    }
    isAdded = true;
  }
};

const RemoveListeners = () => {
  if (DropDownInstances.length > 0) return;
  for (let i in DropDownEvents) {
    document.removeEventListener(DropDownEvents[i], clickOutSide);
  }
};

// Props
const props = defineProps({
  title: String,
  placement: String,
  btnClass: String,
  btnSplit: Boolean,
  dropdownClass: String,
  offset: {
    type: String,
    default: "0,0"
  },
  size: {
    type: String,
    default: null,
    validator: (value) => ["sm", "lg", null].includes(value),
  }
});

// Reactive State
const isShow = ref(false);
const id = ref(getIdGenerator());
const button = ref(null);
const popup = ref(null);
const dropdown = ref(null);

// Computed Properties
const dropdownClass = computed(() => {
  let btnClass = '';
  if (isShow.value) btnClass += ' show';
  if (props.dropdownClass) btnClass += ` ${props.dropdownClass}`;
  return btnClass;
});

const sizeClass = computed(() => {
  if (props.size === "sm") return "btn-sm";
  if (props.size === "lg") return "btn-lg";
  return "";
});

// Methods
const switchState = () => {
  isShow.value = !isShow.value;
  const position = Placement.includes(props.placement) ? props.placement : 'bottom-start';

  if (isShow.value) {
    const [offsetX, offsetY] = props.offset.split(',').map(Number);
    createPopper(button.value, popup.value, {
      placement: position,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [offsetX, offsetY],
          },
        },
      ],
    });
  }
};

// Lifecycle Hooks
onMounted(() => {
  addDropdownInstances();
  DropDownInstances.push({
    el: dropdown.value,
    fn: () => {
      isShow.value = false;
    },
  });
});

onBeforeUnmount(() => {
  for (let i in DropDownInstances) {
    if (DropDownInstances[i].el === dropdown.value) {
      DropDownInstances.splice(i, 1);
    }
  }
  RemoveListeners();
});
</script>
