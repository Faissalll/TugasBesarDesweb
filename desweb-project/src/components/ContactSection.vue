<template>
    <section id="contact" class="min-h-screen bg-[#F9FBFD] pt-28 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="text-center mb-12">
                <h1 class="text-[#1A1A1A] mb-4 text-3xl font-semibold">
                    Hubungi Kami
                </h1>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Ada pertanyaan? Kami siap membantu Anda merencanakan
                    petualangan sempurna di Lakeview
                </p>
            </div>


            <div class="grid lg:grid-cols-3 gap-8 mb-12">
                <div
                    v-for="(info, index) in contactInfo"
                    :key="index"
                    class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div
                        class="w-12 h-12 rounded-full bg-gradient-to-br from-[#00D5BE] to-[#00B9A8] flex items-center justify-center mb-4"
                    >

                        <svg
                            v-if="info.type === 'phone'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.1 3.3a1 1 0 01-.502 1.21l-1.516.758a11.042 11.042 0 005.517 5.517l.758-1.516a1 1 0 011.21-.502l3.3 1.1A1 1 0 0121 18.72V21a2 2 0 01-2 2h-.25C9.716 23 1 14.284 1 3.25V3a2 2 0 012-2z"
                            />
                        </svg>
                        <svg
                            v-else-if="info.type === 'mail'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                            />
                        </svg>
                        <svg
                            v-else-if="info.type === 'map'"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M19 8c0 7-7 12-7 12S5 15 5 8a7 7 0 1114 0z"
                            />
                        </svg>
                    </div>
                    <h3 class="text-[#1A1A1A] mb-2 text-lg font-semibold">
                        {{ info.title }}
                    </h3>
                    <p class="text-[#00D5BE] mb-1 font-medium">
                        {{ info.content }}
                    </p>
                    <p class="text-gray-500 text-sm">
                        {{ info.description }}
                    </p>
                </div>
            </div>


            <div
                class="bg-white rounded-2xl p-8 md:p-12 shadow-md max-w-4xl mx-auto"
            >
                <div class="text-center mb-8">
                    <h2 class="text-[#ffffff] mb-2 text-2xl font-semibold">
                        Kirim Pesan
                    </h2>
                    <p class="text-gray-600">
                        Isi formulir di bawah ini dan kami akan menghubungi Anda
                        segera
                    </p>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">

                        <div>
                            <label for="name" class="block text-[#1A1A1A] mb-2">
                                Nama Lengkap <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                v-model="formData.name"
                                required
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]/20 outline-none transition-all"
                                placeholder="Masukkan nama lengkap"
                            />
                        </div>


                        <div>
                            <label
                                for="email"
                                class="block text-[#1A1A1A] mb-2"
                            >
                                Email <span class="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                v-model="formData.email"
                                required
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]/20 outline-none transition-all"
                                placeholder="email@example.com"
                            />
                        </div>


                        <div>
                            <label
                                for="phone"
                                class="block text-[#1A1A1A] mb-2"
                            >
                                Nomor Telepon
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                v-model="formData.phone"
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]/20 outline-none transition-all"
                                placeholder="+62 812-3456-7890"
                            />
                        </div>


                        <div>
                            <label
                                for="subject"
                                class="block text-[#1A1A1A] mb-2"
                            >
                                Subjek <span class="text-red-500">*</span>
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                v-model="formData.subject"
                                required
                                class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]/20 outline-none transition-all"
                            >
                                <option value="">Pilih subjek</option>
                                <option value="booking">Pemesanan Paket</option>
                                <option value="info">
                                    Informasi Destinasi
                                </option>
                                <option value="complaint">
                                    Keluhan &amp; Saran
                                </option>
                                <option value="other">Lainnya</option>
                            </select>
                        </div>
                    </div>


                    <div>
                        <label for="message" class="block text-[#ffffff] mb-2">
                            Pesan <span class="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            v-model="formData.message"
                            required
                            rows="6"
                            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#00D5BE] focus:ring-2 focus:ring-[#00D5BE]/20 outline-none transition-all resize-none"
                            placeholder="Tulis pesan Anda di sini..."
                        ></textarea>
                    </div>


                    <div class="flex justify-center">
                        <button
                            type="submit"
                            class="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#00D5BE] to-[#00B9A8] text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12h14M12 5l7 7-7 7"
                                />
                            </svg>
                            Kirim Pesan
                        </button>
                    </div>
                </form>
            </div>


            <div class="mt-16">
                <div class="bg-white rounded-2xl p-4 shadow-md overflow-hidden">
                    <div class="relative">
                        <div
                            class="aspect-video w-full rounded-xl overflow-hidden shadow-md"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2099832070903!2d117.0480607!3d-1.0005499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df6af002b5f3f2b%3A0x6248d84253fe5ba!2sLakeview%20IKN!5e0!3m2!1sen!2sid!4v1764258210609!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style="border: 0"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        <div class="mt-4 flex justify-center">
                            <a
                                href="https://www.google.com/maps/place/Lakeview+IKN/@-1.0005499,117.0480607,17z/data=!3m1!4b1!4m6!3m5!1s0x2df6af002b5f3f2b:0x6248d84253fe5ba!8m2!3d-1.0005499!4d117.0506356!16s%2Fg%2F11vw1w5_3w?entry=ttu"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00D5BE] to-[#00B9A8] text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                                    />
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 8c0 7-7 12-7 12S5 15 5 8a7 7 0 1114 0z"
                                    />
                                </svg>
                                Buka di Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div class="mt-12 text-center">
                <div
                    class="inline-flex flex-col items-center gap-4 bg-white rounded-2xl p-8 shadow-md"
                >
                    <p class="text-gray-600">
                        Cari jawaban cepat? Kunjungi halaman FAQ kami
                    </p>
                    <button
                        class="px-8 py-3 bg-white text-[#00D5BE] border-2 border-[#00D5BE] rounded-full hover:bg-[#00D5BE] hover:text-white transition-all hover:scale-105"
                    >
                        Lihat FAQ
                    </button>
                </div>
            </div>
        </div>


        <transition name="toast">
            <div
                v-if="showToast"
                class="fixed bottom-6 right-6 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 flex items-start gap-3 min-w-[320px] max-w-md z-50"
            >
                <div class="flex-shrink-0">
                    <div
                        class="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D5BE] to-[#00B9A8] flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
                <div class="flex-1">
                    <h4 class="text-[#1A1A1A] mb-1">
                        Pesan Berhasil Dikirim! 🎉
                    </h4>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Terima kasih
                        <span class="text-[#00D5BE] font-medium">
                            {{ formDataSnapshot.name }}
                        </span>
                        ! Tim kami akan segera menghubungi Anda dalam 1x24 jam.
                    </p>
                </div>
            </div>
        </transition>
    </section>
</template>

<script setup>
import { reactive, ref } from "vue";

const formData = reactive({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
});

const formDataSnapshot = reactive({
    name: "",
});

const showToast = ref(false);

const handleSubmit = () => {
    console.log("Form submitted:", { ...formData });


    formDataSnapshot.name = formData.name;

    // Tampilkan toast
    showToast.value = true;
    setTimeout(() => {
        showToast.value = false;
    }, 5000);

    // Reset form
    formData.name = "";
    formData.email = "";
    formData.phone = "";
    formData.subject = "";
    formData.message = "";
};

const contactInfo = [
    {
        type: "phone",
        title: "Telepon",
        content: "+62 812-3456-7890",
        description: "Sen - Jum, 08:00 - 17:00",
    },
    {
        type: "mail",
        title: "Email",
        content: "lakeview.lajudigital@gmail.com",
        description: "Respon dalam 24 jam",
    },
    {
        type: "map",
        title: "Alamat",
        content:
            "Sungai Seluang, Samboja, Kutai Kartanegara , Kalimantan Timur",
        description: "Lakeview, Kalimantan Timur, Indonesia",
    },
];
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from,
.toast-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>
