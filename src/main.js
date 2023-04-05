import { createPinia } from 'pinia'
import { app } from './plugins/mainApp'
import './plugins/levidadeStyles'
import './plugins/levidadeComponents'

const pinia = createPinia()
app.use(pinia)
app.mount("#app")
