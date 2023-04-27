import { createApp } from 'vue';

// Core
import { router } from '@/router';

// Styles
import '@/assets/css/style.css';

// Components
import App from '@/App.vue';
import AppContainer from '@/components/base/AppContainer.vue';

// Plugins
import VueEasyLightbox from 'vue-easy-lightbox';
import VueAnimateOnScroll from 'vue-animate-onscroll';

const app = createApp(App);
// Use core
app.use(router);

// Use components
app.component('AppContainer', AppContainer);

// Use plugins
app.use(VueEasyLightbox);
app.use(VueAnimateOnScroll);

router.isReady().then(() => app.mount('#app'));
