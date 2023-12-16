<template>
        <span :class="`badge bg-${type}`" :position="getPosition"><slot></slot></span>
    
</template>

<script>

/**
 * Badges are components intended for counting and labeling. Correspond to the size of the immediate parent element.
 */


 export default {
    name: "leve-badge",

    props: {
        type: { 
            type: String,
            default: 'primary',
        },
        text: { 
            type: String,
            default: '',
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['left', 'center', 'right',].includes(value)
            }
        },
    },

    data() {
      return { }
    },

    methods: {},

    computed: {
        /**
         * Get badge alignment
         */
        getAlignment() {
            
            // default Bootstrap toast positions
            let positions = [
                        { alignment : 'top', position : ['top-0', 'start-100', 'translate-?'] },
                        { alignment : 'middle', position : ['top-0', 'start-100', 'translate-?'] },
                        { alignment : 'bottom', position : ['bottom-0', 'end-0', 'translate-?'] }
                      ]
            return 'background-color: ' + this.hovering ? this.color: 'red';
        },
        setPlacement() {
            return (
                    this.placement === false || 
                    this.placement === undefined ||
                    this.placement === null) ? "top" : this.placement;
        }
    },
};
</script>