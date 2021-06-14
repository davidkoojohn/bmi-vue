import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import AppLayout from './layouts/AppLayout.vue'

let app = createApp(App)

app.component('app-layout', AppLayout)
app.use(store)
app.use(router)

app.mount('#app')
