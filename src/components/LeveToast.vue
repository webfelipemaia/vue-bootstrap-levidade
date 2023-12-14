<template>
  <button @click="createItem">New Toast</button>
 
    <div 
        class="toast-container p-3" 
        :class="[toastPosition.start,toastPosition.end]">
      
      <div 
          class="toast show" 
          role="alert" 
          aria-live="assertive" 
          aria-atomic="true"
          v-for="(item, index) in items"
          :key="index"
          :id="`leveToast-${index}`"
          :class="[{[`text-bg-${item.type}`]: item.type}]"
      >

        <div class="toast-header" :class="[{[`text-bg-${item.type}`]: item.type}]">
            
          <strong class="me-auto">{{ item.comment }}</strong>
          <small>{{ item.notificationTime }}</small>
          <button v-if="item.type != 'dark'"
                  @click.prevent="deleteItem(item.id)" 
                  type="button" 
                  class="btn-close" 
                  data-bs-dismiss="toast" 
                  aria-label="Close"></button>
          <button v-if="item.type === 'dark'"
                  @click.prevent="deleteItem(item.id)" 
                  type="button" 
                  class="btn-close-icon"
                  aria-label="Close">
                  <span class="btn-close-icon__icon" aria-hidden="true"><i class="bi bi-x-lg"></i></span>
                </button>
        </div>

        <div class="toast-body">

            <small>{{ item.text }}</small>
            <slot></slot>
            <div :class="defaultActionClass">
                <button type="button" class="btn btn-primary btn-sm">Take action</button>
                <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="toast">Close</button>
            </div>

        </div>

      </div>

    </div>
    
</template>

<script>
import { defineComponent, onMounted, ref} from "vue";
import { useNotificationStore } from '../store/Notifications.ts';
import { fakeNotificationData } from '../utils/items.ts';


/** 
 * Toasts are simple notifications created either statically or dynamically.
 * @vue-prop {Boolean} toastIsVisible 
 * @vue-prop {string} [type='light'] - Type follows Bootstrap's theming model.
 * @vue-prop {string} [title='Example'] The title of the notification.
 * @vue-prop {string} [comment='An example comment.'] The text that is displayed in the body of the component.
 * @vue-prop {Array} [defaultClass=['mt-2', 'pt-2',]] defaultActionClass
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
        return {start: "bottom-0", end: "end-0"}
      },
    },
    type: { 
      type: String,
      default: 'light',
    },
    title: { 
      type: String,
      default: 'Example',
    },
    text: { 
      type: String,
      default: 'An example text.',
    },        
    comment: { 
      type: String,
      default: 'An example comment.',
    },
    notificationTime: {
      type: String,
      default: 'just now',
    } ,
    defaultActionClass: {
        type: Array,
        default(){ 
        return ['mt-2', 'pt-2',]
      }
    },
  },
    
  updated () {
    const lastId = this.getLastIndex();
    if (lastId !== null) {
      setTimeout(() => {
        this.deleteItem(lastId);
      }, 300000);
    }
  },
  
  methods: {
    /**
     * Sets toast alignment
     */
    defineToastAlignment(toastPosition) {
      
      // default Bootstrap toast positions
      let positions = [
                        { alignment : ['top','left'], position : ['top-0', 'start-0'] },
                        { alignment : ['top','center'], position : ['top-0', 'start-50 translate-middle-x'] },
                        { alignment : ['top','right'], position : ['top-0', 'end-0'] },
                        { alignment : ['middle','left'], position : ['top-50', 'start-0 translate-middle-y'] },
                        { alignment : ['middle','center'], position : ['top-50', 'start-50 translate-middle'] },
                        { alignment : ['middle','right'], position : ['top-50', 'end-0 translate-middle-y'] },
                        { alignment : ['bottom','left'], position : ['bottom-0', 'start-0'] },
                        { alignment : ['bottom','center'], position : ['bottom-0', 'start-50 translate-middle-x'] },
                        { alignment : ['bottom','right'], position : ['bottom-0', 'end-0'] }
                      ]

      positions.map(function(element){
          if ((element.alignment[0] === toastPosition[0]) && (element.alignment[1] === toastPosition[1])) {
            console.log(element.alignment[0],element.alignment[1])
            toastPosition = {start : `${element.position[0]}`, end : `${element.position[1]}`};
          } else {
            return false
          }
      })
      return toastPosition
    }
  },

  computed: {
    /**
     * Get the toast alignment
     */
    toastPosition() {
      return this.defineToastAlignment(this.position)
    },
  },
    
});

</script>

<style>
.btn-close-icon {
  background: transparent;
  border: 0;
  box-sizing: content-box;
  padding: 0.25em 0.25em;
  color: rgba(255, 255, 255, 0.75);
  border: 0;
  border-radius: 0.375rem;
}
.btn-close-icon:hover{
  color: rgba(255, 255, 255, 1);
}

</style>