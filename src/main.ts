import { createApp } from 'vue';

// Styles
import '@/assets/css/style.css';

// Components
import App from '@/App.vue';
import AppContainer from '@/components/base/AppContainer.vue';
import SectionTitle from '@/components/base/SectionTitle.vue';

// Plugins

const app = createApp(App);

app.component('AppContainer', AppContainer);
app.component('SectionTitle', SectionTitle);

app.mount('#app');
