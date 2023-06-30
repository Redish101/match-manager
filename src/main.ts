import 'virtual:uno.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import logInfo from '@/utils/logInfo'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

logInfo()
