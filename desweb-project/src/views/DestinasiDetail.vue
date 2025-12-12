<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { ref } from "vue";

const route = useRoute();
const id = computed(() => route.params.id);

const destinationsData = {
    "danau-hijau": {
        title: "Danau Hijau Lakeview",
        description:
            "Pusat area wisata Lakeview yang merupakan bekas tambang yang telah disulap menjadi danau indah dengan air berwarna hijau tosca yang memukau.",
        image: new URL("../assets/DanauHijau.webp", import.meta.url).href,
        location: "Area Utama Lakeview",
        duration: "Sepanjang Hari",
        rating: 4.9,
        bestTime:
            "Pagi hari (06.00-09.00) untuk cahaya terbaik dan cuaca sejuk",
        activities: [
            "Fotografi landscape danau dan tebing",
            "Menikmati pemandangan dari berbagai sudut",
            "Berjalan santai di sekitar danau",
            "Piknik keluarga di area taman",
            "Menyewa perahu untuk keliling danau",
        ],
        facilities: [
            "Area parkir luas",
            "Toilet bersih",
            "Mushola",
            "Gazebo dan tempat duduk",
            "Kafe dan warung makan",
            "Spot foto Instagramable",
        ],
        tips: [
            "Datang pagi untuk menghindari keramaian",
            "Bawa kamera dengan lensa wide",
            "Gunakan alas kaki nyaman",
            "Bawa jaket tipis di pagi hari",
            "Bawa tripod untuk foto landscape",
        ],
        ticketInfo: {
            weekday: "Rp 25.000",
            weekend: "Rp 35.000",
            included: "Akses ke danau utama, area taman, spot foto",
        },
        rules: [
            "Dilarang membuang sampah sembarangan",
            "Dilarang berenang di danau",
            "Jaga kebersihan lingkungan",
            "Patuhi rambu-rambu keselamatan",
        ],
    },

    skywalk: {
        title: "Skywalk & Viewpoint Bukit",
        description:
            "Jembatan kaca transparan dengan pemandangan spektakuler dari ketinggian.",
        image: new URL("../assets/Skywalk.png", import.meta.url).href,
        location: "Puncak Bukit Lakeview",
        duration: "1-2 Jam",
        rating: 4.8,
        bestTime: "Sore hari (15.00-17.00) untuk menikmati sunset",
        activities: [
            "Berjalan di atas skywalk kaca",
            "Foto dengan panorama pegunungan",
            "Menikmati pemandangan sunset",
        ],
        facilities: [
            "Platform kaca",
            "Tempat duduk & gazebo",
            "Telescope pemantau",
            "Spot foto",
        ],
        tips: [
            "Gunakan alas kaki aman",
            "Datang saat cuaca cerah",
            "Pegang pegangan bila takut ketinggian",
        ],
        ticketInfo: {
            weekday: "Rp 15.000",
            weekend: "Rp 20.000",
            included: "Akses skywalk & viewpoint",
        },
        rules: [
            "Maksimal 10 orang di skywalk",
            "Tidak boleh berlari",
            "Tidak boleh makan di skywalk",
        ],
    },

    "amphitheatre": {
        title: "Amphitheatre",
        description:
            "Amphitheatre di Lakeview adalah tempat hiburan yang menyediakan fasilitas karaoke untuk pengunjung dan live music, menciptakan suasana meriah. Akses ke amphitheatre sudah termasuk dalam tiket masuk, sehingga pengunjung bebas menikmati momen seru sambil bernyanyi dan bersantai.",
        image: new URL("../assets/Amphitheatre.jpg", import.meta.url).href,
        location: "Area Hiburan Lakeview",
        duration: "Sepanjang Hari",
        rating: 4.8,
        bestTime: "Sore hingga malam hari untuk live music dan karaoke",
        activities: [
            "Karaoke bersama teman dan keluarga",
            "Menikmati live music performance",
            "Bersantai sambil mendengarkan musik",
            "Foto di panggung amphitheatre",
            "Bernyanyi di fasilitas karaoke",
        ],
        facilities: [
            "Panggung amphitheatre",
            "Sistem sound profesional",
            "Fasilitas karaoke",
            "Tempat duduk bertingkat",
            "Area live music",
            "Lighting system",
        ],
        tips: [
            "Datang sore untuk mendapat tempat duduk terbaik",
            "Cek jadwal live music di hari kunjungan",
            "Bawa semangat untuk bernyanyi",
            "Siapkan lagu favorit untuk karaoke",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses amphitheatre, karaoke, dan live music",
        },
        rules: [
            "Jaga ketenangan saat ada pertunjukan",
            "Hormati pengunjung lain",
            "Tidak boleh membawa makanan dan minuman dari luar",
            "Patuhi antrian karaoke",
        ],
    },

    "dream-garden": {
        title: "Dream Garden / Area Alam Terbuka",
        description:
            "Area luas dengan pepohonan rindang, tempat ideal untuk piknik dan bermain.",
        image: new URL("../assets/dreamGarden.jpeg", import.meta.url).href,
        location: "Area Garden Lakeview",
        duration: "Sepanjang Hari",
        rating: 4.8,
        bestTime: "Siang hingga sore",
        activities: [
            "Piknik keluarga",
            "Bermain bola / frisbee",
            "Bersantai di bawah pohon",
        ],
        facilities: [
            "Hamparan rumput",
            "Pohon rindang",
            "Area bermain anak",
            "Gazebo",
        ],
        tips: ["Bawa alas duduk", "Gunakan sunscreen"],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses area garden",
        },
        rules: ["Buang sampah pada tempatnya", "Tidak boleh menyalakan api"],
    },

    "mirror-cube": {
        title: "Mirror Cube",
        description:
            "Mirror Cube adalah spot foto unik dengan dinding cermin yang menciptakan refleksi artistik. Berlokasi di area monumen, instalasi ini menawarkan pengalaman visual futuristik dan instagramable, menarik perhatian pengunjung untuk mengabadikan momen.",
        image: new URL("../assets/MirrorCube.jpg", import.meta.url).href,
        location: "Area Monumen Lakeview",
        duration: "30-60 Menit",
        rating: 4.9,
        bestTime: "Siang hingga sore untuk pencahayaan terbaik",
        activities: [
            "Foto dengan efek refleksi cermin",
            "Eksplorasi sudut-sudut unik instalasi",
            "Membuat konten kreatif untuk media sosial",
            "Selfie dengan background futuristik",
            "Foto grup dengan efek cermin",
        ],
        facilities: [
            "Instalasi Mirror Cube",
            "Area foto instagramable",
            "Pencahayaan natural",
            "Spot foto dari berbagai sudut",
        ],
        tips: [
            "Gunakan pakaian berwarna cerah untuk kontras",
            "Datang saat cuaca cerah untuk refleksi terbaik",
            "Coba berbagai angle untuk hasil maksimal",
            "Bersihkan lensa kamera dari sidik jari",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses Mirror Cube dan area monumen",
        },
        rules: [
            "Jangan menyentuh permukaan cermin",
            "Antri dengan tertib untuk foto",
            "Maksimal 5 menit per sesi foto",
            "Jaga kebersihan area",
        ],
    },

    "resto-lakeview": {
        title: "Resto Lakeview",
        description:
            "Resto di Lakeview menyajikan beragam hidangan, mulai dari makanan tradisional hingga Chinese food yang lezat dan halal. Dengan suasana nyaman dan desain modern, pengunjung dapat menikmati santapan berkualitas dengan cita rasa autentik.",
        image: new URL("../assets/Resto.jpg", import.meta.url).href,
        location: "Area Kuliner Lakeview",
        duration: "1-2 Jam",
        rating: 4.8,
        bestTime: "Siang hingga sore untuk makan siang atau makan malam",
        activities: [
            "Menikmati makanan tradisional Indonesia",
            "Mencicipi Chinese food halal",
            "Bersantai dengan keluarga",
            "Foto di area resto yang modern",
            "Menikmati suasana nyaman sambil makan",
        ],
        facilities: [
            "Area makan indoor ber-AC",
            "Desain interior modern",
            "Menu halal bersertifikat",
            "Tempat duduk keluarga",
            "Area outdoor",
            "Mushola terdekat",
        ],
        tips: [
            "Datang saat jam makan untuk menu fresh",
            "Coba menu Chinese food yang menjadi signature",
            "Reservasi untuk rombongan besar",
            "Tanyakan menu rekomendasi chef",
        ],
        ticketInfo: {
            weekday: "Tidak perlu tiket khusus",
            weekend: "Tidak perlu tiket khusus",
            included: "Akses resto (bayar sesuai pesanan)",
        },
        rules: [
            "Jaga kebersihan meja makan",
            "Hormati pengunjung lain",
            "Tidak boleh membawa makanan dari luar",
            "Patuhi protokol kesehatan",
        ],
    },

    "the-nest-vip": {
        title: "The Nest (VIP)",
        description:
            "Spot foto bersantai di atas jaring estetik putih menghadap ke danau biru. Area VIP eksklusif yang menawarkan pengalaman unik dengan pemandangan spektakuler dan suasana yang tenang, sempurna untuk bersantai dan mengabadikan momen indah.",
        image: new URL("../assets/Thenest.jpg", import.meta.url).href,
        location: "Area VIP Lakeview",
        duration: "30-60 Menit",
        rating: 4.9,
        bestTime: "Pagi hingga sore untuk pencahayaan terbaik",
        activities: [
            "Foto di atas jaring putih estetik",
            "Bersantai dengan view danau",
            "Menikmati pemandangan 180 derajat",
            "Membuat konten kreatif untuk sosial media",
            "Relaksasi di area eksklusif",
        ],
        facilities: [
            "Jaring estetik putih",
            "Area VIP eksklusif",
            "Spot foto premium",
            "Pemandangan danau langsung",
            "Area bersantai nyaman",
        ],
        tips: [
            "Gunakan pakaian berwarna cerah untuk kontras",
            "Datang pagi untuk menghindari keramaian",
            "Bawa kamera dengan lensa wide",
            "Reservasi untuk akses VIP",
        ],
        ticketInfo: {
            weekday: "Akses VIP terpisah",
            weekend: "Akses VIP terpisah",
            included: "Akses The Nest dan area VIP",
        },
        rules: [
            "Maksimal 4 orang per sesi",
            "Waktu maksimal 30 menit per grup",
            "Jaga kebersihan jaring",
            "Tidak boleh membawa makanan dan minuman",
        ],
    },
};

