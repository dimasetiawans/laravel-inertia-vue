<script setup>
defineProps({ appName: String })
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Welcome to {{ appName }}</h1>
    <inertia-link href="/users" class="underline">Go to Users</inertia-link>
  </div>
</template>
