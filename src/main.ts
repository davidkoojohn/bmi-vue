import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from './components/element-plus'

import http from './tools/http'

let app = createApp(App)
app.config.globalProperties.$http = http

app.use(ElementPlus)

app.use(store)
app.use(router)

app.mount('#app')
