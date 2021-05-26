import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from './components/element-plus'
import http from './tools/http'

import AppLayout from './layouts/AppLayout.vue'

let app = createApp(App)
app.config.globalProperties.$http = http

app.component('app-layout', AppLayout)

app.use(ElementPlus)
app.use(store)
app.use(router)

app.mount('#app')
