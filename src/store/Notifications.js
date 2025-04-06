import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notificationStore',{

  state: () => ({
    items: [],
  }),

  actions: {
    createNewItem(item, uid) {
      if (!item) return;
      item.uid = uid;
      const obj_size = Object.keys(this.items).length;
      item.id = obj_size > 0 ? obj_size : 0;
      this.items.push(item);
    },

    updateItem(id, payload) {
      if (!id || !payload) return;
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.items[index] = payload;
      }
    },

    deleteItem(id) {
      const index = this.findIndexById(id);
      if (index === -1) return;
      this.items.splice(index, 1);
    },

    findIndexById(id) {
      return this.items.findIndex((item) => item.id === id);
    },

    getLastItem() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    },
  },
});
