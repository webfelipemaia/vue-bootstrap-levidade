<template>
    <div class="toast-container  position-static bottom-0 end-0 p-3">        
        {{  notices }}
        <LeveNotification 
            v-for="(notice,index) in notifications"            
            :key="index"
            :type="index"
            ></LeveNotification>   
    </div>
</template>

<script>
import LeveNotification from './LeveNotificacion.vue';
import { mapGetters } from 'vuex';


export default {
    name: "leve-toast",
    props: {
        toastIsVisible: Boolean,
    },
    components: { LeveNotification },
    data() {
        return {            
            notificationsData: [],
            count: 0,
            isVisible: this.toastIsVisible,
        }
    },
    computed: {
    ...mapGetters({
      notifications: 'notifications/notices'
    }),
  },    
    mounted () {
        console.log(this.notifications);
    },
    methods: {
        toastAdd() {
            this.notifications.push({type:'success',text:'Teste title',comment:'Lorem ipsum dolor',})
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