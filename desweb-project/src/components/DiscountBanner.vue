<template>
  <div class="discount-banner-wrapper">
    <!-- Floating Particles Background -->
    <div class="particles-container">
      <div v-for="i in 15" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>

    <div class="discount-banner">
      <div class="banner-content">
        <div class="sparkle sparkle-1"></div>
        <div class="sparkle sparkle-2"></div>
        <div class="sparkle sparkle-3"></div>
        <h2 class="discount-text">{{ discountText }}</h2>
      </div>
    </div>
    
    <div class="wave-container">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none">
        <!-- Wave Layer 1 - Dark Teal -->
        <path class="wave wave-back" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" fill="#00b3a3"></path>
        
        <!-- Wave Layer 2 - Medium Teal -->
        <path class="wave wave-middle" d="M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" fill="#00D5BE" opacity="0.8"></path>
        
        <!-- Wave Layer 3 - Light Teal -->
        <path class="wave wave-front" d="M0,128L48,122.7C96,117,192,107,288,106.7C384,107,480,117,576,117.3C672,117,768,107,864,101.3C960,96,1056,96,1152,101.3C1248,107,1344,117,1392,122.7L1440,128L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z" fill="#33e0ca" opacity="0.6"></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscountBanner',
  props: {
    discountText: {
      type: String,
      default: 'DISKON 10%'
    }
  },
  methods: {
    getParticleStyle(index) {
      const size = Math.random() * 8 + 4;
      const left = Math.random() * 100;
      const animationDuration = Math.random() * 10 + 8;
      const animationDelay = Math.random() * 5;
      
      return {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        animationDuration: `${animationDuration}s`,
        animationDelay: `${animationDelay}s`
      };
    }
  }
}
</script>

<style scoped>
.discount-banner-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.particles-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float-up linear infinite;
  bottom: -10px;
}

@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-600px) rotate(360deg);
    opacity: 0;
  }
}

.discount-banner {
  position: relative;
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #00D5BE 0%, #00b3a3 50%, #00D5BE 100%);
  z-index: 2;
  overflow: hidden;
}

.discount-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: slide-shine 3s infinite;
}

@keyframes slide-shine {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}

.banner-content {
  background: linear-gradient(135deg, #F5A623 0%, #F7B731 50%, #FFC837 100%);
  padding: 1.25rem 5rem;
  border-radius: 60px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 4px rgba(255, 255, 255, 0.3),
    inset 0 2px 10px rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  animation: pulse-glow 2s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 
      0 10px 30px rgba(0, 0, 0, 0.2),
      0 0 0 4px rgba(255, 255, 255, 0.3),
      inset 0 2px 10px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 
      0 15px 40px rgba(0, 0, 0, 0.3),
      0 0 0 6px rgba(255, 255, 255, 0.5),
      inset 0 2px 15px rgba(255, 255, 255, 0.5);
  }
}

.sparkle {
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: sparkle-twinkle 1.5s ease-in-out infinite;
}

.sparkle-1 {
  top: 10%;
  left: 15%;
  animation-delay: 0s;
}

.sparkle-2 {
  top: 60%;
  right: 20%;
  animation-delay: 0.5s;
}

.sparkle-3 {
  bottom: 15%;
  left: 80%;
  animation-delay: 1s;
}

@keyframes sparkle-twinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

.discount-text {
  font-size: 2.25rem;
  font-weight: 800;
  color: white;
  margin: 0;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.3),
    0 0 10px rgba(255, 255, 255, 0.5);
  letter-spacing: 3px;
  position: relative;
  z-index: 1;
  animation: text-bounce 1s ease-in-out infinite;
}

@keyframes text-bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

.wave-container {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  line-height: 0;
  margin-top: -2px;
  background: linear-gradient(to bottom, #00D5BE, #00b3a3);
}

.waves {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
}

.wave {
  animation: wave-animation 8s ease-in-out infinite;
}

.wave-back {
  animation-delay: 0s;
  animation-duration: 10s;
}

.wave-middle {
  animation-delay: -2s;
  animation-duration: 8s;
}

.wave-front {
  animation-delay: -4s;
  animation-duration: 6s;
}

@keyframes wave-animation {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-15px) translateY(-5px);
  }
  50% {
    transform: translateX(-30px) translateY(0);
  }
  75% {
    transform: translateX(-15px) translateY(5px);
  }
}

@media (max-width: 768px) {
  .discount-text {
    font-size: 1.75rem;
    letter-spacing: 2px;
  }
  
  .banner-content {
    padding: 1rem 3.5rem;
  }
  
  .wave-container {
    height: 100px;
  }
  
  .discount-banner {
    padding: 2rem 1rem;
  }
}

@media (max-width: 480px) {
  .discount-text {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
  
  .banner-content {
    padding: 0.75rem 2.5rem;
  }
  
  .wave-container {
    height: 80px;
  }
  
  .discount-banner {
    padding: 1.5rem 1rem;
  }
  
  .sparkle {
    width: 15px;
    height: 15px;
  }
}
</style>
