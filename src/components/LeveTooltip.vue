<template :link=link :hover=hover :placement=placement>
        <LevePopper :hover=setHover arrow :placement=setPlacement>
            <slot></slot>
            <template #content>
            <div>{{ text }}</div>
            </template>
        </LevePopper>
</template>
  
<script>
export default {
    name: "leve-tooltip",

    props: {
        hover: {
            type: Boolean
        },
        text: { 
            type: String,
            default: '',
        },
        placement: { 
            type: String,
            validator(value) {
                return ['top', 'right', 'bottom','left'].includes(value)
            }
        }, 
    },

    data() {
      return { }
    },

    methods: {},

    computed: {
        setHover() {
            return this.hover === false ? false : true;
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
  
<style>

</style>