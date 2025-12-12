<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const id = computed(() => route.params.id);

const wahanaData = {
    "dragon-slide": {
        title: "Dragon Slide",
        description:
            "Seluncuran besar berbentuk naga yang menawarkan pengalaman seru untuk anak-anak dan dewasa. Dengan desain yang menarik dan aman, wahana ini memberikan sensasi meluncur yang menyenangkan.",
        image: new URL("../assets/Wahana/DragonSlide.jpeg", import.meta.url).href,
        location: "Area Wahana Utama",
        duration: "5-8 menit",
        capacity: "1-2 orang",
        rating: 4.8,
        bestTime: "Pagi hingga sore hari",
        activities: [
            "Meluncur di seluncuran naga",
            "Foto dengan latar Dragon Slide",
            "Bermain bersama keluarga",
        ],
        facilities: [
            "Seluncuran aman dengan pegangan",
            "Area antrian tertutup",
            "Loker penyimpanan barang",
        ],
        tips: [
            "Gunakan pakaian yang nyaman",
            "Lepas aksesoris yang bisa jatuh",
            "Ikuti instruksi petugas",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses unlimited ke Dragon Slide",
        },
        rules: [
            "Tinggi minimal 100cm",
            "Tidak boleh membawa barang bawaan",
            "Ikuti instruksi keselamatan",
        ],
    },

    "jet-ski-banana-boat": {
        title: "Jet Ski & Banana Boat",
        description:
            "Aktivitas air yang mendebarkan di danau Lakeview. Nikmati sensasi kecepatan dengan jet ski atau keseruan bersama teman dengan banana boat yang memacu adrenalin.",
        image: new URL("../assets/Wahana/jetski.jpg", import.meta.url).href,
        location: "Area Danau",
        duration: "10-15 menit",
        capacity: "1-5 orang",
        rating: 4.9,
        bestTime: "Pagi hingga sore saat cuaca cerah",
        activities: [
            "Berkendara jet ski di danau",
            "Naik banana boat bersama grup",
            "Menikmati pemandangan danau dari air",
        ],
        facilities: [
            "Jet ski modern dan terawat",
            "Banana boat kapasitas 5 orang",
            "Pelampung keselamatan",
            "Instruktur berpengalaman",
        ],
        tips: [
            "Gunakan pakaian yang bisa basah",
            "Bawa baju ganti",
            "Dengarkan briefing keselamatan",
            "Simpan barang berharga di loker",
        ],
        ticketInfo: {
            weekday: "Rp 100.000 - 150.000",
            weekend: "Rp 150.000 - 200.000",
            included: "Pelampung dan instruktur",
        },
        rules: [
            "Wajib menggunakan pelampung",
            "Usia minimal 12 tahun untuk jet ski",
            "Ikuti instruksi instruktur",
            "Tidak boleh dalam pengaruh alkohol",
        ],
    },

    "virtual-reality-indoor": {
        title: "Hiburan Virtual Reality Indoor",
        description:
            "Pengalaman virtual reality dengan berbagai pilihan permainan menarik. Rasakan sensasi dunia virtual yang immersive dengan teknologi VR terkini.",
        image: new URL("../assets/Wahana/VirtualBox.jpg", import.meta.url).href,
        location: "Area Indoor",
        duration: "15-30 menit",
        capacity: "1-4 orang",
        rating: 4.7,
        bestTime: "Sepanjang hari (indoor)",
        activities: [
            "Bermain game VR",
            "Eksplorasi dunia virtual",
            "Kompetisi multiplayer",
        ],
        facilities: [
            "Headset VR modern",
            "Ruangan ber-AC",
            "Controller wireless",
            "Berbagai pilihan game",
        ],
        tips: [
            "Datang saat tidak ramai untuk lebih puas",
            "Coba berbagai jenis game",
            "Istirahat jika merasa pusing",
        ],
        ticketInfo: {
            weekday: "Rp 50.000 per sesi",
            weekend: "Rp 75.000 per sesi",
            included: "Akses semua game VR",
        },
        rules: [
            "Usia minimal 10 tahun",
            "Tidak boleh makan/minum di area VR",
            "Hati-hati dengan peralatan",
        ],
    },

    "ninja-warrior": {
        title: "Ninja Warrior",
        description:
            "Uji kelincahan dan kekuatanmu di arena Ninja Warrior. Tantangan seru dengan berbagai rintangan yang menguji kemampuan fisik dan mental.",
        image: new URL("../assets/Wahana/NinjaWarrior.jpg", import.meta.url).href,
        location: "Area Outdoor",
        duration: "Unlimited",
        capacity: "1-5 orang",
        rating: 4.6,
        bestTime: "Pagi atau sore saat tidak terlalu panas",
        activities: [
            "Melewati rintangan Ninja Warrior",
            "Kompetisi waktu dengan teman",
            "Latihan kelincahan",
        ],
        facilities: [
            "Rintangan standar Ninja Warrior",
            "Safety mat",
            "Area istirahat",
        ],
        tips: [
            "Gunakan sepatu olahraga",
            "Pemanasan sebelum bermain",
            "Jangan memaksakan diri",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses unlimited Ninja Warrior",
        },
        rules: [
            "Usia minimal 8 tahun",
            "Ikuti jalur yang ditentukan",
            "Tidak boleh melompat dari rintangan",
        ],
    },

    "flying-fox-sky-bike": {
        title: "Flying Fox / Sky Bike",
        description:
            "Meluncur di atas danau dengan kecepatan tinggi dan pemandangan spektakuler. Rasakan sensasi terbang dengan flying fox atau bersepeda di langit dengan sky bike.",
        image: new URL("../assets/Wahana/FlyingFox.jpg", import.meta.url).href,
        location: "Area Danau",
        duration: "8-10 menit",
        capacity: "1 orang",
        rating: 4.9,
        bestTime: "Pagi atau sore untuk pemandangan terbaik",
        activities: [
            "Flying fox melintasi danau",
            "Sky bike di ketinggian",
            "Menikmati view 360 derajat",
        ],
        facilities: [
            "Harness keselamatan standar internasional",
            "Helm pelindung",
            "Instruktur bersertifikat",
        ],
        tips: [
            "Tidak disarankan untuk yang takut ketinggian",
            "Simpan barang di loker",
            "Dengarkan instruksi dengan baik",
        ],
        ticketInfo: {
            weekday: "Rp 75.000",
            weekend: "Rp 100.000",
            included: "Peralatan keselamatan lengkap",
        },
        rules: [
            "Berat maksimal 100kg",
            "Usia minimal 12 tahun",
            "Wajib menggunakan safety gear",
        ],
    },

    "dream-castle": {
        title: "Dream Castle",
        description:
            "Istana impian untuk anak-anak dengan berbagai permainan seru dan area bermain yang aman. Wahana ini dirancang khusus untuk memberikan pengalaman bermain yang menyenangkan bagi anak-anak.",
        image: new URL("../assets/Wahana/Dream_Castle_1.png", import.meta.url).href,
        location: "Area Anak-anak",
        duration: "1-2 Jam",
        capacity: "10-20 anak",
        rating: 4.7,
        bestTime: "Pagi hingga sore",
        activities: [
            "Bermain di istana",
            "Perosotan dan jembatan",
            "Area bermain interaktif",
        ],
        facilities: [
            "Playground aman",
            "Area orang tua",
            "Toilet anak",
        ],
        tips: [
            "Dampingi anak di bawah 5 tahun",
            "Bawa kaos kaki",
            "Awasi anak saat bermain",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses semua area Dream Castle",
        },
        rules: [
            "Usia maksimal 12 tahun",
            "Wajib menggunakan kaos kaki",
            "Orang tua wajib mengawasi",
        ],
    },

    "holloway": {
        title: "Holloway",
        description:
            "Spot foto 6 sap frame warna khas batik dayak Kalimantan Timur dan juga jalan akses menuju VIP area. Instalasi seni yang memadukan budaya lokal dengan estetika modern.",
        image: new URL("../assets/Wahana/Holloway.jpg", import.meta.url).href,
        location: "Akses VIP Area",
        duration: "15-30 menit",
        capacity: "2-5 orang",
        rating: 4.8,
        bestTime: "Siang hingga sore untuk pencahayaan terbaik",
        activities: [
            "Foto di frame batik Dayak",
            "Eksplorasi seni instalasi",
            "Akses ke area VIP",
        ],
        facilities: [
            "6 frame foto berbeda",
            "Pencahayaan optimal",
            "Jalan setapak luas",
        ],
        tips: [
            "Gunakan pakaian berwarna solid",
            "Coba semua frame untuk variasi",
            "Datang saat tidak ramai",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses Holloway dan jalan VIP",
        },
        rules: [
            "Jangan menyentuh frame",
            "Antri dengan tertib",
            "Maksimal 5 menit per frame",
        ],
    },

    "heaven-door": {
        title: "Heaven Door",
        description:
            "Spot foto tangga menuju ke langit dengan pemandangan danau biru memukau diseluruh area Lakeview. Instalasi ikonik yang memberikan ilusi tangga menuju surga.",
        image: new URL("../assets/Wahana/HeavenDoor.jpg", import.meta.url).href,
        location: "Area Viewpoint",
        duration: "15-30 menit",
        capacity: "1-3 orang",
        rating: 4.9,
        bestTime: "Pagi atau sore untuk cahaya dramatis",
        activities: [
            "Foto di tangga langit",
            "Menikmati view danau",
            "Konten kreatif untuk sosmed",
        ],
        facilities: [
            "Tangga instalasi aman",
            "Platform foto",
            "Viewpoint 360 derajat",
        ],
        tips: [
            "Gunakan pakaian cerah",
            "Bawa kamera dengan lensa wide",
            "Coba berbagai angle",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses Heaven Door dan viewpoint",
        },
        rules: [
            "Maksimal 3 orang di tangga",
            "Tidak boleh melompat",
            "Waktu maksimal 10 menit",
        ],
    },

    "cappadocia": {
        title: "Cappadocia",
        description:
            "Spot foto dua balon udara cappadocia dengan design Lakeview dan IKN Nusantara. Replika balon udara yang instagramable dengan tema lokal.",
        image: new URL("../assets/Wahana/Cappadocia.jpg", import.meta.url).href,
        location: "Area Foto",
        duration: "15-30 menit",
        capacity: "2-4 orang",
        rating: 4.8,
        bestTime: "Pagi atau sore untuk cahaya lembut",
        activities: [
            "Foto dengan balon udara",
            "Pose kreatif",
            "Konten Instagram",
        ],
        facilities: [
            "2 replika balon udara",
            "Platform foto",
            "Backdrop danau",
        ],
        tips: [
            "Gunakan outfit warna-warni",
            "Coba pose di berbagai sudut",
            "Datang saat golden hour",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses area Cappadocia",
        },
        rules: [
            "Jangan memanjat balon",
            "Antri dengan tertib",
            "Maksimal 5 menit per grup",
        ],
    },

    "frame-box": {
        title: "Frame Box",
        description:
            "Spot foto tempat duduk frame membingkai pemandangan danau. Instalasi unik yang menciptakan frame alami untuk foto dengan latar danau.",
        image: new URL("../assets/Wahana/Framebox.jpeg", import.meta.url).href,
        location: "Tepi Danau",
        duration: "15-30 menit",
        capacity: "1-2 orang",
        rating: 4.7,
        bestTime: "Siang hingga sore",
        activities: [
            "Foto dengan frame danau",
            "Bersantai menikmati view",
            "Konten foto estetik",
        ],
        facilities: [
            "Frame box dengan tempat duduk",
            "View danau langsung",
            "Area foto tertata",
        ],
        tips: [
            "Posisi duduk santai",
            "Gunakan lensa portrait",
            "Manfaatkan cahaya natural",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses Frame Box",
        },
        rules: [
            "Maksimal 2 orang",
            "Jangan berdiri di frame",
            "Waktu maksimal 10 menit",
        ],
    },

    "skydeck-vip": {
        title: "Skydeck (VIP)",
        description:
            "Spot foto dengan best view menikmati pemandangan garis horizon danau secara 360 derajat. Area VIP eksklusif dengan pemandangan terbaik di Lakeview.",
        image: new URL("../assets/Wahana/Skydeck.jpg", import.meta.url).href,
        location: "Area VIP",
        duration: "20-40 menit",
        capacity: "3-6 orang",
        rating: 4.9,
        bestTime: "Sore menjelang sunset",
        activities: [
            "Menikmati view 360 derajat",
            "Foto panorama danau",
            "Bersantai di area VIP",
        ],
        facilities: [
            "Deck eksklusif",
            "Tempat duduk premium",
            "Telescope",
            "Area foto optimal",
        ],
        tips: [
            "Reservasi untuk akses VIP",
            "Datang saat sunset",
            "Bawa kamera profesional",
        ],
        ticketInfo: {
            weekday: "Akses VIP terpisah",
            weekend: "Akses VIP terpisah",
            included: "Akses Skydeck dan fasilitas VIP",
        },
        rules: [
            "Akses terbatas dengan reservasi",
            "Maksimal 6 orang per sesi",
            "Jaga kebersihan area VIP",
        ],
    },

    "minion-slides": {
        title: "Minion Slides",
        description:
            "Wahana Minion Slides adalah wahana versi mini dari dragon slides yang bisa dimainkan oleh semua umur, minimal 3 tahun, dibawah 5 tahun harus di dampingi orang tua.",
        image: new URL("../assets/Wahana/MinionSlide.png", import.meta.url).href,
        location: "Area Anak-anak",
        duration: "5-10 menit",
        capacity: "1-2 anak",
        rating: 4.6,
        bestTime: "Pagi hingga sore",
        activities: [
            "Meluncur di seluncuran mini",
            "Bermain dengan tema Minion",
            "Foto dengan karakter",
        ],
        facilities: [
            "Seluncuran aman untuk anak",
            "Tema Minion colorful",
            "Area bermain soft",
        ],
        tips: [
            "Dampingi anak di bawah 5 tahun",
            "Gunakan pakaian nyaman",
            "Awasi anak saat bermain",
        ],
        ticketInfo: {
            weekday: "Termasuk tiket utama",
            weekend: "Termasuk tiket utama",
            included: "Akses unlimited Minion Slides",
        },
        rules: [
            "Usia minimal 3 tahun",
            "Wajib didampingi orang tua (< 5 tahun)",
            "Tidak boleh berlarian",
        ],
    },

    "giant-swing": {
        title: "Giant Swing",
        description:
            "Ayunan raksasa yang membawa Anda melambung tinggi dengan kecepatan mendebarkan, memberikan sensasi terbang bebas yang menggetarkan. Wahana ekstrem untuk pencari adrenalin.",
        image: new URL("../assets/Wahana/GiantSwing.jpeg", import.meta.url).href,
        location: "Area Ekstrem",
        duration: "5-8 menit",
        capacity: "1-2 orang",
        rating: 4.8,
        bestTime: "Pagi atau sore",
        activities: [
            "Berayun di ketinggian",
            "Menikmati sensasi ekstrem",
            "Foto dari atas",
        ],
        facilities: [
            "Giant swing aman",
            "Safety harness",
            "Instruktur berpengalaman",
        ],
        tips: [
            "Tidak untuk yang takut ketinggian",
            "Simpan barang berharga",
            "Ikuti instruksi keselamatan",
        ],
        ticketInfo: {
            weekday: "Rp 50.000",
            weekend: "Rp 75.000",
            included: "Peralatan keselamatan",
        },
        rules: [
            "Usia minimal 12 tahun",
            "Berat maksimal 100kg",
            "Wajib menggunakan safety gear",
        ],
    },

    "flying-bed": {
        title: "Flying Bed",
        description:
            "Wahana unik berbentuk tempat tidur yang membawa Anda melayang di udara dengan pemandangan danau yang menakjubkan. Sensasi melayang yang santai dan menyenangkan.",
        image: new URL("../assets/Wahana/FlyingBed.jpeg", import.meta.url).href,
        location: "Area Danau",
        duration: "5-10 menit",
        capacity: "1-3 orang",
        rating: 4.7,
        bestTime: "Siang hingga sore",
        activities: [
            "Melayang di atas danau",
            "Bersantai sambil berayun",
            "Foto dengan view danau",
        ],
        facilities: [
            "Flying bed aman",
            "Safety belt",
            "Platform naik/turun",
        ],
        tips: [
            "Berbaring dengan nyaman",
            "Nikmati pemandangan",
            "Jangan bergerak berlebihan",
        ],
        ticketInfo: {
            weekday: "Rp 40.000",
            weekend: "Rp 60.000",
            included: "Akses Flying Bed",
        },
        rules: [
            "Maksimal 3 orang",
            "Berat total maksimal 250kg",
            "Ikuti instruksi operator",
        ],
    },

    "mockingbird": {
        title: "Mockingbird",
        description:
            "Wahana melayang dengan ritme tenang dan gerakan halus yang menenangkan, sempurna untuk menikmati pemandangan dengan santai. Pengalaman relaksasi di udara.",
        image: new URL("../assets/Wahana/mockbird.jpeg", import.meta.url).href,
        location: "Area Santai",
        duration: "5-10 menit",
        capacity: "1-2 orang",
        rating: 4.6,
        bestTime: "Sore menjelang sunset",
        activities: [
            "Melayang dengan tenang",
            "Menikmati view danau",
            "Relaksasi di udara",
        ],
        facilities: [
            "Tempat duduk nyaman",
            "Gerakan halus",
            "Safety system",
        ],
        tips: [
            "Duduk dengan santai",
            "Nikmati gerakan lembut",
            "Cocok untuk yang tidak suka ekstrem",
        ],
        ticketInfo: {
            weekday: "Rp 35.000",
            weekend: "Rp 50.000",
            included: "Akses Mockingbird",
        },
        rules: [
            "Usia minimal 8 tahun",
            "Berat maksimal 150kg",
            "Tidak boleh berdiri",
        ],
    },
};