const destination = computed(() => destinationsData[id.value]);
</script>

<template>
    <div v-if="!destination" class="min-h-screen pt-28 text-center">
        <h1 class="text-2xl font-semibold mb-4">Destinasi Tidak Ditemukan</h1>
        <RouterLink to="/destinasi" class="text-[#00D5BE] hover:underline">
            ← Kembali ke Destinasi
        </RouterLink>
    </div>

    <div v-else class="min-h-screen bg-[#F9FBFD] pt-28 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RouterLink
                to="/destinasi"
                class="inline-flex items-center gap-2 text-[#00D5BE] hover:text-[#00b19e] transition-colors mb-6"
            >
                ← Kembali ke Destinasi
            </RouterLink>

            <div class="bg-white rounded-3xl overflow-hidden shadow-md mb-8">
                <div class="relative h-80 md:h-96">
                    <img
                        :src="destination.image"
                        :alt="destination.title"
                        class="w-full h-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                    ></div>

                    <div class="absolute bottom-0 p-6 text-white">
                        <h1 class="text-3xl font-semibold mb-2">
                            {{ destination.title }}
                        </h1>
                        <p class="text-white/90">
                            {{ destination.location }} •
                            {{ destination.duration }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 space-y-8">
                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h2 class="text-lg font-semibold mb-3">Deskripsi</h2>
                        <p class="text-gray-600 leading-relaxed">
                            {{ destination.description }}
                        </p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h2 class="text-lg font-semibold mb-4">
                            Aktivitas yang Bisa Dilakukan
                        </h2>

                        <ul class="space-y-2">
                            <li
                                v-for="(a, index) in destination.activities"
                                :key="index"
                                class="flex gap-3"
                            >
                                <span class="text-[#00D5BE]">•</span>
                                <span>{{ a }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h2 class="text-lg font-semibold mb-4">Fasilitas</h2>

                        <ul class="grid md:grid-cols-2 gap-3">
                            <li
                                v-for="(f, index) in destination.facilities"
                                :key="index"
                                class="bg-[#F9FBFD] rounded-xl p-3 text-gray-700"
                            >
                                {{ f }}
                            </li>
                        </ul>
                    </div>

                    <div
                        class="bg-[#FFF9D9] border border-yellow-300 p-6 rounded-2xl"
                    >
                        <h2 class="text-lg font-semibold mb-4 text-yellow-700">
                            Tips Berkunjung
                        </h2>

                        <ul class="space-y-2">
                            <li
                                v-for="(t, index) in destination.tips"
                                :key="index"
                                class="flex gap-3"
                            >
                                <span class="text-yellow-600">•</span>
                                <span class="text-gray-700">{{ t }}</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h2 class="text-lg font-semibold mb-4">Peraturan</h2>

                        <ul class="space-y-2">
                            <li
                                v-for="(r, index) in destination.rules"
                                :key="index"
                                class="flex gap-3 text-gray-700"
                            >
                                <span class="text-red-500">•</span> {{ r }}
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="space-y-6 sticky top-28">
                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h3 class="text-lg font-semibold mb-2">
                            Waktu Terbaik
                        </h3>
                        <p class="text-gray-700">{{ destination.bestTime }}</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h3 class="text-lg font-semibold mb-4">Harga Tiket</h3>

                        <p class="text-gray-600 flex justify-between">
                            Hari Biasa:
                            <strong class="text-[#00D5BE]">
                                {{ destination.ticketInfo.weekday }}
                            </strong>
                        </p>

                        <p class="text-gray-600 flex justify-between mt-2">
                            Akhir Pekan:
                            <strong class="text-[#00D5BE]">
                                {{ destination.ticketInfo.weekend }}
                            </strong>
                        </p>

                        <div
                            class="mt-4 p-3 bg-[#F9FBFD] rounded-xl text-xs text-gray-700"
                        >
                            <strong>Sudah termasuk:</strong>
                            {{ destination.ticketInfo.included }}
                        </div>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow space-y-3">
                        <RouterLink
                            to="/wahana#ticket-section"
                            class="w-full block py-3 text-center bg-[#00D5BE] text-white rounded-xl hover:bg-[#00b19e] transition"
                        >
                            Beli Tiket
                        </RouterLink>

                        <RouterLink
                            to="/destinasi"
                            class="block text-center py-3 border-2 border-[#00D5BE] text-[#00D5BE] rounded-xl hover:bg-[#00D5BE] hover:text-white transition"
                        >
                            Kembali
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>