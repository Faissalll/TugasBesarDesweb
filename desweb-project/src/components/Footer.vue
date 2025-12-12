<template>
    <footer class="footer">
        <!-- Wave Animation -->
        <div class="wave-section-wrapper">
            <div class="wave-layer wave-layer-1"></div>
            <div class="wave-layer wave-layer-2"></div>
            <div class="wave-layer wave-layer-3"></div>
            <div class="wave-layer wave-layer-4"></div>
        </div>

        <div class="footer-container">

            <div class="footer-section">
                <div class="logo-section">

                    <div class="logo">
                        <img
                            src="/src/assets/logo-lakeview.png"
                            alt="Logo Lakeview"
                            class="logo-image"
                        />
                        <span>Lakeview</span>
                    </div>

                    <p class="tagline">
                        Temukan ketentraman di tengah keindahan alam danau yang
                        memukau.
                    </p>


                    <div class="social-icons">
                        <a href="https://www.facebook.com/lakeview.ap/" target="_blank" rel="noopener noreferrer" class="social-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                                fill="currentColor"
                            >
                                <path
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/lakeview.id/" target="_blank" rel="noopener noreferrer" class="social-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                fill="currentColor"
                            >
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                        </a>
                        <a href="#" class="social-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                            >
                                <path
                                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>


            <div class="footer-section">
                <h3>Tautan Cepat</h3>
                <ul>
                    <li><RouterLink to="/">Beranda</RouterLink></li>
                    <li><RouterLink to="/destinasi">Destinasi</RouterLink></li>
                    <li><RouterLink to="/wahana">Wahana</RouterLink></li>
                    <li><RouterLink to="/tentang">Tentang</RouterLink></li>
                    <li><RouterLink to="/kontak">Kontak</RouterLink></li>
                </ul>
            </div>


            <div class="footer-section">
                <h3>Informasi</h3>
                <ul>
                    <li><a href="#">Tentang Kami</a></li>
                    <li><RouterLink to="/pesan-tiket">Hubungi Kami</RouterLink></li>
                    <li><a href="#">Syarat & Ketentuan</a></li>
                    <li><a href="#">Kebijakan Privasi</a></li>
                </ul>
            </div>


            <div class="footer-section">
                <h3>Kontak</h3>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>
                            Sungai Seluang , Samboja, Kutai Kartanegara,
                            Kalimantan Timur<br />Lakeview Resort
                        </span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+62 812 3456 7890</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>lakeview.lajudigital@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>


        <div class="footer-bottom">
            <p>© 2025 Lakeview. Semua hak dilindungi.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
.footer {
    background-color: #1a1a1a;
    color: #a0a0a0;
    padding: 60px 0 0;
    position: relative;
    margin-top: 250px;
}

/* Wave Animation Styles */
.wave-section-wrapper {
  position: absolute;
  top: -400px;
  left: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: transparent;
  pointer-events: none;
}

.wave-layer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background-size: 50% 100%;
  background-repeat: repeat-x;
  animation: wave-move linear infinite;
}

