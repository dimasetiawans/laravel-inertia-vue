<!-- resources/js/Pages/Home.vue -->
<script setup>
import AppLayout from '../Layouts/AppLayout.vue'
defineProps({ appName: String })
</script>

<template>
  <AppLayout>
    <h1 class="text-2xl font-bold">Welcome to {{ appName }}</h1>
  </AppLayout>
</template>
