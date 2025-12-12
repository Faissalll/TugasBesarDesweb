<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const ticketPackages = [
    {
        id: "silver",
        name: "Tiket Silver",
        weekdayPrice: 25000,
        weekendPrice: 35000,
        image: new URL("../assets/Tiket/SILVER.png", import.meta.url).href,
        description: "Pembelian tiket dapat dilakukan secara langsung di lokasi (On The Spot/OTS). Tiket Silver sudah termasuk akses ke Amphitheater, Spot Foto Skywalk 2 lantai, Holloway, Cappadocia, Heaven Doors, dan Framebox. Tidak termasuk wahana berbayar dan area VIP.",
        priceLabel: "Weekday Senin-Jumat - Silver 25k | Weekend Sabtu-Minggu-Libur Nasional - Silver 35k",
        included: [
            "Amphitheater",
            "Skywalk 2 Lantai",
            "Holloway",
            "Cappadocia",
            "Heaven Doors",
            "Framebox"
        ],
        wahanaInfo: "Semua wahana berbayar terpisah"
    },
    {
        id: "gold",
        name: "Tiket Gold",
        weekdayPrice: 80000,
        weekendPrice: 100000,
        image: new URL("../assets/Tiket/Gold.png", import.meta.url).href,
        description: "Pembelian tiket dapat dilakukan secara langsung di lokasi (On The Spot/OTS). Tiket Gold sudah termasuk semua akses Silver + Akses VIP Area (Mirror Cubes, The Nest, Skydeck). Bebas tambah berbagai wahana tersedia (Basic & Extreme) dengan harga terpisah. Tidak termasuk Wahana Air (Jetski & Banana Boat).",
        priceLabel: "Weekday Senin-Jumat - Gold 80k | Weekend Sabtu-Minggu-Libur Nasional - Gold 100k",
        included: [
            "Semua akses Silver",
            "VIP: Mirror Cubes, The Nest, Skydeck"
        ],
        wahanaInfo: "Wahana berbayar terpisah tersedia mulai dari Rp 20.000 - Rp 70.000"
    },
    {
        id: "platinum",
        name: "Tiket Platinum",
        weekdayPrice: 240000,
        weekendPrice: 300000,
        image: new URL("../assets/Tiket/PLATINUM.png", import.meta.url).href,
        description: "Pembelian tiket dapat dilakukan secara langsung di lokasi (On The Spot/OTS). Tiket Platinum sudah termasuk semua akses Silver + Gold + Spot Foto Premium (Spectra Falls & Lost Garden) + 8 Kuota Wahana bebas pilih SEMUA wahana: Dragon Slides, Bioskop VR, Dream Castle, Minion Slide, Mocking Bird, Flying Fox, Giant Swing, Spider Web Coaster, Ninja Warrior, Flying Bed. Tidak termasuk Wahana Air (Jetski & Banana Boat).",
        priceLabel: "Weekday Senin-Jumat - Platinum 240k | Weekend Sabtu-Minggu-Libur Nasional - Platinum 300k",
        included: [
            "Semua akses Silver + Gold",
            "Spot Foto Premium: Spectra Falls & Lost Garden",
            "8 Kuota Wahana (SEMUA wahana tersedia)"
        ],
        wahanaInfo: "Termasuk: Dragon Slides, Bioskop VR, Dream Castle, Minion Slide, Mocking Bird, Zip Line, Giant Swing, Spider Web Coaster, Ninja Warrior, Flying Bed"
    },
];

const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);
};

const goToBooking = () => {
    router.push("/pesan-tiket");
};
</script>

<template>
    <section class="pt-28 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2">
                    Paket Tiket Lakeview
                </h2>
                <p class="text-gray-600">
                    Pilih paket tiket yang sesuai dengan kebutuhan Anda
                </p>
            </div>

            <div class="space-y-8">
                <div
                    v-for="ticket in ticketPackages"
                    :key="ticket.id"
                    class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <div class="grid md:grid-cols-[300px_1fr] gap-6 p-6">
                        <!-- Left: Ticket Image -->
                        <div class="flex items-center justify-center bg-gray-50 rounded-xl p-4">
                            <div class="w-full h-auto flex items-center justify-center">
                                <img 
                                    :src="ticket.image" 
                                    :alt="ticket.name" 
                                    class="w-full h-full object-contain max-h-[250px] transform hover:scale-105 transition-transform duration-300"
                                >
                            </div>
                        </div>

                        <!-- Right: Ticket Info -->
                        <div class="flex flex-col justify-between">
                            <div>
                                <h3 class="text-xl font-semibold text-[#1A1A1A] mb-3">
                                    {{ ticket.name }}
                                </h3>
                                <p class="text-sm text-gray-600 leading-relaxed mb-3">
                                    {{ ticket.description }}
                                </p>
                                
                                <!-- Included Items -->
                                <div class="mb-3 bg-[#E6FFFA] p-3 rounded-lg">
                                    <p class="text-xs font-semibold text-[#00D5BE] mb-1">Sudah Termasuk:</p>
                                    <ul class="text-xs text-gray-700 space-y-0.5 list-disc ml-4">
                                        <li v-for="(item, idx) in ticket.included" :key="idx">{{ item }}</li>
                                    </ul>
                                </div>
                                
                                <!-- Wahana Info -->
                                <div class="text-xs text-gray-600 mb-3 italic">
                                    {{ ticket.wahanaInfo }}
                                </div>
                                
                                <p class="text-xs text-gray-500">
                                    {{ ticket.priceLabel }}
                                </p>
                            </div>

                            <div class="flex items-center justify-between mt-4">
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5 text-[#00D5BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                    </svg>
                                    <div>
                                        <div class="text-xs text-gray-500">
                                            <span class="line-through">{{ formatCurrency(ticket.weekendPrice + 10000) }}</span>
                                        </div>
                                        <div class="text-lg font-bold text-[#00D5BE]">
                                            {{ formatCurrency(ticket.weekdayPrice) }}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    @click="goToBooking"
                                    class="px-8 py-2.5 bg-[#00D5BE] text-white rounded-full font-semibold hover:bg-[#00b19e] transition-colors uppercase text-sm"
                                >
                                    Beli Sekarang →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
