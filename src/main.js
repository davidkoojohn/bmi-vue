import { createApp } from 'vue'
import router from './router'
import store from './store'
import 'normalize.css'
import App from './App.vue'
import AppLayout from './layouts/AppLayout.vue'

import "element-plus/es/components/message/style/css"
import "element-plus/es/components/message-box/style/css"
import "element-plus/es/components/loading/style/css"

const app = createApp(App)
app.use(router)
app.use(store)
app.component('app-layout', AppLayout)
app.mount('#app')
