import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import {ElButton} from 'element-plus'

let app = createApp(App)

app.use(store)
app.use(router)

app.use(ElButton)

app.mount('#app')
