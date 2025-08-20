// resources/js/app.js
import 'bootstrap/dist/css/bootstrap.min.css'

import '../assets/vendor/jquery/jquery.min.js'
import '../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../assets/vendor/jquery-easing/jquery.easing.min.js'
import '../assets/js/sb-admin-2.min.js'

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
  resolve: (name) =>
    resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})

