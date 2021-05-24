import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from './components/element-plus'
let app = createApp(App)

app.use(store)
app.use(router)

ElementPlus(app)

app.mount('#app')
