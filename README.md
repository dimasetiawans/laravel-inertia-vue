# Laravel Inertia Vue

A **full-stack** web application powered by **Laravel 12** for the backend and **Vue 3** for the frontend, integrated with **Inertia.js**.  
Built with **Vite** as the modern build tool, combining the flexibility of **Bootstrap 5** for UI design.

## ✨ Features
- **Laravel 12** for backend API & server-side logic
- **Vue 3 + Inertia.js** for SPA without traditional REST APIs
- **Vite** for fast builds and hot-reload
- **Bootstrap 5** (SCSS) for additional UI components
- **Axios** for HTTP communication
- **Concurrently** for running multiple processes during development

## 📂 Project Structure
```
app/              # Laravel backend logic
bootstrap/        # Application bootstrap
config/           # Laravel configuration files
database/         # Migrations, seeders, factories
public/           # Public root (index.php, built assets)
resources/
  ├─ views/       # Blade templates
  ├─ js/          # Vue pages, layouts, app.js
  ├─ css/         # Tailwind CSS
  └─ sass/        # Bootstrap SCSS overrides
routes/           # web.php, api.php
storage/          # Cache, logs, uploads
tests/            # Testing (Pest/PHPUnit)
vite.config.js    # Vite configuration
package.json      # Node.js dependencies
composer.json     # PHP dependencies
```

## 🛠️ Technologies
- **Backend**: Laravel 12
- **Frontend**: Vue 3, Inertia.js
- **Bundler**: Vite
- **Styling**: Bootstrap 5 (SCSS)
- **HTTP Client**: Axios
- **Tools**: Concurrently

## 🚀 Installation & Usage
1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/laravel-inertia-vue.git
   cd laravel-inertia-vue
   ```

2. **Install Dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Copy & Configure Environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Run Database Migrations**
   ```bash
   php artisan migrate
   ```

5. **Run Development Server**
   - Run Laravel & Vite separately:
     ```bash
     php artisan serve
     npm run dev
     ```
   - Or using *concurrently* (if configured in composer.json):
     ```bash
     composer run dev
     ```

## 📦 Build for Production
```bash
npm run build
```

## 🤝 Contributing
1. Fork this repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

## 📄 License
This project is licensed under the [MIT License](LICENSE).
