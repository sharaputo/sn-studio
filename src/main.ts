import { createApp } from 'vue';
import { router } from '@/router';

// Styles
import '@/assets/css/style.css';

// Components
import App from '@/App.vue';
import AppContainer from '@/components/base/AppContainer.vue';
import SectionTitle from '@/components/base/SectionTitle.vue';

// Plugins
import VueEasyLightbox from 'vue-easy-lightbox';

const app = createApp(App);
app.use(router);

app.component('AppContainer', AppContainer);
app.component('SectionTitle', SectionTitle);

app.use(VueEasyLightbox);

router.isReady().then(() => app.mount('#app'));
