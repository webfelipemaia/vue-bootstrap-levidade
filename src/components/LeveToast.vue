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
            v-for="(notice,index) in Notifications"
            :key="index"
            :type="notice.type"
            :title="notice.text"
            :comment="notice.comment"
            @close-item-toast="(id) => toastisClosed(id)"
            ></LeveNotification>   
    </div>
    
</template>

<script>
import { defineComponent, onMounted, ref} from "vue";
import { useMainStore } from '../store/Notifications.ts';
import { fakeData } from '../models/items.ts';
import LeveNotification from './LeveNotificacion.vue';


export default defineComponent({
  
  name: "leve-toast",
    

  setup() {
    const mainStore = useMainStore();
    const items = ref(mainStore);
    onMounted(() => {
      items.value = mainStore.items;
    });
    function createItem() {
      mainStore.createNewItem(fakeData());
    }
    function deleteItem(id) {
      console.log(id)
      mainStore.deleteItem(id);
    }
    function updateItem(id) {
      console.log(id)
      mainStore.updateItem(id, fakeData());
    }
    return {
      items,
      createItem,
      deleteItem,
      updateItem,
    };
  },
    props: {
        toastIsVisible: Boolean,
    },
    components: { LeveNotification },
    
});

</script>