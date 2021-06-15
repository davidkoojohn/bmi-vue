import { createApp } from 'vue'
import router from './router'
import ElementPlus from './components/element-plus'

import App from './App.vue'

const app = createApp(App)
app.use(router)
ElementPlus(app)
app.mount('#app')
