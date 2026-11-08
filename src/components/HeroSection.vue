<template>
  <section class="hero-shell" ref="heroRef">
    <div class="hero-radial hero-radial-a" aria-hidden="true"></div>
    <div class="hero-radial hero-radial-b" aria-hidden="true"></div>
    <div class="hero-grid-atmosphere" ref="gridOverlayRef" aria-hidden="true"></div>

    <div class="hero-top container" ref="heroTopRef">
      <h1 class="hero-title" ref="headingRef">Slovenia Games<br />Conference</h1>

      <div class="hero-meta" ref="titleRef">
        <span class="hero-date">20 February 2027</span>
        <span class="hero-meta-dot" aria-hidden="true"></span>
        <span class="hero-venue">Faculty of Computer and Information Science, Ljubljana</span>
      </div>

      <a
        class="hero-cta"
        href="https://olaii.com/event/11304/slovenia-games-conference-2027/"
        target="_blank"
        rel="noopener noreferrer"
      >Get Tickets</a>

      <div class="hero-sponsors">
        <p class="hero-sponsors-label">Brought to you by</p>
        <div class="hero-sponsors-row hero-sponsors-main">
          <img
            class="hero-logo-guardiaris"
            src="/SponsorLogos/guardiarisWhiteLogo.png"
            alt="Guardiaris"
          />
          <img
            class="hero-logo-fri"
            src="/SponsorLogos/UL_FRI_logoHOR-RGB_bela.png"
            alt="UL FRI — Faculty of Computer and Information Science"
          />
          <img
            class="hero-logo-triternion"
            src="/SponsorLogos/triternion-logo-white.png"
            alt="Triternion"
          />
        </div>
      </div>
    </div>

    <div class="hero-marquee" aria-label="Game development moments">
      <div class="marquee-track">
        <img v-for="img in marqueeImages" :key="`a-${img}`" :src="img" alt="Game development conference" loading="lazy" />
        <img v-for="img in marqueeImages" :key="`b-${img}`" :src="img" alt="Game development conference" loading="lazy" />
        <img v-for="img in marqueeImages" :key="`c-${img}`" :src="img" alt="Game development conference" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { animate } from 'motion';
import { onMounted, ref } from 'vue';

const heroRef = ref(null);
const heroTopRef = ref(null);
const titleRef = ref(null);
const actionsRef = ref(null);
const gridOverlayRef = ref(null);
const headingRef = ref(null);

const marqueeImages = [
  '/oldSGCPhotos/carousel1.jpg',
  '/oldSGCPhotos/carousel2.jpg',
  '/oldSGCPhotos/carousel3.jpg',
  '/oldSGCPhotos/carousel4.jpg',
  '/oldSGCPhotos/carousel5.jpg',
  '/oldSGCPhotos/carousel6.jpg',
  '/oldSGCPhotos/carousel7.jpg',
  '/oldSGCPhotos/carousel8.jpg',
  '/oldSGCPhotos/carousel9.jpg',
  '/oldSGCPhotos/carousel10.jpg',
];

