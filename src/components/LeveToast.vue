<template>
    <div class="toast-container  position-static bottom-0 end-0 p-3">        
        <LeveToastNotification v-for="(item, index) in items" :key="index" :type="item.type"></LeveToastNotification>   
    </div>
</template>

<script>
import LeveToastNotification from './LeveToastNotificacion.vue';
import { inject } from 'vue';


export default {
    name: "leve-toast",
    notifications : inject['notifications'],
    props: {
        toastIsVisible: Boolean,
    },
    components: { LeveToastNotification },
    data() {
        return {            
            items: this.notifications,
            count: 0,
            isVisible: this.toastIsVisible,
        }
    },
    methods: {
        toastAdd() {
            this.items.push({type:'success',title:'Teste title',comment:'Lorem ipsum dolor',})
        },
        toastisVisible() {
            this.count++;
            this.isVisible = true;
            setTimeout( () => this.isVisible = false, 5000);
        },
        toastisClosed() {
            this.count++;
            this.isVisible = false;
        }
    },
}

</script>