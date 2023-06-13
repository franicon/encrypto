import './assets/main.css'

import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from "@/app/router/@index";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
