import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
/*import './assets/js/script-landing'*/
import './assets/css/style-landing.css'
import './assets/css/style-documentation.css'
/*import './assets/js/script-documentation'*/

createApp(App).use(router).mount('#app');
