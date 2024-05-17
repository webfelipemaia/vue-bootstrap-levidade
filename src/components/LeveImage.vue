
<template>
    <img :src="path" :class="[type ? 'img-' + type : undefined, helperClass]" :alt="alt">
</template>
  
<script>
  import { defineComponent } from 'vue'

  export default defineComponent({    
    name: "leve-image",

    props: {
        helperStyle: {
            type: [Object,String]
        },
        helperClass: {
            type: [Object,String]
        },
        path: {
            type: String
        },
        alt: {
            type: String
        },
        type: {
            type: String,
            default: "fluid",
            validator(value) {
            return [ "fluid", "thumbnail"].includes(value);
            }
        },
    },

    data () {
      return {}
    },

    methods: {},
    computed: {},
    created () {},
    mounted () {},
    updated () {},
  });
</script>

<style>
</style>
