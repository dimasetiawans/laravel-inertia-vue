<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
defineOptions({ layout : AppLayout})
</script>

<template>
    <h1 class="h3 mb-4 text-gray-800">Dashboard</h1>
    <div class="row">
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col me-2">
                <div class="text-xs fw-bold text-primary text-uppercase mb-1">
                  Tickets (Monthly)
                </div>
                <div class="h5 mb-0 fw-bold text-gray-800">128</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-calendar fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- more cards... -->
    </div>
</template>