.wave-layer-1 {
  background: linear-gradient(180deg, transparent 0%, transparent 30%, #00b3a3 30%, #00b3a3 100%);
  clip-path: polygon(
    0% 55%, 2% 53%, 4% 51%, 6% 50%, 8% 49%, 10% 48%, 12% 48%, 14% 49%, 16% 50%, 18% 52%, 20% 54%,
    22% 56%, 24% 58%, 26% 59%, 28% 60%, 30% 60%, 32% 59%, 34% 58%, 36% 56%, 38% 54%, 40% 52%,
    42% 51%, 44% 50%, 46% 49%, 48% 49%, 50% 50%, 52% 51%, 54% 52%, 56% 54%, 58% 56%, 60% 58%,
    62% 59%, 64% 60%, 66% 60%, 68% 59%, 70% 58%, 72% 56%, 74% 54%, 76% 52%, 78% 51%, 80% 50%,
    82% 49%, 84% 49%, 86% 50%, 88% 51%, 90% 53%, 92% 55%, 94% 57%, 96% 58%, 98% 59%, 100% 60%,
    100% 100%, 0% 100%
  );
  animation-duration: 6s;
  opacity: 1;
  z-index: 3;
}

.wave-layer-2 {
  background: linear-gradient(180deg, transparent 0%, transparent 35%, #00D5BE 35%, #00D5BE 100%);
  clip-path: polygon(
    0% 62%, 2% 60%, 4% 58%, 6% 57%, 8% 56%, 10% 55%, 12% 55%, 14% 56%, 16% 57%, 18% 59%, 20% 61%,
    22% 63%, 24% 64%, 26% 65%, 28% 66%, 30% 66%, 32% 65%, 34% 64%, 36% 62%, 38% 60%, 40% 58%,
    42% 57%, 44% 56%, 46% 56%, 48% 57%, 50% 58%, 52% 60%, 54% 62%, 56% 64%, 58% 65%, 60% 66%,
    62% 66%, 64% 65%, 66% 64%, 68% 62%, 70% 60%, 72% 58%, 74% 57%, 76% 56%, 78% 56%, 80% 57%,
    82% 58%, 84% 60%, 86% 62%, 88% 64%, 90% 65%, 92% 66%, 94% 66%, 96% 65%, 98% 63%, 100% 62%,
    100% 100%, 0% 100%
  );
  animation-duration: 5s;
  opacity: 0.9;
  z-index: 2;
}

.wave-layer-3 {
  background: linear-gradient(180deg, transparent 0%, transparent 40%, #33e0ca 40%, #33e0ca 100%);
  clip-path: polygon(
    0% 68%, 2% 67%, 4% 66%, 6% 65%, 8% 64%, 10% 64%, 12% 64%, 14% 65%, 16% 66%, 18% 67%, 20% 68%,
    22% 69%, 24% 70%, 26% 71%, 28% 71%, 30% 71%, 32% 70%, 34% 69%, 36% 68%, 38% 67%, 40% 66%,
    42% 65%, 44% 65%, 46% 65%, 48% 66%, 50% 67%, 52% 68%, 54% 69%, 56% 70%, 58% 71%, 60% 71%,
    62% 71%, 64% 70%, 66% 69%, 68% 68%, 70% 67%, 72% 66%, 74% 65%, 76% 65%, 78% 65%, 80% 66%,
    82% 67%, 84% 68%, 86% 69%, 88% 70%, 90% 71%, 92% 71%, 94% 71%, 96% 70%, 98% 69%, 100% 68%,
    100% 100%, 0% 100%
  );
  animation-duration: 4s;
  opacity: 0.7;
  z-index: 2;
}

.wave-layer-4 {
  background: linear-gradient(180deg, transparent 0%, transparent 45%, #1ac9b8 45%, #1ac9b8 100%);
  clip-path: polygon(
    0% 73%, 2% 72%, 4% 71%, 6% 71%, 8% 70%, 10% 70%, 12% 70%, 14% 71%, 16% 71%, 18% 72%, 20% 73%,
    22% 74%, 24% 74%, 26% 75%, 28% 75%, 30% 75%, 32% 74%, 34% 74%, 36% 73%, 38% 72%, 40% 71%,
    42% 71%, 44% 71%, 46% 71%, 48% 72%, 50% 73%, 52% 73%, 54% 74%, 56% 74%, 58% 75%, 60% 75%,
    62% 75%, 64% 74%, 66% 74%, 68% 73%, 70% 72%, 72% 71%, 74% 71%, 76% 71%, 78% 71%, 80% 72%,
    82% 73%, 84% 73%, 86% 74%, 88% 74%, 90% 75%, 92% 75%, 94% 75%, 96% 74%, 98% 73%, 100% 73%,
    100% 100%, 0% 100%
  );
  animation-duration: 3.5s;
  opacity: 0.6;
  z-index: 1;
}

@keyframes wave-move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
    padding: 0 20px 40px;
}

.footer-section h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
}

.logo-section .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
}

.logo-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    transform-origin: center;   
}

.logo span {
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
}

.tagline {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
    max-width: 280px;
}

.social-icons {
    display: flex;
    gap: 12px;
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #2a2a2a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a0a0a0;
    transition: all 0.3s ease;
    text-decoration: none;
}

.social-icon svg {
    width: 18px;
    height: 18px;
}

.social-icon:hover {
    background-color: #3a3a3a;
    color: #ffffff;
}

.footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-section ul li {
    margin-bottom: 12px;
}

.footer-section ul li a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-section ul li a:hover {
    color: #ffffff;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-item {
    display: flex;
    gap: 12px;
    font-size: 14px;
    line-height: 1.6;
}

.contact-item i {
    color: #4a9eff;
    font-size: 16px;
    min-width: 20px;
    margin-top: 2px;
}

.footer-bottom {
    border-top: 1px solid #2a2a2a;
    padding: 25px 0;
    text-align: center;
}

.footer-bottom p {
    margin: 0;
    font-size: 14px;
    color: #808080;
}

@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}
</style>
