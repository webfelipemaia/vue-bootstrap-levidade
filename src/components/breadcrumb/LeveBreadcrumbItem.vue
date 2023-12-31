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