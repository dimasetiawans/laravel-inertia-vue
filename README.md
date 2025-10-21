# 🚀 Laravel + Inertia + SB Admin Starter Kit

[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![Vue](https://img.shields.io/badge/Vue.js-3.x-42B883?logo=vue.js&logoColor=white)](https://vuejs.org)
[![Inertia](https://img.shields.io/badge/Inertia.js-2.x-7952B3?logo=inertia&logoColor=white)](https://inertiajs.com)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern **starter kit** for building web applications using **Laravel**, **Vue 3 (Inertia.js)**, and **SB Admin 2** theme — preconfigured with Bootstrap 5, Font Awesome 7, and Vite.

This kit removes TailwindCSS and focuses on a classic **Bootstrap admin experience** while keeping Laravel’s modern development workflow.


## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Laravel 12.x (PHP 8.2) |
| **Frontend** | Vue 3 + Inertia.js |
| **UI Framework** | Bootstrap 5.3 + SB Admin 2 |
| **Icons** | Font Awesome 7 |
| **Bundler** | Vite |
| **Database** | MySQL / MariaDB (default) |
| **Testing** | Pest |
| **Code Style** | Laravel Pint |
| **Dev Tools** | Concurrently (multi-process dev runner) |



## 📂 Project Structure

```
starterkit/
├── app/                  # Laravel app logic (controllers, models, middleware)
├── resources/
│   ├── js/
│   │   ├── Pages/        # Inertia pages
│   │   ├── Layouts/      # SB Admin-based layouts (AppLayout, AuthLayout)
│   │   ├── Components/   # Shared Vue components
│   │   ├── Composables/  # useSbAdmin.js (sidebar, scroll, etc.)
│   │   └── app.js        # Inertia bootstrap
│   └── scss/
│       └── app.scss      # Bootstrap + custom SB Admin styles
├── routes/web.php        # Application routes
├── database/             # Migrations and seeders
└── vite.config.js        # Vite + Vue setup
```

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourname/starterkit-sbadmin.git
   cd starterkit-sbadmin
   ```

2. **Install backend dependencies**
   ```bash
   composer install
   ```

3. **Install frontend dependencies**
   ```bash
   npm install
   ```

4. **Setup environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Run database migrations**
   ```bash
   php artisan migrate
   ```

6. **Run the application**
   ```bash
   composer run dev
   ```
   > This command runs Laravel’s dev server, Vite watcher, and queue/log workers concurrently.

## 🎨 Styling (Bootstrap + SB Admin)

- SB Admin layout components are rewritten in Vue:
  - `AppLayout.vue` → main dashboard wrapper  
  - `AuthLayout.vue` → login/register layout
- Uses **Bootstrap 5 SCSS** imported in `resources/scss/app.scss`
- **Font Awesome 7** for icons
- **TailwindCSS removed** for a cleaner Bootstrap-only workflow

---

## 🔁 Persistent Layouts (Inertia Best Practice)

All Inertia pages use **persistent layouts**, so the sidebar/topbar stay mounted between navigations.

Defined in `resources/js/app.js`:
```js
page.default.layout = page.default.layout || AppLayout
```

For special pages (e.g. login), override layout:
```vue
<script setup>
import AuthLayout from '@/Layouts/AuthLayout.vue'
defineOptions({ layout: AuthLayout })
</script>
```

## 🧠 Composables

`resources/js/Composables/useSbAdmin.js`  
Implements SB Admin behaviors without jQuery:

- Sidebar collapse toggle  
- Scroll-to-top button visibility  
- Layout persistence via localStorage


## 🧰 Developer Commands

| Command | Description |
|----------|-------------|
| `composer run dev` | Run Laravel, Vite, queue worker, and log tailer together |
| `npm run dev` | Run Vite development server |
| `npm run build` | Build production assets |
| `php artisan test` | Run tests via Pest |
| `php artisan pint` | Format code style |


## 🧾 Environment Variables

Example `.env` highlights:
```env
APP_NAME="My App"
SESSION_DRIVER=database
QUEUE_CONNECTION=database
CACHE_DRIVER=database
```


## 🧤 License

MIT © 2025 — Built by **dimasetiawans**


### ❤️ Credits

- [Laravel](https://laravel.com)  
- [Inertia.js](https://inertiajs.com)  
- [SB Admin 2 Template](https://startbootstrap.com/theme/sb-admin-2)  
- [Bootstrap 5](https://getbootstrap.com)  
- [Font Awesome](https://fontawesome.com)
