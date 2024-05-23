import './assets/elementplus.css'
import './assets/tailwind.css'
import './assets/font.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router);
app.use(MotionPlugin);
app.use(ElementPlus);
app.use(VueSweetalert2);

app.mount('#app');