const wahana = computed(() => wahanaData[id.value]);
</script>

<template>
    <div v-if="!wahana" class="min-h-screen pt-28 text-center">
        <h1 class="text-2xl font-semibold mb-4">Wahana Tidak Ditemukan</h1>
        <RouterLink to="/wahana" class="text-[#00D5BE] hover:underline">
            ← Kembali ke Wahana
        </RouterLink>
    </div>

    <div v-else class="min-h-screen bg-[#F9FBFD] pt-28 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RouterLink
                to="/wahana"
                class="inline-flex items-center gap-2 text-[#00D5BE] hover:text-[#00b19e] transition-colors mb-6"
            >
                ← Kembali ke Wahana
            </RouterLink>

            <div class="bg-white rounded-3xl overflow-hidden shadow-md mb-8">
                <div class="relative h-80 md:h-96">
                    <img
                        :src="wahana.image"
                        :alt="wahana.title"
                        class="w-full h-full object-cover"
                    />
                    <div
                        class="absolute inset-0 bg-linear-t from-black/70 to-transparent"
                    ></div>

                    <div class="absolute bottom-0 p-6 text-white">
                        <h1 class="text-3xl font-semibold mb-2">
                            {{ wahana.title }}
                        </h1>
                        <p class="text-white/90">
                            {{ wahana.location }} •
                            {{ wahana.duration }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 space-y-8">
                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h2 class="text-lg font-semibold mb-3">Deskripsi</h2>
                        <p class="text-gray-600 leading-relaxed">
                            {{ wahana.description }}
                        </p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h2 class="text-lg font-semibold mb-4">
                            Aktivitas yang Bisa Dilakukan
                        </h2>

                        <ul class="space-y-2">
                            <li
                                v-for="(a, index) in wahana.activities"
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
                                v-for="(f, index) in wahana.facilities"
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
                                v-for="(t, index) in wahana.tips"
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
                                v-for="(r, index) in wahana.rules"
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
                        <p class="text-gray-700">{{ wahana.bestTime }}</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow">
                        <h3 class="text-lg font-semibold mb-4">Harga Tiket</h3>

                        <p class="text-gray-600 flex justify-between">
                            Hari Biasa:
                            <strong class="text-[#00D5BE]">
                                {{ wahana.ticketInfo.weekday }}
                            </strong>
                        </p>

                        <p class="text-gray-600 flex justify-between mt-2">
                            Akhir Pekan:
                            <strong class="text-[#00D5BE]">
                                {{ wahana.ticketInfo.weekend }}
                            </strong>
                        </p>

                        <div
                            class="mt-4 p-3 bg-[#F9FBFD] rounded-xl text-xs text-gray-700"
                        >
                            <strong>Sudah termasuk:</strong>
                            {{ wahana.ticketInfo.included }}
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
                            to="/wahana"
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
