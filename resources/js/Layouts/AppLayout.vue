<script setup>
import { Link, usePage } from '@inertiajs/vue3'
const page = usePage()
</script>

<template>
  <div class="min-h-screen">
    <header class="p-4 border-b flex justify-between">
      <Link href="/" class="font-bold">Home</Link>
      <nav class="space-x-4">
        <Link href="/users" class="underline">Users</Link>
      </nav>
    </header>
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>
