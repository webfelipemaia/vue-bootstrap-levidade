<template>
  <button v-if="!isAlert" 
          @click="isOpen = !isOpen" 
          :class="[{
                    [`btn btn-${alertType || singleAlert.type} mb-3`]: alertType || singleAlert.type}, 
                    { hideAlert: !isOpen }]"
  >
    {{ btnText }}
  </button>

  <div v-if="isAlert && isOpen" 
      class="alert alert-dismissible fade alert-container" 
      :class="[{
                [`alert-${alertType || singleAlert.type}`]: alertType || singleAlert.type}, 
                { show: isOpen }]" 
                :isDismissible="isDismissible" 
                :style="setAlignment" 
                role="alert"
  >
    <div class="alert-wrapper">

      <div class="alert_icon-area" 
          :class="{
                    'collapsed': !hasIcon,
                    [`icon-align-${iconAlign}`]: hasIcon 
                  }"
      >
        <slot v-if="hasIcon" name="icon">
          <i class="bi flex-shrink-0 me-2" :class="[{ [`bi-${icon}`]: icon }]"></i>
        </slot>
      </div>

      <div class="alert_content-area" :class="{ 'no-icon-margin': !hasIcon }">
        <h4 class="alert-heading" v-if="headingText || singleAlert.heading || hasHeaderSlotContent">
          <slot name="header">{{ headingText || singleAlert.heading }}</slot>
        </h4>

        <div class="alert-body">
          <div class="alert-body-content" :style="setFlexAlignment">
            <div class="alert-text-content">
              <slot>{{ bodyText || singleAlert.text }}</slot>
            </div>
          </div>

          <hr v-if="hasFooterSlotContent || commentText || singleAlert.comment || hasActions">

          <div class="alert-body-additional" :style="setFlexAlignment">
            <div class="alert-text-footer">
              <slot name="footer">{{ commentText || singleAlert.comment }}</slot>
            </div>

            <div class="alert-actions mt-3" 
                  v-if="hasActions" 
                  :style="setFlexAlignment"
            >
              <a v-if="showPrimaryAction" 
                  :href="effectivePrimaryAction.url" 
                  class="btn me-2"
                  :class="`btn-${effectivePrimaryAction.type}`"
              >
                {{ effectivePrimaryAction.text }}
              </a>

              <a v-if="showSecondaryAction" 
                  :href="effectiveSecondaryAction.url" 
                  class="btn"
                  :class="`btn-${effectiveSecondaryAction.type}`"
              >
                {{ effectiveSecondaryAction.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button v-if="isDismissible" 
            @click="isOpen = false" 
            type="button" 
            class="btn-close" 
            aria-label="Close"
    ></button>
  </div>
</template>

<script setup>
import { ref, computed, useSlots } from 'vue';

const props = defineProps({
  icon: {
    type: String,
  },
  iconAlign: {
    type: String,
    default: 'top',
    validator(value) {
      return ['top', 'center', 'bottom'].includes(value)
    }
  },
  headingText: {
    type: String,
  },
  bodyText: {
    type: String,
  },
  commentText: {
    type: String,
  },
  alertType: {
    type: String,
  },
  type: {
    type: [Object, String],
    default: 'primary'
  },
  isDismissible: {
    type: Boolean,
    default: false
  },
  isAlert: {
    type: Boolean,
    default: true
  },
  timeout: {
    type: Number,
    default: 0,
  },
  alignment: {
    type: String,
    default: 'left',
    validator(value) {
      return ['left', 'center', 'right'].includes(value)
    }
  },
  singleAlert: {
    type: Object,
    default() {
      return {
        type: 'primary',
        heading: '',
        text: '',
        comment: '',
        primaryAction: null,
        secondaryAction: null
      }
    }
  },
  btnText: {
    type: String,
    default: 'Notify with Alert'
  },
  primaryAction: {
    type: Object,
    default: null
  },
  secondaryAction: {
    type: Object,
    default: null
  }
});

const slots = useSlots();
const isOpen = ref(true);

// Computed Properties
const hasIcon = computed(() => {
  return props.icon || (slots.icon && slots.icon().length > 0);
});

const hasFooterSlotContent = computed(() => {
  return slots.footer && slots.footer().length > 0
});

const hasHeaderSlotContent = computed(() => {
  return slots.header && slots.header().length > 0;
});

const effectivePrimaryAction = computed(() => {
  const action = props.primaryAction || props.singleAlert.primaryAction;
  return {
    url: action?.url || '#',
    text: action?.text || '',
    type: action?.type || 'primary'
  };
});

const effectiveSecondaryAction = computed(() => {
  const action = props.secondaryAction || props.singleAlert.secondaryAction;
  return {
    url: action?.url || '#',
    text: action?.text || '',
    type: action?.type || 'secondary'
  };
});

const showPrimaryAction = computed(() => {
  return Boolean(effectivePrimaryAction.value.text);
});

const showSecondaryAction = computed(() => {
  return Boolean(effectiveSecondaryAction.value.text);
});

const hasActions = computed(() => {
  return showPrimaryAction.value || showSecondaryAction.value;
});

const setAlignment = computed(() => {
  return { "text-align": props.alignment }
});

const setFlexAlignment = computed(() => {
  const align = props.alignment;
  const justify =
    align === 'left' ? 'flex-start' :
      align === 'center' ? 'center' : 'flex-end';

  const textAlign =
    align === 'left' ? 'left' :
      align === 'center' ? 'center' : 'right';

  return {
    'justify-content': justify,
    'text-align': textAlign,
    'width': '100%',
    'margin-left': hasIcon.value ? '0' : '0'
  };
});

// Auto-close after timeout if dismissible
if (props.isDismissible && props.timeout > 0) {
  setTimeout(() => {
    isOpen.value = false;
  }, props.timeout);
}
</script>

<style scoped>
.hideAlert {
  display: none;
}

.alert-container {
  transition: opacity 0.3s ease;
}

.alert-container.show {
  opacity: 1;
}

.alert-container:not(.show) {
  opacity: 0;
}

.alert-wrapper {
  display: flex;
  width: 100%;
}

/* Icon */
.alert_icon-area {
  display: flex;
  flex-shrink: 0;
  padding-right: 1rem;
}

/* Alignment */
.icon-align-top {
  align-items: flex-start;
}

.icon-align-center {
  align-items: center;
}

.icon-align-bottom {
  align-items: flex-end;
}


.alert_icon-area.collapsed {
  width: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

/* Content */
.alert_content-area {
  flex-grow: 1;
  margin-left: 1rem;
}

.alert_content-area.no-icon-margin {
  margin-left: 0;
}

/* Alert body */
.alert-body-content,
.alert-body-additional {
  display: flex;
  align-items: center;
}

.alert-body-content>div,
.alert-body-additional>div,
.alert-actions {
  width: 100%;
}

.alert-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.alert-actions .btn {
  text-align: left;
}

/* Mobile */
@media (max-width: 576px) {
  .alert_icon-area {
    padding-right: 0.5rem;
  }

  .alert_content-area {
    margin-left: 0.5rem;
  }

  .alert_content-area.no-icon-margin {
    margin-left: 0;
  }
}
</style>