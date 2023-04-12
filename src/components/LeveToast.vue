<template>
  <button @click="createItem">New Item</button>
  <div
      v-for="(item, index) in items"
      :key="index"
      style="background-color: #f5f5f5; padding: 10px; margin-bottom: 10px; margin-top: 10px;"
    >
      <code>{{ item }}</code>
      <button @click="deleteItem(item.id)">Delete</button>
      <button @click="updateItem(item.id)">Update</button>
    </div>
    <div class="toast-container  position-static bottom-0 end-0 p-3">      
        <LeveNotification 
            v-for="(item,index) in items"
            :key="index"
            :text="item.text"
            :comment="item.comment"
            :type="item.type"
            @close-item-toast="(id) => toastisClosed(id)"
            ></LeveNotification>   
    </div>
    
</template>

<script>
import { defineComponent, onMounted, ref} from "vue";
import { useMainStore } from '../store/Notifications.ts';
import { fakeNotificationData } from '../models/items.ts';
import LeveNotification from './LeveNotificacion.vue';


/** 
 * @vue-prop {Boolean} toastIsVisible 
 * @vue-updated @return {undefined} - Deletes a notification item
 * @vue-mounted @return {Object}
 * @vue-event {Object} createItem - Calls the createNewItem() method and pass object as function argument. @see createNewItem()
 * @vue-event {Object} deleteItem - Calls the deleteItem() method and the object id. @see deleteItem() 
 * @vue-event {Object} updateItem - Calls the updateItem() method and pass the object id. @see updateItem()
 * @vue-event {(String|null)} [itemId=null] getLastIndex - Calls the getLastIndex() method and return the last index or null.
*/
export default defineComponent({
  
  name: "leve-toast",
    
  setup() {
    /** The notification state. */
    const mainStore = useMainStore();
    const items = ref(mainStore);

    onMounted(() => {
      items.value = mainStore.items;      
    });

    function createItem() {
      mainStore.createNewItem(fakeNotificationData());
    }

    function deleteItem(id) {
      mainStore.deleteItem(id);
    }

    function updateItem(id) {
      mainStore.updateItem(id, fakeNotificationData());
    }

    function getLastIndex() {
      const size = mainStore.items.length;
      if(size > 0) {
      const itemId = mainStore.items[size-1].id;
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
  },
    
  components: { LeveNotification },
    
  updated () {
    const lastId = this.getLastIndex();
    if (lastId !== null) {
      setTimeout(() => {
        this.deleteItem(lastId);
      }, 5000);
    }
  }
    
});

</script>