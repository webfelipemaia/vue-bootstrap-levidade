<template>

  <button v-if="!isAlert" @click="createItem" :class="{ hide: !isOpen }">New Alert</button>

    <!-- Alerts -->
  
    <div 
        v-if="isAlert"
        class="alert alert-dismissible fade alert-container"
        :class="[{ [`alert-${alertType || singleAlert.type}`]: alertType || singleAlert.type },{ show: isOpen },{ hide: !isOpen }]"
        :isDismissible="('' || null) ? false : true"
        :style="setAlignment"
        role="alert"
        >

        <h4 class="alert-heading">
          <slot name="header">{{ headingText || singleAlert.heading }}</slot>
        </h4>

        <div class="alert-body">
       
          <div class="alert-body-content" :style="setFlexAlignment">
            <slot v-if="icon" name="icon">
              <i class="bi flex-shrink-0 me-2" :class="[{ [`bi-${icon}`]: icon }]"></i>
            </slot>
            <div>
              <slot>{{ bodyText || singleAlert.text }}</slot>
            </div>

          </div>
          <hr v-if="hasFooterSlotContent|| singleAlert.text">
          
          <div class="alert-body-additional" :style="setFlexAlignment">            
            <slot name="footer">{{ commentText || singleAlert.comment }}</slot>
          </div>

        </div>
        
        <button v-if="isDismissible" @click="isOpen = !isOpen" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        
    </div>

    <!-- System notification -->
    <div
      v-for="(item, index) in filteredItems"
      :key="index"
      class="alert alert-dismissible fade show alert-container"
      :class="[{ [`alert-${alertType || singleAlert.type}`]: alertType || singleAlert.type }]"
      :isDismissible="('' || null) ? false : true"
      :style="setAlignment"
      >
      <h4 class="alert-heading">{{ item.heading }}</h4>
      <div class="alert-body">

        <div class="alert-body-content" :style="setFlexAlignment">
          <slot v-if="icon" name="icon">
            <i class="bi flex-shrink-0 me-2" :class="[{ [`bi-${icon}`]: icon }]"></i>
          </slot>
          <div> {{ item.text }} </div>
        </div>

        <hr v-if="hasFooterSlotContent || item.comment">
        <div 
            v-if="item.comment" 
            class="alert-body-additional"
            :style="setFlexAlignment"
          > {{ item.comment }} </div>

      </div>
      <button v-if="isDismissible" @click="deleteItem(item.id)" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
</template>

<script setup>
import { defineProps, onMounted, onUpdated, getCurrentInstance, ref, computed, useSlots} from 'vue';
import { useAlertStore } from '../store/Alerts.ts';

// Alerts are simple notifications designed to respond to typical user interaction actions.
const props = defineProps ({
    icon: {
      type: String,
    },
    headingText: {
      type: String,
    },
    bodyText: {
      type: String,
    },
    commentText: {
      type: String,
    },
    alertType: {
      type: String,
    },
    type: {
      type: [Object,String],
      default: 'primary'
    },
    isDismissible: {
      type: Boolean,
      default: false
    },
    isAlert: {
      type: Boolean,
      default: true
    },    
    timeout: {
      type: Number,
      default: 5000,
    },
    alignment: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'center', 'right',].includes(value)
      }
    },
    singleAlert: {
      type: Object,
      default() {
        return { type: 'primary', heading: '', text: '', comment: '',uid: ''}
      }
    }
  })
   
    const alertStore = useAlertStore();
    const items = ref([]);
    const isOpen = ref(true);
    const instance = getCurrentInstance();
    const uid = instance?.uid;
    const slots = useSlots();
    
    // Verifies that the slot footer has received data. If the answer is yes, the dividing line is displayed.
    const hasFooterSlotContent = computed(() => slots.footer && slots.footer().length > 0);

    // Configures the item display for the source component.
    // Eliminates duplication of display
    const filteredItems = computed(() => {
      return items.value.filter(item => item.uid === uid);
    });

    // Sets text alignment
    const setAlignment = computed(() => {
      return { "text-align": props.alignment }
    });

    // Align items in a Flex container
    const setFlexAlignment = computed(() => {
      return {  "justify-content": props.alignment }
    });

    // Removes alert after x seconds (see props.timeout)
    onUpdated(() => { 
      const lastId = getLastIndex();    
      if (lastId !== null) {
        setTimeout(() => {
          deleteItem(lastId);
        }, props.timeout);
      }
    });

    // Start the items
    onMounted(() => {
      items.value = alertStore.items;
    });

    // Create a notification
    function createItem() {
      if(checkTimeoutValue(props.timeout) === -1) {
        console.log(`The timeout property expects a numeric value greater than or equal to zero. ${this.timeout} was assigned.`);
      } else {
        alertStore.createNewItem(props.singleAlert,uid)
      }
    }

    // Delete a notification
    function deleteItem(id) {
      alertStore.deleteItem(id);
    }

    // Get the id of the last added item
    function getLastIndex() {
      const size = alertStore.items.length;
      if(size > 0) {
      const itemId = alertStore.items[size-1].id;
        return itemId;
      }
      return null;
    }

    // Check the value of timeout
    function checkTimeoutValue(value) {
      const delayNumber = new Number(value);
      if(delayNumber.valueOf() < 0 ) {
        return -1;
      }
      return value;
    }
  

</script>

<style>

  .hide {
    display: none !important;
  }

  .alert-container {
    display: flex;
    flex-direction: column;
  }

  .alert-body-content {
    display: flex;
    flex-direction: row;
    justify-content: inherit;
  }

  .alert-body-additional {
    display: flex;
    flex-direction: column;
    justify-content: inherit;
  }

  .alert-heading {
    font-weight: 300;
    font-size: 1.2rem;
    text-align: inherit;
  }

  .alert-body {
    display: flex;
    flex-direction: column;
  }

  .alert-body hr {
    margin: 0.25rem;
  }

</style>