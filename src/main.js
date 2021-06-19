import { createApp } from 'vue'
import router from './router'
import store from './store'
import 'normalize.css'
import ElementPlus from './components/element-plus'
import App from './App.vue'
import AppLayout from './layouts/AppLayout.vue'

const app = createApp(App)
app.use(router)
app.use(store)
ElementPlus(app)
app.component('app-layout', AppLayout)
app.mount('#app')
