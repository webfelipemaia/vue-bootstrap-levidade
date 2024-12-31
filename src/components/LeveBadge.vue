<template >
        <span v-if="isNotification"  :class="
                        [
                            'badge', 
                            constrast ? `text-bg-${type}` : `bg-${type}`,
                            `position-absolute  ${badgePosition.top} ${badgePosition.start} translate-middle p-2 border border-light rounded-circle`                        ]">
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
                return ['', 'top', 'middle', 'bottom', 'bottom-left', 'bottom-right', 'top-left'].includes(value);
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
            
            const positions = [
                { alignment: 'top', position: ['position-absolute top-0', 'start-100', 'translate-middle'] },
                { alignment: 'middle', position: ['position-absolute top-50', 'start-100', 'translate-middle ms-2'] },
                { alignment: 'bottom', position: ['position-absolute top-100', 'start-100', 'translate-middle'] },
                { alignment: 'bottom-left', position: ['position-absolute top-100', 'start-0', 'translate-middle'] },
                { alignment: 'bottom-right', position: ['position-absolute top-100', 'start-100', 'translate-middle'] },
                { alignment: 'top-left', position: ['position-absolute top-0', 'start-0', 'translate-middle'] }
            ];

            // Sets the position based on the given alignment
            const matchedPosition = positions.find(element => element.alignment === badgePosition);
            if (matchedPosition) {
                return {
                    top: matchedPosition.position[0],
                    start: matchedPosition.position[1],
                    translate: matchedPosition.position[2]
                };
            }
            // Returns empty if no position is found
            return {
                top: '',
                start: '',
                translate: ''
            };
        },

    },

    computed: {
        
         /**
         * Get the badge alignment
         */
        badgePosition() {
            const position = this.checkPosition(this.position)
            return this.defineBadgePosition(position)
        },

    },
};
</script>