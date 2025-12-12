<script setup>
import Navbar from "./components/navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="min-h-screen bg-[#F9FBFD] flex flex-col">
        <Navbar />

        <main class="flex-1 page-content">
            <RouterView />
        </main>

        <Footer />
    </div>
</template>

<style>
html,
body,
#app {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

</style>

<style>
.page-content {
    animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
