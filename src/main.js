import { createPinia } from 'pinia'
import { app } from './plugins/mainApp'
import './plugins/levidadeStyles'
import './plugins/levidadeComponents'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/default.css'
import router from "./router";

const pinia = createPinia()
app.use(pinia)
app.use(VueHighlightJS)
app.use(router)
app.mount("#app")
