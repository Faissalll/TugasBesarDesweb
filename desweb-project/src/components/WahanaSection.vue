<template>
    <section id="wahana" class="pt-28 pb-44 bg-[#F9FBFD]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-[#1A1A1A] mb-2 text-2xl font-semibold">
                    Wahana Lakeview
                </h2>
                <p class="text-gray-600 max-w-2xl mx-auto text-sm">
                    Nikmati berbagai wahana seru dan menantang untuk pengalaman
                    tak terlupakan
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="(item, index) in wahanaList"
                    :key="index"
                    class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                    <div class="relative h-52 overflow-hidden">
                        <img
                            :src="item.image"
                            :alt="item.title"
                            class="w-full h-full object-cover transition-transform duration-500"
                            :style="item.title === 'Flying Fox / Sky Bike' ? 'object-position: center 75%;' : item.title === 'Holloway' ? 'object-position: center 70%;' : item.title === 'Heaven Door' ? 'object-position: center 5%;' : item.title === 'Giant Swing' ? 'object-position: center 70%;' : item.title === 'Flying Bed' ? 'object-position: center 65%;' : item.title === 'Mockingbird' ? 'object-position: center 60%;' : ''"
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
                            <span class="text-sm font-medium">{{
                                item.rating
                            }}</span>
                        </div>
                    </div>

                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-[#1A1A1A] mb-1 text-base font-semibold">
                            {{ item.title }}
                        </h3>
                        <p
                            class="text-gray-600 mb-4 text-xs leading-relaxed flex-grow"
                        >
                            {{ item.description }}
                        </p>

                        <div
                            class="flex items-center justify-between text-[11px] text-gray-500 mb-3"
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
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                                <span>{{ item.duration }}</span>
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
                                    <path
                                        d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                    />
                                    <circle cx="9" cy="7" r="3" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                <span>{{ item.capacity }}</span>
                            </div>
                        </div>

                        <RouterLink
                            :to="{
                                name: 'WahanaDetail',
                                params: { id: item.slug },
                            }"
                            class="w-full py-2.5 bg-[#00D5BE] text-white rounded-full text-sm font-medium hover:bg-[#00bda8] transition-colors text-center block"
                        >
                            Pelajari Lebih Lanjut
                        </RouterLink>
                    </div>
                </div>
            </div>

            <div class="mt-20">
                <div
                    class="w-full bg-[#00D5BE] rounded-2xl py-10 px-6 text-center text-white shadow-md flex flex-col items-center gap-3"
                >
                    <h3 class="text-lg md:text-2xl font-semibold">
                        Paket Wahana Lengkap
                    </h3>

                    <p class="max-w-2xl text-xs md:text-sm text-white/90">
                        Dapatkan akses ke semua wahana dengan harga spesial!
                        Cocok untuk keluarga dan rombongan.
                    </p>

                    <button
                        class="mt-3 px-8 py-2.5 rounded-full border border-white text-xs md:text-sm text-white font-medium hover:bg-white hover:text-[#00D5BE] transition"
                    >
                        Lihat Paket Lengkap
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const wahanaList = [
    {
        slug: "dragon-slide",
        title: "Dragon Slide",
        description: "Seluncuran besar untuk anak-anak dan dewasa.",
        image: "/src/assets/Wahana/DragonSlide.jpeg",
        duration: "5-8 menit",
        capacity: "1-2 orang",
        rating: 4.8,
    },
    {
        slug: "jet-ski-banana-boat",
        title: "Jet Ski & Banana Boat",
        description: "Aktivitas air di danau.",
        image: "/src/assets/Wahana/jetski.jpg",
        duration: "10-15 menit",
        capacity: "1-5 orang",
        rating: 4.9,
    },
    {
        slug: "virtual-reality-indoor",
        title: "Hiburan Virtual Reality Indoor",
        description:
            "Pengalaman virtual reality dengan berbagai pilihan permainan menarik.",
        image: "/src/assets/Wahana/VirtualBox.jpg",
        duration: "15-30 menit",
        capacity: "1-4 orang",
        rating: 4.7,
    },
    {
        slug: "ninja-warrior",
        title: "Ninja Warrior",
        description: "Uji kelincahan dan kekuatanmu di arena Ninja Warrior.",
        image: "/src/assets/Wahana/NinjaWarrior.jpg",
        duration: "Unlimited",
        capacity: "1-5 orang",
        rating: 4.6,
    },
    {
        slug: "flying-fox-sky-bike",
        title: "Flying Fox / Sky Bike",
        description:
            "Meluncur di atas danau dengan kecepatan tinggi dan pemandangan spektakuler.",
        image: "/src/assets/Wahana/FlyingFox.jpg",
        duration: "8-10 menit",
        capacity: "1 orang",
        rating: 4.9,
    },
    {
        slug: "dream-castle",
        title: "Dream Castle",
        description: "Istana impian untuk anak-anak dengan berbagai permainan seru dan area bermain yang aman.",
        image: "/src/assets/Wahana/Dream_Castle_1.png",
        duration: "1-2 Jam",
        capacity: "10-20 anak",
        rating: 4.7,
    },
    {
        slug: "holloway",
        title: "Holloway",
        description: "Spot foto 6 sap frame warna khas batik dayak Kalimantan Timur dan juga jalan akses menuju VIP area.",
        image: "/src/assets/Wahana/Holloway.jpg",
        duration: "15-30 menit",
        capacity: "2-5 orang",
        rating: 4.8,
    },
    {
        slug: "heaven-door",
        title: "Heaven Door",
        description: "Spot foto tangga menuju ke langit dengan pemandangan danau biru memukau diseluruh area Lakeview.",
        image: "/src/assets/Wahana/HeavenDoor.jpg",
        duration: "15-30 menit",
        capacity: "1-3 orang",
        rating: 4.9,
    },
    {
        slug: "cappadocia",
        title: "Cappadocia",
        description: "Spot foto dua balon udara cappadocia dengan design Lakeview dan IKN Nusantara.",
        image: "/src/assets/Wahana/Cappadocia.jpg",
        duration: "15-30 menit",
        capacity: "2-4 orang",
        rating: 4.8,
    },
    {
        slug: "frame-box",
        title: "Frame Box",
        description: "Spot foto tempat duduk frame membingkai pemandangan danau.",
        image: "/src/assets/Wahana/Framebox.jpeg",
        duration: "15-30 menit",
        capacity: "1-2 orang",
        rating: 4.7,
    },
    {
        slug: "skydeck-vip",
        title: "Skydeck (VIP)",
        description: "Spot foto dengan best view menikmati pemandangan garis horizon danau secara 360 derajat.",
        image: "/src/assets/Wahana/Skydeck.jpg",
        duration: "20-40 menit",
        capacity: "3-6 orang",
        rating: 4.9,
    },
    {
        slug: "minion-slides",
        title: "Minion Slides",
        description: "Wahana Minion Slides adalah wahana versi mini dari dragon slides yang bisa dimainkan oleh semua umur, minimal 3 tahun, dibawah 5 tahun harus di dampingi orang tua.",
        image: "/src/assets/Wahana/MinionSlide.png",
        duration: "5-10 menit",
        capacity: "1-2 anak",
        rating: 4.6,
    },
    {
        slug: "giant-swing",
        title: "Giant Swing",
        description: "Ayunan raksasa yang membawa Anda melambung tinggi dengan kecepatan mendebarkan, memberikan sensasi terbang bebas yang menggetarkan.",
        image: "/src/assets/Wahana/GiantSwing.jpeg",
        duration: "5-8 menit",
        capacity: "1-2 orang",
        rating: 4.8,
    },
    {
        slug: "flying-bed",
        title: "Flying Bed",
        description: "Wahana unik berbentuk tempat tidur yang membawa Anda melayang di udara dengan pemandangan danau yang menakjubkan.",
        image: "/src/assets/Wahana/FlyingBed.jpeg",
        duration: "5-10 menit",
        capacity: "1-3 orang",
        rating: 4.7,
    },
    {
        slug: "mockingbird",
        title: "Mockingbird",
        description: "Wahana melayang dengan ritme tenang dan gerakan halus yang menenangkan, sempurna untuk menikmati pemandangan dengan santai.",
        image: "/src/assets/Wahana/mockbird.jpeg",
        duration: "5-10 menit",
        capacity: "1-2 orang",
        rating: 4.6,
    },
];
</script>
