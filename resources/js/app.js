import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import AppLayout from '@/Layouts/AppLayout.vue'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/app.css';

createInertiaApp({
  resolve: async (name) => {
    // const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
    // return pages[`./Pages/${name}.vue`];
    const page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'));
    page.default.layout = page.default.layout || AppLayout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});
