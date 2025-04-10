<template>
<!--   <button @click="createItem">New Toast</button> -->
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
        <div v-if="item.comment" class="toast-header" :class="[{[`text-bg-${item.type}`]: item.type}]">
            
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
            
          <div class="d-flex justify-content-between"> 
            <small>{{ item.text }}</small>
            
            <div v-if="item.comment"></div>
            <div v-else>
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
          </div>
            <slot></slot>
            <div v-if="showActions" :class="defaultActionClass">
                <button type="button" class="btn btn-sm btn-light">Take action</button>
                <button type="button" 
                        class="btn btn-sm" 
                        :class="'btn-outline-'+getBackgroundColor(item.type)" 
                        data-bs-dismiss="toast"
                        @click.prevent="deleteItem(item.id)">Close</button>
            </div>

        </div>

      </div>
    </div>
    
</template>

<script setup>
import { defineProps, onMounted, onUpdated, ref, computed} from "vue";
import { useNotificationStore } from '@/store/Notifications.js';

// Toasts are simple notifications created either statically or dynamically.
  
const props = defineProps ({
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
    isToast: {
      type: Boolean,
      default: true
    },
    showActions: {
      type: Boolean,
      default: true
    }, 
    timeout: {
      type: Number,
      default: 5000,
    },   
  })

    
  const notificationStore = useNotificationStore();
  const items = computed(() => notificationStore.items);
   
  // Removes alert after x seconds (see props.timeout)
  onUpdated(() => {
  if (notificationStore.items.length > 0) {
    const lastItem = notificationStore.items[notificationStore.items.length - 1];
    setTimeout(() => {
      notificationStore.deleteItem(lastItem.id);
    }, props.timeout);
  }
});

  // Get the toast alignment
  const toastPosition = computed(() => {
    return defineToastAlignment(props.position)
  })

  function createItem() {
    notificationStore.createNewItem(notification.value);
  }

  function deleteItem(id) {
    notificationStore.deleteItem(id);
  }

  function getLastIndex() {
    return notificationStore.items.length > 0 
        ? notificationStore.items[notificationStore.items.length - 1].id 
        : null;
  }

  // Sets toast alignment
  function defineToastAlignment(toastPosition) {
      
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
      if (
        (element.alignment[0] === toastPosition[0]) 
          && (element.alignment[1] === toastPosition[1])
        ) {
        toastPosition = {
          start : `${element.position[0]}`, 
          end : `${element.position[1]}`
        };
      } else {
        return false
      }
    })
    return toastPosition
  }

  // Sets the Toast background color according to the theme.
  function getBackgroundColor(theme) {
    let darkThemes = ['primary','secondary','success','danger','dark']
    const found = darkThemes.find((element) => element === theme)
    return (found === undefined) ? 'dark' : 'light'
  }

</script>