<template>
  <button @click="createItem">New Alert</button>

  <div
      v-for="(item, index) in items"
      :key="index"
      class="alert alert-dismissible fade show alert-container"
      :type="item.type"
      :class="[{ [`alert-${item.type}`]: item.type }]"
      :isDismissible="('' || null) ? false : true"
      :style="setAlignment"
      >

      <h5 class="alert-heading">{{ item.heading }}</h5>
      <div class="alert-body">

        <div class="alert-body-content" :style="setFlexAlignment">
          <slot v-if="icon" name="icon">
            <i class="bi flex-shrink-0 me-2" :class="[{ [`bi-${icon}`]: icon }]"></i>
          </slot>
          <div> {{ item.text }} </div>

        </div>

        <hr v-if="item.comment">
        <div 
            v-if="item.comment" 
            class="alert-body-additional"
            :style="setFlexAlignment"
          > {{ item.comment }} </div>

      </div>
      <button v-if="isDismissible" @click="deleteItem(item.id)" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
</template>

<script>
import { defineComponent, onMounted, ref} from 'vue';
import { useAlertStore } from '../store/Alerts.ts';
import { fakeAlertData } from '../utils/items.ts'


/** 
 * Alerts are simple notifications designed to respond to typical user interaction actions.
 * @vue-prop {Boolean} icon - Define an icon by adding the suffix of the CSS class corresponding to the icon using web font. For example, for <i class="bi bi-arrow-right"></i>, in the icon property we set the value 'arrow-right'.
 * @vue-data {Boolean} [isDismissable=false] isDismissable - Define whether the notification is an alert.
 * @vue-data {Boolean} [timeout=5000] timeout - The time, in milliseconds, that the timer should wait before closing the alert. A value of 5000 is used by default. If a negative value is assigned, the alert is not rendered.
 * @vue-data {Object} alertStore - Sets the Notification store.
 * @vue-data {Object} items - ref(alertStore) makes the object reactive.
 * @vue-event {Object} createItem - Calls the createNewItem() method and pass object as function argument.
 * @vue-event {Object} deleteItem - Calls the deleteItem() method and the object id.
 * @vue-event {(string|null)} getLastIndex - Calls the getLastIndex() method and return the last index or null.
*/
export default defineComponent({
  
  name: "leve-alert",
    
  setup() {
    
    const alertStore = useAlertStore();
    const items = ref(alertStore);

    onMounted(() => {
      items.value = alertStore.items;      
    });

    function createItem() {
      if(this.checkTimeoutValue(this.timeout) === -1) {
        console.log(`The timeout property expects a numeric value greater than or equal to zero. ${this.timeout} was assigned.`);
      } else {
        alertStore.createNewItem(fakeAlertData());
      }
    }

    function deleteItem(id) {
      alertStore.deleteItem(id);
    }

    function getLastIndex() {
      const size = alertStore.items.length;
      if(size > 0) {
      const itemId = alertStore.items[size-1].id;
        return itemId;
      }
      return null;
    }

    return {
      items,
      createItem,
      deleteItem,
      getLastIndex,
    };
  },

  props: {
    icon: {
      type: String,
    },
    isDismissible: {
      type: Boolean,
      default: false
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
  },

  methods: {
    checkTimeoutValue(value) {
      const delayNumber = new Number(value);
      if(delayNumber.valueOf() < 0 ) {
        return -1;
      }
      return value;
    }
  },

  computed: {
    /**
     * Sets text alignment
     */
    setAlignment() {
      return {
        "text-align": this.alignment,
      }
    },
    
    /**
     * Align items in a Flex container
     * @example
     * // use left, center or right
     */
    setFlexAlignment() {
      return {
        "justify-content": this.alignment,
      }
    },
  },

  updated () {
    const lastId = this.getLastIndex();    
    if (lastId !== null) {
      setTimeout(() => {
        this.deleteItem(lastId);
      }, this.timeout);
    }
  }
    
});

</script>

<style>

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
    font-size: 1.1rem;
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