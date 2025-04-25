import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notificationStore', {
  state: () => ({
    items: [],
    maxItems: 5
  }),

  actions: {
    createItem(item) {
      if (!item) return;
      item.id = Date.now();
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

  getters: {
    // Retorna o número total de itens
    totalItems: (state) => state.items.length,

    // Retorna true se houver notificações
    hasNotifications: (state) => state.items.length > 0,

    // Retorna o item pela id
    /* getItemById: (state) => {
      return (id) => state.items.find(item => item.id === id);
    }, */

    getItemById: (state) => (id) => {
      return state.items.find(item => item.id === id);
    }
  },
});
