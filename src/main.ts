import { createApp } from 'vue';

// Core
import { router } from '@/router';

// Styles
import '@/assets/css/style.css';

// Components
import App from '@/App.vue';
import AppContainer from '@/components/base/AppContainer.vue';
import SectionTitle from '@/components/base/SectionTitle.vue';

// Plugins
import VueEasyLightbox from 'vue-easy-lightbox';
import { MotionPlugin } from '@vueuse/motion';

const app = createApp(App);
// Use core
app.use(router);

// Use components
app.component('AppContainer', AppContainer);
app.component('SectionTitle', SectionTitle);

// Use plugins
app.use(VueEasyLightbox);
app.use(MotionPlugin);

router.isReady().then(() => app.mount('#app'));
