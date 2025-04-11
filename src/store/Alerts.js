import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alertStore',{

  state: () => ({
    items: [],
  }),

  actions: {
    // Cria uma nova notificação
    createNewItem(item, uid) {
      if (!item) return;
      item.uid = uid;
      const obj_size = Object.keys(this.items).length;
      item.id = obj_size > 0 ? obj_size : 0;
      this.items.push(item);
    },

    // Atualiza uma notificação
    updateItem(id, payload) {
      if (!id || !payload) return;
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.items[index] = payload;
      }
    },

    // Deleta uma notificação
    deleteItem(id) {
      const index = this.findIndexById(id);
      if (index === -1) return;
      this.items.splice(index, 1);
    },

    // Busca o índice da notificação pelo ID
    findIndexById(id) {
      return this.items.findIndex((item) => item.id === id);
    },

    // Retorna o último item
    getLastItem() {
      return this.items.length > 0 ? this.items[this.items.length - 1] : null;
    },
  },
});
