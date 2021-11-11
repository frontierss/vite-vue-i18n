import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import store from './store'
import i18n from './lang/i18n'

const app = createApp(App)
app.use(i18n)
app.use(store)
app.mount('#app')
