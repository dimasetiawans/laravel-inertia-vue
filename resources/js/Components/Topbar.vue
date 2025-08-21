<script setup>
import { Link } from "@inertiajs/vue3";
</script>

<template>
    <nav
        class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
    >
        <!-- Sidebar Toggle (Topbar for mobile) -->
        <button
            class="btn btn-link d-md-none rounded-circle me-3"
            data-action="sidebar-toggle"
            aria-label="Toggle sidebar"
        >
            <i class="fa fa-bars"></i>
        </button>

        <!-- Search -->
        <form
            class="d-none d-sm-inline-block form-inline me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
        >
            <div class="input-group">
                <input
                    type="text"
                    class="form-control bg-light border-0 small"
                    placeholder="Search…"
                />
                <button class="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                </button>
            </div>
        </form>

        <!-- Right Nav -->
        <ul class="navbar-nav ms-auto">
            <li class="nav-item dropdown no-arrow mx-1">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="alertsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                >
                    <i class="fas fa-bell fa-fw"></i>
                    <span class="badge bg-danger badge-counter">3+</span>
                </a>
                <div
                    class="dropdown-menu dropdown-menu-end shadow animated--grow-in"
                    aria-labelledby="alertsDropdown"
                >
                    <a class="dropdown-item" href="#">Alert 1</a>
                    <a class="dropdown-item" href="#">Alert 2</a>
                </div>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <li class="nav-item dropdown no-arrow">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                >
                    <span class="me-2 d-none d-lg-inline text-gray-600 small"
                        >Dimas</span
                    >
                    <img
                        class="img-profile rounded-circle"
                        src="https://ui-avatars.com/api/?name=Dimas&background=4e73df&color=fff"
                        alt="avatar"
                    />
                </a>
                <div
                    class="dropdown-menu dropdown-menu-end shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                >
                    <Link class="dropdown-item" href="#"
                        ><i
                            class="fas fa-user fa-sm fa-fw me-2 text-gray-400"
                        ></i>
                        Profile</Link
                    >
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" href="#"
                        ><i
                            class="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"
                        ></i>
                        Logout</Link
                    >
                </div>
            </li>
        </ul>
    </nav>
</template>
