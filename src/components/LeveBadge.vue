<template >
        <span v-if="isNotification"  :class="
                        [
                            'badge', 
                            constrast ? `text-bg-${type}` : `bg-${type}`,
                            'position-absolute top-0 start-100 translate-middle p-2 border border-light rounded-circle'
                        ]">
            <span class="visually-hidden">{{ badgeHiddenText }}</span>
        </span>
        <span v-else  :class="
                        [
                            'badge', 
                            constrast ? `text-bg-${type}` : `bg-${type}`,
                            badgePosition.top,
                            badgePosition.start,
                            badgePosition.translate
                        ]">
            <slot></slot>
        </span>
</template>

<script>

/**
 * Badges are components intended for counting and labeling. Correspond to the size of the immediate parent element.
 */


 export default {
    name: "leve-badge",

    props: {
        isNotification: {
            type: Boolean,
            default: false
        },
        constrast: {
            type: Boolean,
            default: false
        },
        type: { 
            type: String,
            default: 'primary',
        },
        badgeHiddenText: { 
            type: String,
            default: '',
        },
        position: {
            type: String,
            default: '',
            validator(value) {
                return ['','top', 'middle', 'bottom',].includes(value)
            }
        },
    },

    data() {
      return { 
        
      }
    },

    methods: {

        /*
        * Checks whether a value for the prop has been set.
        */
        checkPosition(position) {
            return (
                    position === false || 
                    position === undefined ||
                    position === null) ? "" : position;
        },

        /**
         * Get badge alignment
         */
         defineBadgePosition(badgePosition) {
            // default Bootstrap toast positions
            let positions = [
                    { alignment : 'top', position : ['position-absolute top-0', 'start-100', 'translate-middle'] },
                    { alignment : 'middle', position : ['position-absolute top-50', 'start-100', 'translate-middle ms-2'] },
                    { alignment : 'bottom', position : ['position-absolute top-100', 'start-100', 'translate-middle'] }
                ]
                 
            // sets the position
            positions.map(function(element){
                if (element.alignment === badgePosition) {
                    badgePosition =  {
                        top : `${element.position[0]}`, 
                        start : `${element.position[1]}`, 
                        translate : `${element.position[2]}`
                    }
                } else {
                    return false
                }
            })
            return badgePosition;
        },
    },

    computed: {
        
         /**
         * Get the toast alignment
         */
        badgePosition() {
            const position = this.checkPosition(this.position)
            return this.defineBadgePosition(position)
        },

    },
};
</script>