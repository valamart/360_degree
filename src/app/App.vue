<script setup lang="ts">
    // import './style.css' -заимпортить глобальные стили когда будут
</script>

<template>
    <div class="employees-container">
        <router-view v-slot="{ Component }">
            <h1>main view</h1>
            <div class="nav-bar">
                navigation <router-link to="/employee">to main page</router-link>
            </div>
            <transition
                name="fade"
                mode="out-in"
            >
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }

    .employees-container {
        position: relative;
        height: 100%;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
