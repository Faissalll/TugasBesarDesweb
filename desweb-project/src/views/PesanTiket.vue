<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import CustomModal from "../components/CustomModal.vue";

const router = useRouter();

const visitDate = ref("");
const email = ref("");
const phoneNumber = ref(""); // Phone Number state added

// Tipe hari (weekday/weekend)
const isWeekend = ref(false);

// Cek apakah tanggal yang dipilih weekend
const checkWeekend = () => {
    if (visitDate.value) {
        const date = new Date(visitDate.value);
        const day = date.getDay();
        isWeekend.value = day === 0 || day === 6;
    }
};

// Paket tiket yang tersedia
const ticketPackages = [
    {
        id: "silver",
        name: "TIKET SILVER",
        weekdayPrice: 25000,
        weekendPrice: 35000,
        image: new URL("../assets/Tiket/SILVER.png", import.meta.url).href,
        description: "Akses masuk area Lakeview & spot foto basic.",
        included: [
            "Amphitheater", "Skywalk 2 Lantai", "Holloway", 
            "Cappadocia", "Heaven Doors", "Framebox"
        ],
        wahanaQuota: 0
    },
    {
        id: "gold",
        name: "TIKET GOLD",
        weekdayPrice: 80000,
        weekendPrice: 100000,
        image: new URL("../assets/Tiket/Gold.png", import.meta.url).href,
        description: "Akses Silver + Area VIP. Bebas tambah wahana (berbayar).",
        included: [
            "Semua Akses Silver",
            "VIP: Mirror Cubes, The Nest, Skydeck"
        ],
        wahanaQuota: 0
    },
    {
        id: "platinum",
        name: "TIKET PLATINUM",
        weekdayPrice: 240000,
        weekendPrice: 300000,
        image: new URL("../assets/Tiket/PLATINUM.png", import.meta.url).href,
        description: "Akses Gold + Premium Spots + 8 Wahana.",
        included: [
            "Semua Akses Silver + Gold",
            "Premium: Spectra Falls & Lost Garden",
            "8 Kuota Wahana (Bebas Pilih)"
        ],
        wahanaQuota: 8
    },
];

// Paket tiket yang dipilih (default: Silver)
const selectedTicket = ref(ticketPackages[0]);
const ticketQuantity = ref(0);

// Cek apakah paket menggunakan sistem kuota (Gold/Platinum) atau bayar (Silver)
const isQuotaSystem = computed(() => selectedTicket.value.wahanaQuota > 0);

// Harga tiket berdasarkan weekday/weekend
const currentTicketPrice = computed(() => {
    return isWeekend.value 
        ? selectedTicket.value.weekendPrice 
        : selectedTicket.value.weekdayPrice;
});

// --- DEFINISI DESTINASI INCLUDED ---

// 1. Silver Items
const silverDestinations = [
    { name: "Amphitheater", image: new URL("../assets/Amphitheatre.jpg", import.meta.url).href },
    { name: "Skywalk 2 Lantai", image: new URL("../assets/Skywalk.png", import.meta.url).href },
    { name: "Holloway", image: new URL("../assets/Wahana/Holloway.jpg", import.meta.url).href },
    { name: "Cappadocia", image: new URL("../assets/Wahana/Cappadocia.jpg", import.meta.url).href },
    { name: "Heaven Doors", image: new URL("../assets/Wahana/HeavenDoor.jpg", import.meta.url).href },
    { name: "Framebox", image: new URL("../assets/Wahana/Framebox.jpeg", import.meta.url).href },
];

// 2. Gold Items (Silver + VIP)
const goldChecklist = [
    { name: "Mirror Cubes", image: new URL("../assets/MirrorCube.jpg", import.meta.url).href },
    { name: "The Nest", image: new URL("../assets/Thenest.jpg", import.meta.url).href },
    { name: "Skydeck", image: new URL("../assets/Wahana/Skydeck.jpg", import.meta.url).href },
];

