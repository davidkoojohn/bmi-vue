import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from './components/element-plus'

import axios from 'axios'

let app = createApp(App)
app.config.globalProperties.$http = axios
app.use(store)
app.use(router)

ElementPlus(app)

app.mount('#app')
