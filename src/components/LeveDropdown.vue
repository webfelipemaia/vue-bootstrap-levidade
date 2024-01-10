<template>
    <template v-if="items">
        <div class="dropdown">
            <button @click="toggleContent"
                    class="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    :aria-expanded="isOpen">
                Dropdown button
            </button>
            <ul class="dropdown-menu" :class="{show: isOpen}">
                <li v-for="(item,index) in data" :key="index">
                    <a class="dropdown-item" href="javascript:void(0)">{{item}}</a>
                </li>
            </ul>
        </div>
    </template>
  
    <template v-else>
        <p>handle items here</p>
    </template>
</template>
  
<script>
  import { defineComponent } from 'vue'

  export default defineComponent({    

    name: "leve-dropdown",

    props: { 
        items: {
            type: [Object, Array]
        } 
    },
    data () {
      return {
        data: [],
        isOpen: false
      }
    },

    methods: {
        getAll() {
            this.data = this.items
        },
        toggleContent() {
            this.isOpen = !this.isOpen
        },
        /**
         * Sets dropdown direction
         */
        defineDropdownDirection(toastPosition) {
      
            // default Bootstrap Dropdown directions
            let positions = [
                            { direction : 'centered', position : '' },
                            { direction : 'dropup', position : '' },
                            { direction : 'dropup-centered', position : '' },
                            { direction : 'dropend', position : '' },
                            { direction : 'dropstart', position : '' },
            ]
        }
    },
    // computed: {},
    // created () {},
    mounted () {
        this.getAll()
    },
    // updated () {},
  });
</script>

<style>
</style>
