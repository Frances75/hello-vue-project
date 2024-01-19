import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/scss/main.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLaptopMedical,faTabletButton,faMobileScreen,faShoppingCart,faLock,faDownload } from '@fortawesome/free-solid-svg-icons'
library.add(faLaptopMedical,faTabletButton,faMobileScreen,faShoppingCart,faLock,faDownload)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')