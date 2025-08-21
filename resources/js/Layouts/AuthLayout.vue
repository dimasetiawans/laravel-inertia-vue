<script setup>
import { Link, usePage } from '@inertiajs/vue3'
const page = usePage()
</script>

<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-6 col-md-9">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>