import { createApp } from 'vue';
import App from './App.vue';

import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App);

document.body.setAttribute('arco-theme', 'dark');

app.use(ArcoVue as any);
app.mount('#app');
