<template>
  <nav class="scroll-nav" :class="{ 'is-visible': isVisible, 'theme-light': theme === 'light' }" aria-label="Section quick navigation">
    <div class="nav-top">
      <a href="/" class="sga-logo-link">
        <img src="/sga-logo.png" alt="Slovenia Games Association" class="sga-logo" />
      </a>
    </div>
    <div class="nav-pills">
      <a :href="`${base}#top`" class="logo-pill" aria-label="Back to top">SGC</a>
      <a :href="`${base}#about`" class="nav-pill">About</a>
      <a :href="`${base}#speakers`" class="nav-pill">Speakers</a>
      <a :href="`${base}#venue`" class="nav-pill">Venue</a>
      <a href="/sponsors" class="nav-pill">Sponsors</a>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

defineProps({
  theme: { type: String, default: 'dark' },
  // Prefix for the section anchors. Empty = same-page scroll (used on the
  // landing page that actually contains #about/#speakers/#venue). On sub-pages
  // pass "/backup" so the pills navigate to those sections.
  base: { type: String, default: '' },
});

const isVisible = ref(false);
let onScroll;
let onResize;

onMounted(() => {
  const firstSection = document.querySelector('.hero-shell');
  if (!firstSection) return;

  const updateVisibility = () => {
    const heroBottom = firstSection.getBoundingClientRect().bottom;
    isVisible.value = heroBottom <= 120;
  };

  onScroll = () => updateVisibility();
  onResize = () => updateVisibility();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  updateVisibility();
});

onBeforeUnmount(() => {
  if (onScroll) window.removeEventListener('scroll', onScroll);
  if (onResize) window.removeEventListener('resize', onResize);
});
</script>

<style scoped>
.scroll-nav {
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  z-index: 80;
  display: flex;
  align-items: center;
  width: min(1600px, calc(100% - 4rem));
  gap: 0.45rem;
  opacity: 1;
  pointer-events: auto;
}

.scroll-nav.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.nav-top {
  flex-shrink: 0;
}

.nav-pills {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: auto;
}

.nav-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  padding: 0.58rem 1rem;
  border-radius: 999px;
  background: #f1f1f1;
  color: #202225;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5), 0 8px 18px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
}

.logo-pill {
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  text-decoration: none;
  background: rgb(255 255 255 / 92%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  font-weight: 800;
  font-size: 0.8rem;
  color: #202225;
  letter-spacing: 0.05em;
}

.sga-logo {
  width: min(20vw, 180px);
  height: auto;
  display: block;
  flex-shrink: 0;
}

.sga-logo-link {
  display: block;
  flex-shrink: 0;
}

/* Light-background pages: darken the white logo so it stays legible */
.scroll-nav.theme-light .sga-logo {
  filter: brightness(0);
  opacity: 0.82;
}

.nav-pill-muted { background: #6a6f77; color: #fff; }
.badge-new { font-size: 0.6rem; font-weight: 700; line-height: 1; padding: 0.2rem 0.34rem; border-radius: 999px; background: #7e47d3; color: #fff; }
.nav-pill-cta { background: #ff4d10; color: #fff; }

@media (max-width: 1280px) {
  .scroll-nav { width: calc(100% - 4rem); left: 2rem; transform: translateX(0) translateY(0); top: 2rem; padding-bottom: 0.25rem; }
  .scroll-nav.is-visible { transform: translateX(0) translateY(0); }
  .nav-pills { overflow-x: auto; scrollbar-width: none; }
  .nav-pills::-webkit-scrollbar { display: none; }
}

@media (max-width: 900px) {
  .scroll-nav { gap: 0.36rem; }
  .nav-pill { padding: 0.52rem 0.88rem; font-size: 0.88rem; }
}

@media (max-width: 640px) {
  .scroll-nav {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    top: 1.25rem;
    left: 0;
    width: 100%;
    transform: none;
    padding: 0 1.25rem;
  }

  .scroll-nav.is-visible {
    transform: none;
  }

  .nav-top {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .nav-pills {
    display: flex;
    justify-content: center;
    gap: 0.36rem;
    overflow-x: auto;
    scrollbar-width: none;
    width: 100%;
    margin-left: 0;
    padding: 0 0.5rem;
  }

  .nav-pills::-webkit-scrollbar {
    display: none;
  }

  .sga-logo {
    width: min(42vw, 180px);
    height: auto;
  }

  .nav-pill {
    padding: 0.45rem 0.7rem;
    font-size: 0.8rem;
  }

  .logo-pill {
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    margin-left: 0;
  }
}
</style>