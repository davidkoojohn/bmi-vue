import { createApp } from 'vue'

import ElementPlus from './components/element-plus'

import App from './App.vue'

const app = createApp(App)

ElementPlus(app)

app.mount('#app')
