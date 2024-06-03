// @ts-ignore
//import { fakeNotificationData } from "@/utils/items.ts";
import { defineStore } from "pinia";

export const useAlertStore = defineStore({
  id: "alertStore",
  
  state: () => ({
    items: [],
  }),

  actions: {

    // Create a new notification item.    
    createNewItem(item,uid) {
      // adds component uid to item
      item.uid = uid
      const obj_size = Object.keys(this.items).length
      obj_size > 0 ? item.id = obj_size : item.id = 0
      if (!item) return;
      this.items.push(item);
    },   

    // Updates a notification.
    updateItem(id, payload) {
      if (!id || !payload) return;
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.items[index] = payload;
      }
    },

    // Deletes a notification.
    deleteItem(id) {
      const index = this.findIndexById(id);
      if (index === -1) return;
      this.items.splice(index, 1);
    },

    // Search for the notification.
    findIndexById(id) {
      return this.items.findIndex((item) => item.id === id);
    },
    
    // Get the last item 
    getLastItem() {
      if (this.items.value.length > 0) {
        return this.items.value[this.items.value.length - 1]
      } else {
        return null
      }
    },

  },
});