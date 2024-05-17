// @ts-ignore
import { fakeNotificationData } from "@/utils/items.ts";
import { defineStore } from "pinia";

export const useNotificationStore = defineStore({
  id: "notificationStore",
  /**
   * The initial state that receives the notifications array items.
   * @returns {Object} items
   */
  state: () =>({ items : [] }),

  actions: {
    /**
     * Create a new notification item.
     * @param {Object} item 
     * @param {string} item.id The uuid of the component.
     * @param {string} item.text A message to be notified.
     * @param {string} item.comment An alternative text.
     * @param {string} item.type The type of notification.
     * @param {Date} item.createdAt Component creation date.
     */
    createNewItem(item) {
      if (!item) return;
      this.items.push(item);
    },
    

    /**
     * Updates a notification.
     * @param {String} id The uuid of the notification.
     * @param payload The edited notification object.
     */
    updateItem(id, payload) {
      if (!id || !payload) return;
      const index = this.findIndexById(id);
      if (index !== -1) {
        this.items[index] = fakeNotificationData();
      }
    },

    /**
     * Deletes a notification.
     * @param {String} id The uuid of the notification.
     */
    deleteItem(id) {
      const index = this.findIndexById(id);
      if (index === -1) return;
      this.items.splice(index, 1);
    },

    /**
     * Search for the notification.
     * @param {String} id The uuid of the notification. 
     * @returns {Number} index
     */
    findIndexById(id) {
      return this.items.findIndex((item) => item.id === id);
    },
  },
});