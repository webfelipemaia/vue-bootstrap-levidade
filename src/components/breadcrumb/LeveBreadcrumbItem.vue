<template>
    <li class="breadcrumb-item" 
        :class="[isActive ? 'active' : '']"
        :aria-current="current ? 'page' : undefined">

        <slot v-if="icon" name="icon">
            <i class="bi" :class="[{ [`bi-${icon}`]: icon }]"></i>
        </slot>

        <template v-if="link">
            <a :href="link">
                <slot></slot>
            </a>
        </template>
            
        <template v-else>
            <slot></slot>
        </template>

    </li>
</template>

<script>
    /** 
     * The menu item that should be added to the Breadcrumb navigation.
     * @vue-prop {String} link - When defined, activates a link to the item.
     * @vue-prop {String} icon - When defined, it displays an icon to the left of the text.
     * @vue-prop {Boolean} current - [Aria] Applied to the last menu item, it indicates that it is the current page..
     * @vue-prop {Boolean} isActive - [CSS] Sets the current item in the menu hierarchy.
     * 
     */
    export default {
        name: "leve-breadcrumb-item",

        props: {
            link: {
                type: String,
            },
            icon: {
                type: String,
                default: ""
            },
            current: {
                type: Boolean,
                default: false
            },
            isActive: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {};
        },
    };
</script>

<style lang="scss">
    .breadcrumb-item {
        .bi {
            padding-right: 0.275rem;
        }
    }
</style>