<template >
    <nav aria-label="breadcrumb" :style="style">
        <ol class="breadcrumb">
            <slot></slot>
        </ol>    
    </nav>
</template>

<script>

    /** 
     * Menu that indicates the location of the current page within a navigation hierarchy.
     * @vue-prop {String} divider - Replaces the standard splitter. It can be a unicode icon or an SVG.
     * 
     */
    export default {
        name: "leve-breadcrumb",
        props: {            
            divider: {
                type: String,
            },
        },
        data() {
            return {}
        },
            
        computed: {
            /**
             * Returns the icon defined as a separator via props.
            */
            style () {
                return { '--bs-breadcrumb-divider': this.divider ? `'${this.divider}'` : ''};
            },
        },
    };
</script>