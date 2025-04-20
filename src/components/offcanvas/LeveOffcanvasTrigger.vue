<template>
    <LeveOffcanvasButton 
        :is-open="isOpen" 
        :button-class="buttonClass" 
        :button-style="buttonStyle"
        :disabled="isDisabled" 
        :aria-controls="ariaControls" 
        :aria-label="ariaLabel" 
        @toggle="handleToggle"
    >
        <slot>
            <span class="navbar-toggler-icon"></span>
        </slot>
    </LeveOffcanvasButton>
</template>

<script setup>
import { inject, computed } from 'vue';
import LeveOffcanvasButton from './LeveOffcanvasButton.vue';

const props = defineProps({
    buttonClass: {
        type: [String, Array, Object],
        default: ''
    },
    buttonStyle: {
        type: [String, Object],
        default: null
    },
    disabled: Boolean,
    ariaControls: String,
    ariaLabel: String,
    context: {
        type: String,
        default: 'leveOffcanvas'
    }
});

const offcanvasContext = inject(props.context, null);

const isOpen = computed(() => offcanvasContext?.isOpen?.value ?? false);
const isDisabled = computed(() => props.disabled || (offcanvasContext?.disabled?.value ?? false));

const handleToggle = () => {
    if (isDisabled.value) return;
    if (offcanvasContext) {
        offcanvasContext.toggle();
    } else {
        console.warn(`Contexto ${props.context} não encontrado`);
    }
};
</script>