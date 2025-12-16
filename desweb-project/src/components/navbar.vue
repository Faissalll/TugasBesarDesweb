<script setup>
import { ref } from "vue";
import { routeLocationKey } from "vue-router";

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav
        class="bg-white/95 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-50 rounded-b-3xl"
    >
        <div class="max-w-7xl mx-auto px-8 py-3">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <img
                        src="/src/assets/logo-lakeview.png"
                        alt="Lakeview Logo"
                        class="h-7 w-7 scale-175 object-cover object-center -ml-1"
                    />
                    <span class="text-xl font-semibold text-gray-800">
                        Lakeview
                    </span>
                </div>

                <div class="hidden min-[1024px]:flex items-center space-x-10">
                    <router-link
                        to="/"
                        class="text-gray-700 hover:text-teal-400 font-normal transition-colors relative group"
                    >
                        Beranda
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"
                        ></span>
                    </router-link>

                    <router-link
                        to="/destinasi"
                        class="text-gray-700 hover:text-teal-400 font-normal transition-colors relative group"
                    >
                        Destinasi
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"
                        ></span>
                    </router-link>

                    <router-link
                        to="/wahana"
                        class="text-gray-700 hover:text-teal-400 font-normal transition-colors relative group"
                    >
                        Wahana
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"
                        ></span>
                    </router-link>

                    <router-link
                        to="/tentang"
                        class="text-gray-700 hover:text-teal-400 font-normal transition-colors relative group"
                    >
                        Tentang
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"
                        ></span>
                    </router-link>
                    <router-link
                        to="/kontak"
                        class="text-gray-700 hover:text-teal-400 font-normal transition-colors relative group"
                    >
                        Kontak
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full"
                        ></span>
                    </router-link>
                </div>

                <RouterLink
                    to="/pesan-tiket"
                    class="hidden md:block bg-[#00D5BE] hover:bg-[#00b19e] text-white px-6 py-2.5 rounded-full font-medium transition-colors cta-button"
                >
                    Pesan Sekarang
                </RouterLink>

                <button
                    @click="toggleMenu"
                    class="min-[1024px]:hidden text-teal-500"
                >
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            v-if="!isMenuOpen"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        <path
                            v-else
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <div
                v-if="isMenuOpen"
                class="min-[1024px]:hidden mt-4 pt-4 border-t border-gray-200"
            >
                <router-link
                    to="/"
                    @click="toggleMenu"
                    class="block py-2 text-gray-700 hover:text-teal-400"
                >
                    Beranda
                </router-link>
                <router-link
                    to="/destinasi"
                    @click="toggleMenu"
                    class="block py-2 text-gray-700 hover:text-teal-400"
                >
                    Destinasi
                </router-link>
                <router-link
                    to="/wahana"
                    @click="toggleMenu"
                    class="block py-2 text-gray-700 hover:text-teal-400"
                >
                    Wahana
                </router-link>
                <router-link
                    to="/tentang"
                    @click="toggleMenu"
                    class="block py-2 text-gray-700 hover:text-teal-400"
                >
                    Tentang
                </router-link>
                <router-link
                    to="/kontak"
                    @click="toggleMenu"
                    class="block py-2 text-gray-700 hover:text-teal-400"
                >
                    Kontak
                </router-link>


                <router-link
                    to="/pesan-tiket"
                    @click="toggleMenu"
                    class="block mt-4 bg-teal-400 text-white px-6 py-2 rounded-full text-center hover:bg-teal-500 transition"
                >
                    Pesan Sekarang
                </router-link>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.router-link-active {
    color: inherit !important;
}

a.bg-teal-400.router-link-active,
a.bg-teal-400.router-link-exact-active {
    color: white !important;
}

.cta-button.router-link-active {
    color: white !important;
}

.router-link-active .absolute {
    width: 100% !important;
    background-color: #00d5be !important;
}
</style>
