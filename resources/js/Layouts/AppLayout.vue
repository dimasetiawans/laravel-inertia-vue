<script setup>
import { onMounted } from 'vue';
import { setupSbAdmin } from '@/composables/useSbAdmin';
import Sidebar from '@/Components/Sidebar.vue';
import Topbar from '@/Components/Topbar.vue';

onMounted(() => {
  setupSbAdmin(); // run once per layout mount
});
</script>

<template>
  <div id="page-top">
    <div id="wrapper">
      <!-- Sidebar -->
      <Sidebar/>

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <!-- Topbar -->
          <Topbar/>

          <!-- Inertia page content -->
          <main class="container-fluid">
            <slot />
          </main>
        </div>

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Pusat Pengembangan Layanan & Sistem Informasi {{ new Date().getFullYear() }}</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->
        
      </div>
    </div>

    <!-- Scroll to Top Button-->
    <a id="scrollToTop" class="scroll-to-top rounded" href="#">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<style scoped>
/* Optional: show/hide class for the scroll-to-top button */
#scrollToTop { opacity: 0; pointer-events: none; transition: opacity .2s; position: fixed; right: 1rem; bottom: 1rem; }
#scrollToTop.show { opacity: 1; pointer-events: auto; }
</style>
