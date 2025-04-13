<template>
  <div v-if="shouldRender">
    <!-- Slot para o botão toggle -->
    <slot name="toggle-button" :toggle="toggleOffcanvas" :is-open="isVisible">
      <LeveOffcanvasButton
        :is-open="isVisible"
        :button-class="buttonClass"
        :button-style="buttonStyle"
        @toggle="toggleOffcanvas"
      />
    </slot>

    <!-- OffCanvas Content -->
    <aside v-if="isMobileView" class="leve-offcanvas-wrapper">
      <div
        :class="[
          'leve-offcanvas',
          placementClass,
          offcanvasClass,
          { 'leve-offcanvas-show': isVisible }
        ]"
        :style="offcanvasStyle"
        tabindex="-1"
        :id="id"
        :aria-modal="isVisible"
        :role="isVisible ? 'dialog' : undefined"
        :aria-labelledby="`${id}Label`"
      >
        <div class="leve-offcanvas-header" :class="headerClass" :style="headerStyle">
          <h5 class="leve-offcanvas-title" :id="`${id}Label`">
            <slot name="header-title">{{ title || 'Menu' }}</slot>
          </h5>
          <button
            @click="toggleOffcanvas"
            type="button"
            class="leve-offcanvas-close"
            :class="closeButtonClass"
            :style="closeButtonStyle"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div class="leve-offcanvas-body" :class="bodyClass" :style="bodyStyle">
          <nav class="leve-offcanvas-nav">
            <ul class="leve-offcanvas-nav-list">
              <slot name="offcanvas-nav"></slot>
            </ul>
          </nav>
          <slot name="offcanvas-body"></slot>
        </div>
      </div>
      
      <!-- Backdrop -->
      <div 
        v-if="isVisible && showBackdrop" 
        class="leve-offcanvas-backdrop"
        :class="backdropClass"
        :style="backdropStyle"
        @click="toggleOffcanvas"
      ></div>
    </aside>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, onBeforeUnmount, useSlots } from 'vue'
import LeveOffcanvasButton from './LeveOffcanvasButton.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  placement: {
    type: String,
    default: 'start',
    validator: value => ['start', 'end', 'top', 'bottom'].includes(value)
  },
  id: {
    type: String,
    default: 'offcanvasNavbar'
  },
  showBackdrop: {
    type: Boolean,
    default: true
  },
  breakpoint: {
    type: [Number, String],
    default: 992,
    validator: value => {
      // Converte para número para validação
      const numValue = Number(value)
      return !isNaN(numValue) && numValue > 0
    }
  },
  // Props para estilização
  buttonClass: {
    type: [String, Array, Object],
    default: ''
  },
  buttonStyle: {
    type: [String, Object],
    default: null
  },
  offcanvasClass: {
    type: [String, Array, Object],
    default: ''
  },
  offcanvasStyle: {
    type: [String, Object],
    default: null
  },
  headerClass: {
    type: [String, Array, Object],
    default: ''
  },
  headerStyle: {
    type: [String, Object],
    default: null
  },
  closeButtonClass: {
    type: [String, Array, Object],
    default: ''
  },
  closeButtonStyle: {
    type: [String, Object],
    default: null
  },
  bodyClass: {
    type: [String, Array, Object],
    default: ''
  },
  bodyStyle: {
    type: [String, Object],
    default: null
  },
  backdropClass: {
    type: [String, Array, Object],
    default: ''
  },
  backdropStyle: {
    type: [String, Object],
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'toggle'])

const numericBreakpoint = computed(() => Number(props.breakpoint))
const isVisible = ref(props.modelValue)
const windowWidth = ref(window.innerWidth)
const hasToggleButton = ref(false)

const shouldRender = computed(() => hasToggleButton.value || isMobileView.value)
const isMobileView = computed(() => windowWidth.value < props.breakpoint)

const placementClass = computed(() => `leve-offcanvas-${props.placement}`)

const toggleOffcanvas = () => {
  isVisible.value = !isVisible.value
  emit('update:modelValue', isVisible.value)
  emit('toggle', isVisible.value)
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  // Fecha o offcanvas quando muda para desktop
  if (!isMobileView.value && isVisible.value) {
    toggleOffcanvas()
  }
}

// Verifica se o slot toggle-button está sendo usado
const checkSlot = () => {
  const slot = useSlots()['toggle-button']
  hasToggleButton.value = !!slot
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  checkSlot()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

watch(() => props.modelValue, (newVal) => {
  isVisible.value = newVal
})
</script>

<style>
.leve-offcanvas-wrapper {
  position: relative;
}

.leve-offcanvas {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1045;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  visibility: hidden;
  background-color: #fff;
  background-clip: padding-box;
  transition: transform 0.3s ease-in-out;
}

.leve-offcanvas-start {
  left: 0;
  width: 400px;
  max-width: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
}

.leve-offcanvas-end {
  right: 0;
  width: 400px;
  max-width: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
}

.leve-offcanvas-top {
  top: 0;
  right: 0;
  left: 0;
  height: 30vh;
  max-height: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
}

.leve-offcanvas-bottom {
  right: 0;
  left: 0;
  bottom: 0;
  height: 30vh;
  max-height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  transform: translateY(100%);
}

.leve-offcanvas-show {
  transform: none !important;
  visibility: visible;
}

.leve-offcanvas-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
}

.leve-offcanvas-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.leve-offcanvas-close {
  padding: 0.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.leve-offcanvas-body {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
}

.leve-offcanvas-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.leve-offcanvas-nav-list .nav-item {
  padding: 0.5rem 0;
}

.leve-offcanvas-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>