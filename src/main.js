// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import * as bootstrap from 'bootstrap'

// window.bootstrap = bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

import '../public/assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
