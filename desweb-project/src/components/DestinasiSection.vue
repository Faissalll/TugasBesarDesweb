<template>
    <section id="destinasi" class="pt-24 pb-16 bg-[#F9FBFD] min-h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-[#1A1A1A] mb-4 text-3xl font-semibold">
                    Destinasi Wisata Kami
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Jelajahi berbagai destinasi menarik di Lakeview yang
                    menawarkan pengalaman tak terlupakan
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div
                    v-for="(destination, index) in destinations"
                    :key="destination.slug"
                    class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                    <div class="relative h-56 overflow-hidden">
                        <img
                            :src="destination.image"
                            :alt="destination.title"
                            class="w-full h-full object-cover transition-transform duration-500"
                            :style="destination.title === 'Amphitheatre' ? 'object-position: center 70%;' : destination.title === 'Mirror Cube' ? 'object-position: center 70%;' : destination.title === 'Resto Lakeview' ? 'object-position: center 70%;' : destination.title === 'The Nest (VIP)' ? 'object-position: center 15%;' : ''"
                        />


                        <div
                            class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 shadow"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-4 h-4 text-[#F6C90E] fill-[#F6C90E]"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.848 1.416 8.268L12 19.771 4.584 23.864 6 15.596 0 9.748l8.332-1.593z"
                                />
                            </svg>
                            <span class="text-sm font-medium">
                                {{ destination.rating }}
                            </span>
                        </div>
                    </div>


                    <div class="p-6">
                        <h3 class="text-[#1A1A1A] mb-2 text-lg font-semibold">
                            {{ destination.title }}
                        </h3>
                        <p class="text-gray-600 mb-4 line-clamp-2">
                            {{ destination.description }}
                        </p>

                        <div
                            class="flex items-center gap-4 text-sm text-gray-500 mb-4"
                        >
                            <div class="flex items-center gap-1">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-4 h-4 text-[#00D5BE]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path
                                        d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                                    />
                                    <path
                                        d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                                    />
                                </svg>
                                <span>{{ destination.location }}</span>
                            </div>

                            <div class="flex items-center gap-1">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-4 h-4 text-[#00D5BE]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span>{{ destination.duration }}</span>
                            </div>
                        </div>


                        <RouterLink
                            :to="{
                                name: 'DestinasiDetail',
                                params: { id: destination.slug },
                            }"
                            class="mt-2 w-full py-3 bg-[#00D5BE] text-white rounded-xl text-center hover:bg-[#00B19E] transition-colors block"
                        >
                            Pelajari Lebih Lanjut
                        </RouterLink>
                    </div>
                </div>
            </div>


            <div class="mt-16 flex justify-center">
                <div
                    class="bg-white rounded-[20px] shadow-md px-8 py-8 max-w-xl w-full flex flex-col items-center gap-6 text-center"
                >
                    <div>
                        <p class="text-gray-700 font-semibold">
                            Tidak menemukan apa yang Anda cari?
                        </p>
                        <p class="text-gray-500 text-sm">
                            Hubungi tour guide kami untuk rekomendasi destinasi
                            terbaik di Lakeview.
                        </p>
                    </div>

                    <RouterLink
                        to="/pesan-tiket"
                        class="mt-6 w-full py-3 bg-[#00D5BE] text-white rounded-xl hover:bg-[#00B19E] transition-colors text-center block"
                    >
                        Hubungi Tour Guide Kami
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import DanauHijauImg from '../assets/DanauHijau.webp';
import SkywalkImg from '../assets/Skywalk.png';
import AmphitheatreImg from '../assets/Amphitheatre.jpg';
import DreamGardenImg from '../assets/dreamGarden.jpeg';
import MirrorCubeImg from '../assets/MirrorCube.jpg';
import RestoImg from '../assets/Resto.jpg';
import TheNestImg from '../assets/Thenest.jpg';

const destinations = [
    {
        slug: "danau-hijau",
        title: "Danau Hijau Lakeview",
        description:
            "Pusat area wisata, bekas tambang yang disulap jadi danau indah.",
        image: DanauHijauImg,
        duration: "Sepanjang Hari",
        rating: 4.8,
        location: "Area Utama",
    },
    {
        slug: "skywalk",
        title: "Skywalk & Viewpoint Bukit",
        description:
            "Area jembatan tinggi untuk menikmati panorama dan spot foto.",
        image: SkywalkImg,
        duration: "1-2 Jam",
        rating: 4.8,
        location: "Puncak Bukit",
    },
    {
        slug: "amphitheatre",
        title: "Amphitheatre",
        description: "Amphitheatre di Lakeview adalah tempat hiburan yang menyediakan fasilitas karaoke untuk pengunjung dan live music, menciptakan suasana meriah. Akses ke amphitheatre sudah termasuk dalam tiket masuk, sehingga pengunjung bebas menikmati momen seru sambil bernyanyi dan bersantai.",
        image: AmphitheatreImg,
        duration: "Sepanjang Hari",
        rating: 4.8,
        location: "Area Hiburan",
    },
    {
        slug: "dream-garden",
        title: "Dream Garden / Area Alam Terbuka",
        description:
            "Tempat bersantai keluarga dengan pemandangan pepohonan dan air.",
        image: DreamGardenImg,
        duration: "Sepanjang Hari",
        rating: 4.8,
        location: "Area Garden",
    },
    {
        slug: "mirror-cube",
        title: "Mirror Cube",
        description: "Mirror Cube adalah spot foto unik dengan dinding cermin yang menciptakan refleksi artistik. Berlokasi di area monumen, instalasi ini menawarkan pengalaman visual futuristik dan instagramable, menarik perhatian pengunjung untuk mengabadikan momen.",
        image: MirrorCubeImg,
        duration: "30-60 Menit",
        rating: 4.9,
        location: "Area Monumen",
    },
    {
        slug: "resto-lakeview",
        title: "Resto Lakeview",
        description: "Resto di Lakeview menyajikan beragam hidangan, mulai dari makanan tradisional hingga Chinese food yang lezat dan halal. Dengan suasana nyaman dan desain modern, pengunjung dapat menikmati santapan berkualitas dengan cita rasa autentik.",
        image: RestoImg,
        duration: "1-2 Jam",
        rating: 4.8,
        location: "Area Kuliner",
    },
    {
        slug: "the-nest-vip",
        title: "The Nest (VIP)",
        description: "Spot foto bersantai di atas jaring estetik putih menghadap ke danau biru, area VIP eksklusif dengan pemandangan spektakuler.",
        image: TheNestImg,
        duration: "30-60 Menit",
        rating: 4.9,
        location: "Area VIP",
    },
];
</script>