// 3. Platinum Items (Gold + Premium Spots)
const platinumChecklist = [
    { name: "Spectra Falls", image: new URL("../assets/Wahana/Mirror.png", import.meta.url).href }, // Placeholder
    { name: "Lost Garden", image: new URL("../assets/dreamGarden.jpeg", import.meta.url).href }, // Reuse Dream Garden
];

// Computed property untuk menentukan list "Included" berdasarkan tiket
const includedDestinations = computed(() => {
    const ticketId = selectedTicket.value.id;
    
    if (ticketId === 'silver') {
        return silverDestinations;
    } 
    
    if (ticketId === 'gold') {
        return [
            ...silverDestinations,
            ...goldChecklist
        ];
    }
    
    if (ticketId === 'platinum') {
        return [
            ...silverDestinations,
            ...goldChecklist,
            ...platinumChecklist
        ];
    }
    
    return [];
});


// Daftar wahana
const allWahanaList = [
    {
        id: "dream-castle",
        name: "Dream Castle",
        category: "ANAK-ANAK",
        price: 40000,
        image: new URL("../assets/Wahana/Dream_Castle_1.png", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "spider-web",
        name: "Spider Web Coaster",
        category: "DEWASA",
        price: 70000,
        image: new URL("../assets/Wahana/FlyingFox.jpg", import.meta.url).href, // Placeholder
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "ninja-warrior",
        name: "Ninja Warrior",
        category: "DEWASA",
        price: 50000,
        image: new URL("../assets/Wahana/NinjaWarrior.jpg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "mocking-bird",
        name: "Mocking Bird",
        category: "DEWASA",
        price: 40000,
        image: new URL("../assets/Wahana/mockbird.jpeg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "bioskop-vr",
        name: "Bioskop VR",
        category: "UMUM",
        price: 40000,
        image: new URL("../assets/Wahana/VirtualBox.jpg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "flying-bed",
        name: "Flying Bed",
        category: "DEWASA",
        price: 40000,
        image: new URL("../assets/Wahana/FlyingBed.jpeg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "zip-line",
        name: "Zip Line",
        category: "DEWASA",
        price: 30000,
        image: new URL("../assets/Wahana/FlyingFox.jpg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "dragon-slide",
        name: "Dragon Slides",
        category: "DEWASA",
        price: 30000,
        image: new URL("../assets/Wahana/DragonSlide.jpeg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "giant-swing",
        name: "Giant Swing",
        category: "DEWASA",
        price: 30000,
        image: new URL("../assets/Wahana/GiantSwing.jpeg", import.meta.url).href,
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
    {
        id: "minion-slide",
        name: "Minion Slides",
        category: "DEWASA & ANAK",
        price: 20000,
        image: new URL("../assets/Wahana/MinionSlide.png", import.meta.url).href, // Price kept as previous logic (lowest tier) as user didn't specify
        quantity: ref(0),
        availableFor: ["silver", "gold", "platinum"]
    },
];

// Filter wahana berdasarkan paket tiket
const availableWahanas = computed(() => {
    // Silver bisa akses SEMUA wahana (bayar)
    if (selectedTicket.value.id === "silver") {
        return allWahanaList;
    }
    // Gold hanya wahana tertentu, Platinum semua
    return allWahanaList.filter(w => w.availableFor.includes(selectedTicket.value.id));
});

// Total wahana yang sudah dipilih
const totalSelectedWahana = computed(() => {
    return availableWahanas.value.reduce((total, wahana) => {
        return total + wahana.quantity.value;
    }, 0);
});

// Kuota wahana
const wahanaQuota = computed(() => selectedTicket.value.wahanaQuota);

// Cek apakah bisa tambah wahana
const canAddWahana = (wahana) => {
    if (!isQuotaSystem.value) return true; // Silver bebas nambah (tapi bayar)
    return totalSelectedWahana.value < wahanaQuota.value;
};

// Fungsi untuk menambah/kurangi quantity tiket
const incrementTicket = () => {
    ticketQuantity.value++;
};

const decrementTicket = () => {
    if (ticketQuantity.value > 0) {
        ticketQuantity.value--;
    }
};

// Fungsi untuk menambah/kurangi quantity wahana
const incrementWahana = (wahana) => {
    if (canAddWahana(wahana)) {
        wahana.quantity.value++;
    }
};

const decrementWahana = (wahana) => {
    if (wahana.quantity.value > 0) {
        wahana.quantity.value--;
    }
};

// Fungsi untuk memilih paket tiket
const selectTicket = (ticket) => {
    // Reset semua quantity wahana saat ganti tiket
    allWahanaList.forEach(w => w.quantity.value = 0);
    selectedTicket.value = ticket;
};

// Hitung subtotal tiket
const ticketSubtotal = computed(() => {
    return currentTicketPrice.value * ticketQuantity.value;
});

// Hitung subtotal wahana
const wahanaSubtotal = computed(() => {
    // Jika sistem kuota (Gold/Platinum),  wahana "Included" (harga 0)
    if (isQuotaSystem.value) return 0;
    
    // Jika Silver, wahana bayar
    return availableWahanas.value.reduce((total, wahana) => {
        return total + wahana.price * wahana.quantity.value;
    }, 0);
});

// Hitung total keseluruhan
const grandTotal = computed(() => {
    return ticketSubtotal.value + wahanaSubtotal.value;
});

// Format currency
const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(value);
};
// Watch visitDate untuk cek weekend
watch(visitDate, () => {
    checkWeekend();
});

// Modal State
const modalState = ref({
    isOpen: false,
    title: "",
    message: "",
    type: "alert", 
    onConfirm: null,
    onClose: null,
    confirmText: "Ya, Lanjutkan",
    cancelText: "Batal",
    isLoading: false
});

// Helper to close modal
const closeModal = () => {
    if (modalState.value.onClose) {
        modalState.value.onClose();
    }
    modalState.value.isOpen = false;
    modalState.value.onConfirm = null;
    modalState.value.onClose = null;
};

// Helper to show alert
const showAlert = (message, title = "Informasi", onClose = null) => {
    modalState.value = {
        isOpen: true,
        title,
        message,
        type: "alert",
        onConfirm: null,
        onClose
    };
};

// Helper to show confirm
const showConfirm = (message, onConfirm, title = "Konfirmasi", confirmText = "Ya, Lanjutkan", cancelText = "Batal") => {
    modalState.value = {
        isOpen: true,
        title,
        message,
        type: "confirm",
        onConfirm,
        confirmText,
        cancelText
    };
};

// Handle modal confirmation action
const handleModalConfirm = () => {
    if (modalState.value.onConfirm) {
        modalState.value.onConfirm();
    }
    closeModal();
};

const handleBack = () => {
    console.log("Navigating back to /wahana");
    try {
        router.push('/wahana').catch(err => {
            console.error("Router push failed:", err);
            window.location.href = "/wahana";
        });
    } catch (e) {
        console.error("Navigation error:", e);
        window.location.href = "/wahana";
    }
};

// Handle submit pemesanan
const handleSubmit = () => {
    // Validate Email First
    if (!email.value) {
        showAlert("Silakan isi email Anda terlebih dahulu", "Email Belum Diisi", () => {
             // Auto scroll to email input
             const emailInput = document.getElementById('email-input');
            if (emailInput) {
                emailInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                emailInput.classList.add('ring-4', 'ring-[#00D5BE]/30');
                setTimeout(() => emailInput.focus(), 800);
                setTimeout(() => emailInput.classList.remove('ring-4', 'ring-[#00D5BE]/30'), 2000);
            }
        });
        return;
    }

    if (!phoneNumber.value) {
        showAlert("Silakan isi nomor handphone Anda", "Nomor Belum Diisi", () => {
             // Auto scroll to phone input
             const phoneInput = document.getElementById('phone-input');
            if (phoneInput) {
                phoneInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                phoneInput.classList.add('ring-4', 'ring-[#00D5BE]/30');
                setTimeout(() => phoneInput.focus(), 800);
                setTimeout(() => phoneInput.classList.remove('ring-4', 'ring-[#00D5BE]/30'), 2000);
            }
        });
        return;
    }

    if (!visitDate.value) {
        showAlert("Silakan pilih tanggal kunjungan", "Tanggal Belum Dipilih", () => {
            // Auto scroll to date picker
            const dateInput = document.getElementById('date-picker');
            if (dateInput) {
                // Scroll smooth
                dateInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Highlight effect immediately
                dateInput.classList.add('ring-4', 'ring-[#00D5BE]/30');
                
                // Focus after scroll (approx 500ms) to prevent "jump"
                setTimeout(() => {
                    dateInput.focus();
                }, 800);

                // Remove highlight after 2s
                setTimeout(() => {
                    dateInput.classList.remove('ring-4', 'ring-[#00D5BE]/30');
                }, 2000);
            }
        });
        return;
    }

    if (ticketQuantity.value === 0) {
        showAlert("Silakan pilih minimal 1 tiket", "Tiket Kosong", () => {
             // Auto scroll to ticket quantity section
             const ticketInput = document.getElementById('ticket-quantity-section');
            if (ticketInput) {
                // Scroll smooth
                ticketInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Highlight effect immediately
                ticketInput.classList.add('ring-4', 'ring-[#00D5BE]/30', 'rounded-lg');
                
                // Remove highlight after 2s
                setTimeout(() => {
                    ticketInput.classList.remove('ring-4', 'ring-[#00D5BE]/30', 'rounded-lg');
                }, 2000);
            }
        });
        return;
    }

    // Confirm before proceeding using Custom Modal
    // Construct detailed summary HTML
    let summaryHtml = `
        <div class="space-y-3 font-sans text-left">
            <div class="border-b border-gray-100 pb-2">
                <p class="font-semibold text-gray-800 text-sm">Data Pemesan</p>
                <p class="text-gray-600 text-sm">${email.value}</p>
                <p class="text-gray-600 text-sm">${phoneNumber.value}</p>
            </div>

            <div class="border-b border-gray-100 pb-2">
                <p class="font-semibold text-gray-800 text-sm">Tanggal Kunjungan</p>
                <p class="text-gray-600 text-sm">${new Date(visitDate.value).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            
            <div class="border-b border-gray-100 pb-2">
                <p class="font-semibold text-gray-800 text-sm mb-1">Tiket (${isWeekend.value ? 'Weekend' : 'Weekday'})</p>
                <div class="flex justify-between text-sm text-gray-600">
                    <span>${selectedTicket.value.name} x${ticketQuantity.value}</span>
                    <span>${formatCurrency(ticketSubtotal.value)}</span>
                </div>
            </div>
    `;

    const selectedWahana = availableWahanas.value.filter((w) => w.quantity.value > 0);
    if (selectedWahana.length > 0) {
        summaryHtml += `<div class="border-b border-gray-100 pb-2"><p class="font-semibold text-gray-800 text-sm mb-1">Wahana Tambahan</p>`;
        selectedWahana.forEach(w => {
            const price = isQuotaSystem.value ? 'Termasuk Paket' : formatCurrency(w.price * w.quantity.value);
            summaryHtml += `
                <div class="flex justify-between text-sm mb-1 text-gray-600">
                    <span>${w.name} x${w.quantity.value}</span>
                    <span>${price}</span>
                </div>
            `;
        });
        summaryHtml += `</div>`;
    }

    summaryHtml += `
            <div class="pt-2 border-t border-gray-100 mt-2">
                <div class="flex justify-between items-center mb-4">
                    <span class="font-bold text-base text-gray-800">Total Pembayaran</span>
                    <span class="font-bold text-lg text-[#00D5BE]">${formatCurrency(grandTotal.value)}</span>
                </div>
                
                <div class="bg-gray-50 rounded-xl p-4 text-center border border-gray-100">
                    <p class="font-semibold text-gray-800 text-sm mb-3">Scan QRIS untuk Membayar</p>
                    <div class="flex justify-center mb-3">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://dummyimage.com/400x600/00d5be/fff%26text=PEMBAYARAN+BERHASIL!+Terima+Kasih" alt="QRIS Payment" class="bg-white p-2 rounded-lg shadow-sm" />
                    </div>
                    <p class="text-xs text-gray-500">Silakan scan dan selesaikan pembayaran</p>
                </div>
            </div>
        </div>
    `;

    // Confirm before proceeding
    // Confirm before proceeding
    showConfirm(
        summaryHtml,
        () => {
            // Set loading state
            modalState.value.isLoading = true;
            modalState.value.confirmText = "Memproses...";

            // Simulate "Processing" delay (3 seconds)
            setTimeout(() => {
                modalState.value.isLoading = false;
                
                // Close modal and show success
                showAlert(`Pembayaran Berhasil! Tiket akan dikirimkan ke email ${email.value}.`, "Pembayaran Sukses", () => {
                    // Optional: Redirect or reset form
                    // router.push('/');
                });
            }, 3000);
        },
        "Rincian Pemesanan & Pembayaran",
        "Saya Sudah Bayar",
        "Batalkan"
    );
};

// Logic terpisah untuk WhatsApp (dipanggil setelah konfirmasi)

</script>

<template>
    <div class="min-h-screen bg-[#F9FBFD] pt-28 pb-16 relative z-10">
        <!-- Render Custom Modal -->
        <CustomModal 
            :is-open="modalState.isOpen"
            :title="modalState.title"
            :message="modalState.message"
            :type="modalState.type"
            :confirm-text="modalState.confirmText || 'Ya, Lanjutkan'"
            :cancel-text="modalState.cancelText || 'Batal'"
            :is-loading="modalState.isLoading"
            @close="closeModal"
            @confirm="handleModalConfirm"
        />

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-8">
                <button
                    @click="handleBack"
                    class="inline-flex items-center gap-2 text-[#00D5BE] hover:text-[#00b19e] transition-colors mb-6 appearance-none bg-transparent border-0 cursor-pointer"
                >
                    ← Kembali ke Wahana
                </button>

                <h1 class="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2">
                    Pemesanan Tiket
                </h1>
                <p class="text-gray-600">
                    Pilih paket tiket dan wahana yang ingin Anda kunjungi
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Left Column: Rincian Pemesanan Tiket -->
                <div class="space-y-6">
                    <div class="bg-white rounded-2xl shadow-md p-6">
                        <h2 class="text-lg font-semibold text-[#1A1A1A] mb-4">
                            Rincian Pemesanan Tiket
                        </h2>

                        <!-- Email Input -->
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                EMAIL PEMESAN
                            </label>
                            <input
                                id="email-input"
                                type="email"
                                v-model="email"
                                placeholder="nama@email.com"
                                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D5BE] focus:border-transparent transition-all"
                            />
                        </div>

                        <!-- Phone Number Input -->
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                NOMOR HANDPHONE
                            </label>
                            <input
                                id="phone-input"
                                type="tel"
                                v-model="phoneNumber"
                                placeholder="08123456789"
                                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D5BE] focus:border-transparent transition-all"
                            />
                        </div>

                        <!-- Date Picker -->
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                TANGGAL PEMESANAN TIKET
                            </label>
                            <input
                                id="date-picker"
                                type="date"
                                v-model="visitDate"
                                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00D5BE] focus:border-transparent"
                                :min="new Date().toISOString().split('T')[0]"
                            />
                        </div>

                        <!-- Ticket Package Selection -->
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-700 mb-3">
                                PILIH PAKET TIKET
                            </label>
                            <div class="space-y-3">
                                <div
                                    v-for="ticket in ticketPackages"
                                    :key="ticket.id"
                                    @click="selectTicket(ticket)"
                                    class="border-2 rounded-xl p-4 cursor-pointer transition-all"
                                    :class="
                                        selectedTicket.id === ticket.id
                                            ? 'border-[#00D5BE] bg-[#E6FFFA]'
                                            : 'border-gray-200 hover:border-[#00D5BE]'
                                    "
                                >
                                    <div class="flex items-center gap-4">
                                        <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-gray-200">
    <img :src="ticket.image" :alt="ticket.name" class="w-full h-full object-cover">
</div>
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-gray-800">
                                                {{ ticket.name }}
                                            </h3>
                                            <p class="text-xs text-gray-500 mt-1">
                                                {{ ticket.description }}
                                            </p>
                                            <ul class="mt-2 space-y-1">
                                                <li v-for="item in ticket.included" :key="item" class="text-xs text-gray-500 flex items-start gap-1">
                                                    <span class="text-gray-400 mt-0.5">•</span> {{ item }}
                                                </li>
                                            </ul>
                                            <div class="flex items-center gap-3 mt-2">
                                                <div class="text-xs text-gray-600">
                                                    <div>Weekday: <span class="font-semibold">{{ formatCurrency(ticket.weekdayPrice) }}</span></div>
                                                    <div>Weekend: <span class="font-semibold">{{ formatCurrency(ticket.weekendPrice) }}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Selected Ticket with Quantity -->
                        <div class="border-t pt-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center gap-3">
                                    <svg
                                        class="w-6 h-6 text-[#00D5BE]"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                        />
                                    </svg>
                                    <div>
                                        <span class="font-semibold text-gray-800 block">
                                            {{ selectedTicket.name }}
                                        </span>
                                        <span class="text-xs text-gray-500">
                                            {{ isWeekend ? 'Weekend' : 'Weekday' }}
                                        </span>
                                    </div>
                                </div>
                                <span class="font-semibold text-[#00D5BE]">
                                    {{ formatCurrency(currentTicketPrice) }}
                                </span>
                            </div>

                            <!-- Quantity Counter -->
                            <div id="ticket-quantity-section" class="flex items-center justify-between p-2 transition-all duration-300">
                                <span class="text-sm text-gray-600">Jumlah Tiket</span>
                                <div class="flex items-center gap-3">
                                    <button
                                        @click="decrementTicket"
                                        class="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#00D5BE] hover:text-[#00D5BE] transition-colors"
                                    >
                                        -
                                    </button>
                                    <span class="w-12 text-center font-semibold">
                                        {{ ticketQuantity }}
                                    </span>
                                    <button
                                        @click="incrementTicket"
                                        class="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#00D5BE] hover:text-[#00D5BE] transition-colors"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <!-- Detailed Breakdown -->
                            <div class="mt-4 pt-4 border-t space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-600">Subtotal Tiket</span>
                                    <span class="font-semibold text-gray-800">
                                        {{ formatCurrency(ticketSubtotal) }}
                                    </span>
                                </div>
                                <div class="flex items-center justify-between">
                                    <span class="text-sm text-gray-600">Subtotal Wahana</span>
                                    <span class="font-semibold text-[#00D5BE]">
                                        {{ isQuotaSystem ? 'Termasuk' : formatCurrency(wahanaSubtotal) }}
                                    </span>
                                </div>
                                
                                <div class="pt-2 mt-2 border-t flex items-center justify-between">
                                    <span class="font-bold text-gray-800">Total Biaya</span>
                                    <span class="text-lg font-bold text-[#00D5BE]">
                                        {{ formatCurrency(grandTotal) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Rincian Pemesanan Wahana -->
                <div class="space-y-6">
                    <div class="bg-white rounded-2xl shadow-md p-6">
                        <h2 class="text-lg font-semibold text-[#1A1A1A] mb-2">Rincian Pemesanan Wahana</h2>
                        <p class="text-xs text-gray-500 mb-4">*1 tiket hanya dapat digunakan untuk 1 kali naik wahana per orang</p>

                        <!-- Kuota Info -->
                        <div v-if="isQuotaSystem" class="mb-4 p-3 bg-[#E6FFFA] rounded-lg">
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-semibold text-[#00D5BE]">Kuota Wahana:</span>
                                <span class="text-sm font-bold text-[#00D5BE]">{{ totalSelectedWahana }} / {{ wahanaQuota }} wahana dipilih</span>
                            </div>
                        </div>

                        <div class="space-y-4">
                            <!-- Included Items -->
                             <div class="space-y-4 mb-8">
                                <h3 class="text-sm font-bold text-gray-800 uppercase tracking-wide border-b pb-2">Sudah Termasuk (Akses {{ selectedTicket.name.replace('TIKET ', '') }})</h3>
                                <div class="max-h-[300px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    <div v-for="(dest, i) in includedDestinations" :key="i" class="border rounded-xl p-4 bg-gray-50 flex gap-4 items-center hover:bg-gray-100 transition-colors">
                                        <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-gray-200">
                                            <img :src="dest.image" :alt="dest.name" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1">
                                            <h3 class="font-semibold text-gray-800 text-sm mb-0.5">{{ dest.name }}</h3>
                                            <span class="inline-flex px-1.5 py-0.5 bg-[#E6FFFA] text-[#00D5BE] text-[10px] font-bold rounded uppercase mb-0.5 border border-[#00D5BE]/20">INCLUDED</span>
                                        </div>
                                        <div class="flex items-center">
                                            <span class="text-xs font-bold text-[#00D5BE] bg-white px-2 py-1 rounded-md shadow-sm border border-[#00D5BE]/20">Termasuk</span>
                                        </div>
                                    </div>
                                </div>
                             </div>

                             <!-- Wahana Selection -->
                             <div class="space-y-4">
                                <h3 class="text-sm font-bold text-gray-800 uppercase tracking-wide border-b pb-2">{{ isQuotaSystem ? 'Pilih Wahana (Dalam Kuota)' : 'Wahana Tambahan (Berbayar)' }}</h3>
                                <div v-for="wahana in availableWahanas" :key="wahana.id" class="border rounded-xl p-4 hover:border-[#00D5BE] transition-colors">
                                    <div class="flex gap-4">
                                        <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                                            <img :src="wahana.image" :alt="wahana.name" class="w-full h-full object-cover">
                                        </div>
                                        <div class="flex-1">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <h3 class="font-semibold text-gray-800 text-sm">{{ wahana.name }}</h3>
                                                    <!-- Kategori Badge -->
                                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-[#E6FFFA] text-[#00D5BE] text-[10px] font-bold rounded mt-1">
                                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                                        </svg>
                                                        {{ wahana.category }}
                                                    </span>
                                                </div>
                                                <div class="text-right">
                                                    <div class="font-semibold text-[#00D5BE] text-sm">{{ isQuotaSystem ? 'Termasuk' : formatCurrency(wahana.price) }}</div>
                                                </div>
                                            </div>

                                            <div class="flex justify-end mt-3">
                                                <div class="flex items-center gap-3">
                                                    <button @click="decrementWahana(wahana)" :disabled="wahana.quantity.value === 0" :class="['w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors text-sm', wahana.quantity.value > 0 ? 'border-gray-300 hover:border-red-400 hover:text-red-400 cursor-pointer' : 'border-gray-200 text-gray-300 cursor-not-allowed']">-</button>
                                                    <span class="w-8 text-center font-semibold text-sm">{{ wahana.quantity.value }}</span>
                                                    <button @click="incrementWahana(wahana)" :disabled="!canAddWahana(wahana)" :class="['w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors text-sm', canAddWahana(wahana) ? 'border-gray-300 hover:border-[#00D5BE] hover:text-[#00D5BE] cursor-pointer' : 'border-gray-200 text-gray-300 cursor-not-allowed']">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-8 bg-white rounded-2xl shadow-md p-6">
                <div class="flex items-center justify-between mb-6">
                    <span class="text-xl font-semibold text-gray-800">Total Pembayaran</span>
                    <span class="text-2xl font-bold text-[#00D5BE]">
                        {{ formatCurrency(grandTotal) }}
                    </span>
                </div>

                <div class="flex gap-4">
                    <button
                        @click="handleBack"
                        class="flex-1 py-3 border-2 border-[#00D5BE] text-[#00D5BE] rounded-xl font-semibold hover:bg-[#E6FFFA] transition-colors"
                    >
                        Kembali
                    </button>
                    <button
                        @click="handleSubmit"
                        class="flex-1 py-3 bg-[#00D5BE] text-white rounded-xl font-semibold hover:bg-[#00b19e] transition-colors"
                    >
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #00D5BE;
}
</style>
