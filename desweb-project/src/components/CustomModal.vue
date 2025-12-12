<script setup>
defineProps({
    isOpen: Boolean,
    title: {
        type: String,
        default: "Informasi"
    },
    message: String,
    type: {
        type: String,
        default: "alert", // 'alert' or 'confirm'
    },
    confirmText: {
        type: String,
        default: "Ya, Lanjutkan"
    },
    cancelText: {
        type: String,
        default: "Batal"
    },
    isLoading: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["close", "confirm"]);
</script>

<template>
    <Transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="emit('close')"></div>

            <!-- Modal Card -->
            <div class="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 overflow-hidden transform transition-all">
                <div class="text-center">
                    <!-- Title -->
                    <h3 class="text-lg font-bold text-[#1A1A1A] mb-2">
                        {{ title }}
                    </h3>

                    <!-- Message -->
                    <!-- Message -->
                    <div 
                        class="text-gray-600 mb-6 text-sm leading-relaxed text-left"
                        v-html="message"
                    ></div>

                    <!-- Buttons -->
                    <div v-if="type === 'alert'" class="w-full">
                        <button
                            @click="emit('close')"
                            class="w-full py-2.5 bg-[#00D5BE] hover:bg-[#00b19e] text-white rounded-xl font-semibold transition-colors"
                        >
                            OK
                        </button>
                    </div>

                    <div v-else class="flex gap-3">
                        <button
                            @click="emit('close')"
                            :disabled="isLoading"
                            class="flex-1 py-2.5 border border-gray-300 text-gray-600 hover:bg-gray-50 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {{ cancelText }}
                        </button>
                        <button
                            @click="emit('confirm')"
                            :disabled="isLoading"
                            class="flex-1 py-2.5 bg-[#00D5BE] hover:bg-[#00b19e] text-white rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                            <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ isLoading ? 'Menunggu Pembayaran...' : confirmText }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-enter-from .relative,
.modal-leave-to .relative {
    transform: scale(0.95);
}
</style>
