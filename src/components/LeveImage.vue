<template>
    <img :src="path" 
         :class="[
            { 'card-img-top': cardImgTop , 'card-img-bottom': cardImgBottom },
            type ? 'img-' + type : '',
            cardClass 
         ]" 
         :alt="alt">
</template>
  
<script>
  import { defineComponent } from 'vue'

  export default defineComponent({    
    name: "leve-image",

    props: {
        helperStyle: {
            type: [Object,String]
        },
        cardClass: {
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
                return ["fluid", "thumbnail"].includes(value);
            }
        },
        cardImgTop: {
            type: Boolean,
            default: false
        },
        cardImgBottom: {
            type: Boolean,
            default: false
        },
    },
  });
</script>