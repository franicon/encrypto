import './assets/main.css'

import 'primeicons/primeicons.css';
// icons
import PrimeVue from 'primevue/config';
//core
import "primevue/resources/primevue.min.css";
//theme
// import "primevue/resources/themes/lara-light-indigo/theme.css";
import "./assets/theme.css"

import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from "@/app/router/@index";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app')
