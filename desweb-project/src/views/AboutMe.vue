<template>
    <section id="tentang" class="pt-28 pb-44 bg-[#F9FBFD]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-10">
                <h2
                    class="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2"
                >
                    About Me
                </h2>
                <p class="text-gray-600 text-sm md:text-base">

                </p>
            </div>
            <div
                class="bg-white rounded-2xl shadow-sm p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10"
            >
                <div
                    class="rounded-xl overflow-hidden h-56 md:h-72 lg:h-80 group"
                >
                    <img
                        :src="aboutme"
                        alt="aboutme"
                        class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>

                <div class="flex flex-col justify-center">
                    <h3
                        class="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-3"
                    >
                        Muhammad Faisal
                    </h3>
                    <div
                        class="space-y-3 text-sm md:text-[15px] text-gray-600 leading-relaxed"
                    >
                        <p>
                            Dalam naungan PT Laju Lahan Digital (Lajuland),
                            Lakeview diinisasi sebagai gebrakan baru objek
                            wisata di wilayah Ibu Kota Nusantara. Tahun 2023
                            menjadi awal dari pengembangan lahan yang awalnya
                            tidak terjamah, dikelola dan dirombak menjadi daya
                            tarik bagi wisatawan lokal maupun internasional.
                        </p>
                        <p>
                            Lakeview adalah sebuah proyek wisata spektakuler
                            yang akan dibangun diatas tanah berbukit seluas 9
                            hektar dengan pemandangan danau hijau nan menawan.
                            Menempati lokasi strategis di Kelurahan Sungai
                            Siluang, Kecamatan Samboja, Kabupaten Kutai
                            Kartanegara yang hanya ditempuh dalam waktu 8 menit
                            dari pintu tol Samboja.
                        </p>
                        <p>
                            Sejak dibuka pada pertengahan tahun 2022, Lakeview
                            telah menjadi destinasi favorit wisatawan yang
                            mencari ketenangan dan keindahan alam. Kami
                            menawarkan berbagai aktivitas, mulai dari wisata
                            air, wahana keluarga, hingga wisata budaya lokal
                            yang otentik.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div
                    v-for="(item, i) in stats"
                    :key="i"
                    class="bg-white rounded-2xl shadow-sm px-4 py-5 text-center"
                >
                    <p
                        class="text-xl md:text-2xl font-semibold text-[#00D5BE] mb-1"
                    >
                        {{ item.value }}
                    </p>
                    <p
                        class="text-[11px] md:text-xs text-gray-500 uppercase tracking-wide"
                    >
                        {{ item.label }}
                    </p>
                </div>
            </div>


            <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
                <div class="lg:col-span-1">
                    <div
                        class="bg-white rounded-2xl shadow-sm px-6 py-7 h-full flex flex-col items-center justify-center text-center"
                    >
                        <p class="text-2xl font-semibold text-[#00D5BE] mb-1">
                            SKILL SAYA 
                        </p>
                        <p class="text-sm font-medium text-gray-800 mb-1">
                            Review 
                        </p>
                        <p class="text-xs text-gray-500">
                            Pengunjung puas dengan suasana, pelayanan, dan
                            pengalaman wisata di Lakeview.
                        </p>
                    </div>
                </div>

                
                <div class="lg:col-span-4">
                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        <div
                            v-for="(value, i) in values"
                            :key="i"
                            class="bg-white rounded-2xl shadow-sm px-4 py-5 text-center flex flex-col items-center"
                        >
                            <div
                                class="w-12 h-12 mb-3 rounded-full flex items-center justify-center bg-[#E6FFFA]"
                            >
                                <svg
                                    class="w-6 h-6 text-[#00D5BE]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        v-if="i === 0"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                    ></path>
                                    <path
                                        v-if="i === 1"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                    ></path>
                                    <path
                                        v-if="i === 2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                    <path
                                        v-if="i === 3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                </svg>
                            </div>
                            <p class="text-sm font-semibold text-gray-800 mb-1">
                                {{ value.title }}
                            </p>
                            <p class="text-xs text-gray-500">
                                {{ value.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


                </div>
    </section>
</template>

<script setup>
const tentangImage = new URL("../assets/Utama/Utama.jpeg", import.meta.url)
    .href;

const stats = [
    { value: "50K+", label: "Pengunjung" },
    { value: "4.9", label: "Rating" },
    { value: "15+", label: "Destinasi" },
];

</script>
