<template>
    <img 
      :src="path" 
      :class="[
        { 'card-img-top': cardImgTop, 'card-img-bottom': cardImgBottom },
        type ? 'img-' + type : '',
        cardClass 
      ]"
      :style="cardStyle"
      :alt="alt"
    />
  </template>
  
  <script setup>

 defineProps({
    cardClass: {
      type: [Object, String],
      default: null
    },
    cardStyle: {
      type: [Object, String],
      default: null
    },
    path: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "fluid",
      validator: (value) => ["fluid", "thumbnail"].includes(value)
    },
    cardImgTop: {
      type: Boolean,
      default: false
    },
    cardImgBottom: {
      type: Boolean,
      default: false
    }
  });
  </script>
  