onMounted(() => {
  const cleanupFns = [];

  if (heroTopRef.value) {
    animate(heroTopRef.value, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8 });
  }

  if (titleRef.value) {
    animate(titleRef.value, { opacity: [0, 1], y: [18, 0] }, { duration: 0.7, delay: 0.15 });
  }

  if (headingRef.value) {
    animate(headingRef.value, { opacity: [0, 1], y: [18, 0] }, { duration: 0.7, delay: 0.25 });
  }

  if (actionsRef.value) {
    animate(actionsRef.value, { opacity: [0, 1], scale: [0.96, 1] }, { duration: 0.55, delay: 0.3 });
  }

  if (heroRef.value && gridOverlayRef.value) {
    const updateGridShift = () => {
      const y = window.scrollY;
      const offsetX = (y * 0.04) % 8;
      const offsetY = (y * 0.03) % 6;
      gridOverlayRef.value.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0)`;
    };

    updateGridShift();
    window.addEventListener('scroll', updateGridShift, { passive: true });
    cleanupFns.push(() => window.removeEventListener('scroll', updateGridShift));
  }

  return () => {
    cleanupFns.forEach((cleanup) => cleanup());
  };
});
</script>

<style scoped>
.hero-shell {
  background: #0f1419;
  background-image: url('/coming-soon-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: visible;
  min-height: 116vh;
  display: flex;
  flex-direction: column;
  padding-top: clamp(6rem, 10vw, 10rem);
}

.hero-radial {
  position: absolute;
  pointer-events: none;
  z-index: 0;
  border-radius: 999px;
  filter: blur(34px);
  opacity: 0.11;
  will-change: transform;
}

.hero-radial-a {
  left: -12%;
  top: 8%;
  width: min(760px, 68vw);
  height: min(760px, 68vw);
  background: radial-gradient(circle at 44% 42%, rgba(71, 134, 171, 0.14) 0%, rgba(71, 134, 171, 0.09) 34%, rgba(71, 134, 171, 0) 72%);
  animation: hero-radial-drift-a 36s ease-in-out infinite alternate;
}

.hero-radial-b {
  right: -16%;
  top: 24%;
  width: min(680px, 60vw);
  height: min(680px, 60vw);
  background: radial-gradient(circle at 56% 48%, rgba(39, 97, 132, 0.12) 0%, rgba(39, 97, 132, 0.08) 36%, rgba(39, 97, 132, 0) 74%);
  animation: hero-radial-drift-b 28s ease-in-out infinite alternate;
}

@keyframes hero-radial-drift-a {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(22px, -16px, 0) scale(1.03); }
}

@keyframes hero-radial-drift-b {
  0% { transform: translate3d(0, 0, 0) scale(1); }
  100% { transform: translate3d(-18px, 20px, 0) scale(1.04); }
}

.hero-grid-atmosphere {
  position: absolute;
  inset: 0 0 28% 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0.35;
  background-image:
    linear-gradient(rgba(26, 44, 56, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26, 44, 56, 0.055) 1px, transparent 1px),
    radial-gradient(ellipse 62% 46% at 50% 26%, rgba(40, 90, 122, 0.11), transparent 74%);
  background-size: 42px 42px, 42px 42px, 100% 100%;
  background-position: 0 0, 0 0, center;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  mask-image: radial-gradient(ellipse at 50% 34%, #000 44%, rgba(0, 0, 0, 0.05) 76%, transparent 100%);
}

.hero-top {
  position: relative;
  z-index: 2;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 6rem;
}

.hero-date {
  margin: 0 0 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.86rem;
  color: #5d6467;
  font-weight: 600;
}

.hero-date-big {
  margin: 1.4rem 0 0.4rem;
  font-family: "Funnel Sans", "Arial Narrow", "Segoe UI", sans-serif;
  font-size: clamp(1.6rem, 4vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1;
  color: #fc4d0f;
}

.hero-sponsors {
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
}

.hero-sponsors-label {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: rgba(255, 255, 255, 0.55);
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
}

.hero-sponsors-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 5vw, 4rem);
  flex-wrap: wrap;
}

.hero-sponsors-row img {
  width: auto;
  object-fit: contain;
}

.hero-sponsors-main {
  gap: clamp(2.4rem, 6vw, 5rem);
}

.hero-logo-guardiaris {
  /* Main sponsor — a touch larger than the supporting logos, but now inline. */
  height: clamp(3.4rem, 5.5vw, 5rem);
}

.hero-logo-fri {
  height: clamp(2rem, 3.2vw, 2.9rem);
  opacity: 0.92;
}

.hero-logo-triternion {
  height: clamp(1.9rem, 3vw, 2.6rem);
  opacity: 0.92;
}

.hero-sponsors-gold {
  gap: clamp(2rem, 5vw, 4rem);
}

.hero-logo-gold {
  height: clamp(2.1rem, 3.2vw, 2.9rem);
  display: block;
}

/* Razum's badge is taller than it is wide, so give it a touch more height
   to balance visually against the wide Outfit7 wordmark. */
.hero-logo-gold[alt="Razum"] {
  height: clamp(2.9rem, 4.4vw, 4rem);
}

/* Silver — Bubadu's mark stacks a bear head over the wordmark, so it needs a
   touch more height than the wordmark logos to read at a comparable size. */
.hero-sponsors-silver {
  gap: clamp(2rem, 5vw, 4rem);
}

.hero-logo-silver {
  height: clamp(2.6rem, 4vw, 3.6rem);
  display: block;
  opacity: 0.95;
}

.hero-title {
  margin: 0;
  text-transform: uppercase;
  line-height: 0.9;
  font-size: clamp(2.6rem, 7.6vw, 6.1rem);
  letter-spacing: -0.02em;
  font-weight: 400;
  font-family: "Funnel Sans", "Arial Narrow", "Segoe UI", sans-serif;
  color: #ffffff;
}

.hero-meta {
  margin: 1.5rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem 1rem;
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
}

.hero-date {
  color: #fc4d0f;
  font-weight: 700;
  font-size: clamp(1.2rem, 2.4vw, 1.9rem);
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.hero-meta-dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.5);
  flex: none;
}

.hero-venue {
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  font-size: clamp(0.98rem, 1.4vw, 1.2rem);
}

.hero-cta {
  margin: 1.8rem auto 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 2.1rem;
  border-radius: 999px;
  background: #fc4d0f;
  color: #fff;
  font-weight: 800;
  font-size: 1.05rem;
  text-decoration: none;
  box-shadow: 0 10px 26px rgba(252, 77, 15, 0.34);
  transition: background 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
}

.hero-cta:hover {
  background: #ffffff;
  color: #fc4d0f;
  box-shadow: inset 0 0 0 2px #fc4d0f;
  transform: translateY(-1px);
}

.hero-copy {
  margin: 0.78rem auto 0;
  max-width: 42ch;
  font-size: clamp(1rem, 1.35vw, 1.16rem);
  color: rgba(255, 255, 255, 0.8);
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
}

.hero-actions {
  margin-top: 1.05rem;
  display: flex;
  justify-content: center;
  gap: 0.48rem;
}

.cta {
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  padding: 0.66rem 1.1rem 0.66rem 1.24rem;
  font-size: 1.02rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1;
}

.cta-icon {
  width: 1rem;
  height: 1rem;
  flex: none;
  display: block;
}

.cta-primary .cta-icon,
.cta-dark .cta-icon {
  color: currentColor;
}

.cta-icon-arrow {
  transform: translateY(0.2px);
}

.cta-primary {
  background: #fc4d0f;
  color: #fff;
}

.cta-dark {
  background: #20272b;
  color: #fff;
}

.hero-subcopy {
  margin: 0.5rem 0 0;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  font-size: 0.92rem;
}

.hero-marquee {
  position: relative;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: 0;
  background: transparent;
  z-index: 4;
  padding: 0;
  padding-top: 4rem;
  line-height: 0;
}

.marquee-track {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0;
  width: max-content;
  animation: marquee-slide 28s linear infinite;
  transform: translateX(0);
  will-change: transform;
}

.marquee-track img {
  width: clamp(230px, 19.6vw, 320px);
  height: 520px;
  object-fit: cover;
  object-position: center 32%;
  border-radius: 0;
  filter: saturate(1.02) contrast(1.02);
  position: relative;
  display: block;
}

@keyframes marquee-slide {
  from { transform: translateX(0); }
  to { transform: translateX(-33.3333%); }
}

@media (max-width: 900px) {
  .hero-date { letter-spacing: 0.16em; }
  .hero-actions { flex-direction: column; align-items: center; }
  .cta { width: min(280px, 92vw); justify-content: center; }
  .hero-marquee {
    margin-bottom: 0;
  }
  .marquee-track img { height: 430px; }
}

@media (max-width: 640px) {
  .hero-radial { opacity: 0.09; filter: blur(28px); }
  .hero-grid-atmosphere {
    inset: 0 0 34% 0;
    opacity: 0.29;
    background-size: 34px 34px, 34px 34px, 100% 100%;
  }
  .marquee-track img { width: 58vw; height: 340px; }
}

@media (prefers-reduced-motion: reduce) {
  .hero-radial { animation: none; transform: none; }
  .hero-grid-atmosphere { transform: none !important; }
}

@media (max-width: 640px) {
  .hero-shell {
    min-height: 100svh;
    overflow: hidden;
    padding-top: 12rem;
  }

  .hero-top {
    text-align: center;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .hero-title {
    font-size: clamp(2.4rem, 11vw, 4rem);
    line-height: 0.92;
  }

  .hero-date-big {
    font-size: clamp(1rem, 4.5vw, 1.6rem);
  }
}
</style>
