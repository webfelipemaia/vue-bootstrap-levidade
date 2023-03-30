import { createApp } from 'vue'
import App from '../App.vue'
import store from '../store/index'

export const app = createApp(App);
app.use(store);
