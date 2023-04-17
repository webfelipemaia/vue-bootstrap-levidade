<template>
  <button @click="createItem">New Toast</button>
  <div
      v-for="(item, index) in items"
      :key="index"
      class="toast-container p-3"
      :class="toastPosition"
      style="background-color: #f5f5f5; padding: 10px; margin-bottom: 10px; margin-top: 10px;"
    >
      <code>{{ item }}</code>
      <button @click="deleteItem(item.id)">Delete</button>
      <button @click="updateItem(item.id)">Update</button>
    </div>
    <div class="toast-container p-3" :class="toastPosition">
        <LeveNotification 
            v-for="(item,index) in items"
            :key="index"
            :text="item.text"
            :comment="item.comment"
            :type="item.type"
            isAlert="true"
            ></LeveNotification>   
    </div>
    
</template>

<script>
import { defineComponent, onMounted, ref} from "vue";
import { useNotificationStore } from '../store/Notifications.ts';
import { fakeNotificationData } from '../utils/items.ts';
import LeveNotification from './LeveNotificacion.vue';


/** 
 * Toasts are simple notifications created either statically or dynamically.
 * @vue-prop {Boolean} toastIsVisible 
 * @vue-data {Object} notificationStore - Sets the Notification store.
 * @vue-data {Object} items - ref(notificationStore) makes the object reactive.
 * @vue-event {Object} createItem - Calls the createNewItem() method and pass object as function argument.
 * @vue-event {Object} deleteItem - Calls the deleteItem() method and the object id.
 * @vue-event {Object} updateItem - Calls the updateItem() method and pass the object id.
 * @vue-event {(string|null)} getLastIndex - Calls the getLastIndex() method and return the last index or null.
*/
export default defineComponent({
  
  name: "leve-toast",
    
  setup() {
    
    const notificationStore = useNotificationStore();
    const items = ref(notificationStore);

    onMounted(() => {
      items.value = notificationStore.items;      
    });

    function createItem() {
      notificationStore.createNewItem(fakeNotificationData());
    }

    function deleteItem(id) {
      notificationStore.deleteItem(id);
    }

    function updateItem(id) {
      notificationStore.updateItem(id, fakeNotificationData());
    }

    function getLastIndex() {
      const size = notificationStore.items.length;
      if(size > 0) {
      const itemId = notificationStore.items[size-1].id;
        return itemId;
      }
      return null;
    }

    return {
      items,
      createItem,
      deleteItem,
      updateItem,
      getLastIndex,
    };
  },

  props: {
    toastIsVisible: Boolean,
    position: { 
      type: Object,
      default() {
        return {start: null, end: null}
      },
    },
  },
    
  components: { LeveNotification },
    
  updated () {
    console.log(Object.keys(this.position).length)
    const lastId = this.getLastIndex();
    if (lastId !== null) {
      setTimeout(() => {
        this.deleteItem(lastId);
      }, 5000);
    }
  },

  computed: {
    toastPosition() {
      return this.position;
    },
  },
    
});

</script>