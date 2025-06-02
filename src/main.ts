import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './app/router'

import { worker } from './mocks/browser'
import App from './app/App.vue'
const app = createApp(App)
app.use(router)
app.use(createPinia()).mount('#app')

if (import.meta.env.MODE === 'development') {
    worker.start()
}
