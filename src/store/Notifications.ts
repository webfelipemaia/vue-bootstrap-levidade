// @ts-ignore
import { fakeData } from "@/models/items.ts";
import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>({ items : [] }),

  actions: {
    createNewItem(item) {
      if (!item) return;

      this.items.push(item);
    },

    updateItem(id, payload) {
      if (!id || !payload) return;

      const index = this.findIndexById(id);

      if (index !== -1) {
        this.items[index] = fakeData();
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
  },
});