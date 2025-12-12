<template>
    <div class="min-h-screen">

        <section
            class="relative h-screen flex items-center justify-center overflow-hidden bg-black"
            id="beranda"
        >

            <div class="absolute inset-0">
                <img
                    src="/src/assets/Utama/Utama.jpeg"
                    alt="Beautiful Lake View"
                    class="w-full h-full object-cover"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"
                />
            </div>


            <div
                class="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up"
            >
                <h1
                    class="text-white mb-6 text-3xl md:text-5xl font-bold leading-tight"
                >
                    Temukan Ketentraman di Lakeview
                </h1>

                <p
                    class="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
                >
                    Nikmati keindahan alam danau yang dikelilingi pegunungan
                    hijau, udara segar, dan pengalaman wisata yang tak
                    terlupakan.
                </p>

                <div
                    class="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >

                    <RouterLink
                        to="/pesan-tiket"
                        class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D5BE] text-white font-semibold hover:bg-[#00b3a3] hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Rencanakan Kunjungan
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </RouterLink>


                    <RouterLink
                        to="/tentang"
                        class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 border-2 border-white text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    >
                        Pelajari Lebih Lanjut
                    </RouterLink>
                </div>
            </div>


            <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div
                    class="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2 animate-bounce-slow"
                >
                    <div class="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </div>
        </section>


        <section class="py-20 bg-white" id="keunggulan">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2
                        class="text-[#1A1A1A] mb-4 text-2xl md:text-3xl font-semibold"
                    >
                        Kenapa Memilih Lakeview?
                    </h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Pengalaman wisata yang sempurna menanti Anda di Lakeview
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div
                        v-for="(feature, index) in features"
                        :key="index"
                        class="bg-[#F9FBFD] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                        <div
                            class="w-14 h-14 mb-6 rounded-full bg-gradient-to-br from-[#00D5BE] to-[#33e0ca] flex items-center justify-center"
                        >

                            <component
                                :is="feature.icon"
                                class="w-7 h-7 text-white"
                            />
                        </div>
                        <h3 class="text-[#1A1A1A] mb-3 text-lg font-semibold">
                            {{ feature.title }}
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <section class="py-20 bg-gray-50 relative z-50">
            <div class="max-w-2xl mx-auto px-4">
                <div class="bg-white rounded-3xl shadow-xl p-12 text-center">
                    <h2 class="text-gray-900 mb-4 text-2xl md:text-3xl font-semibold">
                        Siap Memulai Petualangan Anda?
                    </h2>
                    <p class="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                        Hubungi kami sekarang dan dapatkan penawaran spesial untuk
                        perjalanan impian Anda.
                    </p>
                    <RouterLink
                        to="/kontak"
                        class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00D5BE] text-white rounded-full font-semibold hover:bg-[#00b3a3] hover:shadow-xl hover:scale-105 transition-all duration-300 w-full max-w-md"
                    >
                        Hubungi Kami
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { h } from "vue";

const heroImage = new URL("../assets/Utama/Utama.jpeg", import.meta.url).href;


const MapPinIcon = {
    render() {
        return h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "w-7 h-7",
            innerHTML:
                '<path d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z" /><circle cx="12" cy="11" r="2" />',
        });
    },
};

const CameraIcon = {
    render() {
        return h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "w-7 h-7",
            innerHTML:
                '<path d="M4 7h3l2-3h6l2 3h3a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 012-2z" /><circle cx="12" cy="13" r="3" />',
        });
    },
};

const UsersIcon = {
    render() {
        return h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "w-7 h-7",
            innerHTML:
                '<path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="3" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />',
        });
    },
};

const features = [
    {
        icon: MapPinIcon,
        title: "Destinasi Eksotis",
        description:
            "Jelajahi keindahan danau dan spot-spot tersembunyi yang memukau.",
    },
    {
        icon: CameraIcon,
        title: "Foto Spektakuler",
        description:
            "Abadikan momen tak terlupakan dengan pemandangan menakjubkan.",
    },
    {
        icon: UsersIcon,
        title: "Pengalaman Lokal",
        description:
            "Rasakan kehangatan budaya dan keramahan masyarakat setempat.",
    },
];
</script>

<style scoped>
@keyframes fade-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-up {
    animation: fade-up 0.8s ease-out both;
}

@keyframes bounce-slow {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
}

.animate-bounce-slow {
    animation: bounce-slow 1.5s infinite;
}
</style>
