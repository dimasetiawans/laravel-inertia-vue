<script setup>
import { computed } from 'vue'  
import { Link, usePage } from '@inertiajs/vue3'

const page = usePage()
const currentUrl = computed(() => page.url)
</script>

<template>
    <ul id="accordionSidebar" class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
      <!-- Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">My App</div>
      </a>

      <hr class="sidebar-divider my-0" />

      <!-- Example: Nav Item -->
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr class="sidebar-divider" />

      <!-- Example: Collapsible Menu (Bootstrap 5 collapse) -->
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="false">
          <i class="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </a>
        <div id="collapseUtilities" class="collapse">
          <div class="bg-white py-2 collapse-inner rounded">
            <a class="collapse-item" href="#">Colors</a>
            <a class="collapse-item" href="#">Borders</a>
          </div>
        </div>
      </li>

      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler -->
      <div class="text-center d-none d-md-inline">
        <button id="sidebarToggle" class="rounded-circle border-0" data-action="sidebar-toggle" aria-label="Toggle sidebar" ></button>
      </div>
    </ul>
</template>
