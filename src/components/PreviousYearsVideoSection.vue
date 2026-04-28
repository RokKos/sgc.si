<template>
  <section class="tickets-section" id="tickets" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">TICKETS</h2>
      <p class="tickets-subtitle">
        Ticket sales will open soon. Sign up below to be notified when they go live.
      </p>

      <div class="coming-soon-card">
        <p class="coming-soon-emoji" aria-hidden="true">🎟️</p>
        <h3>Coming Soon</h3>
        <p>Ticket details and pricing will be announced shortly. Stay tuned.</p>
      </div>

      <!-- TODO: Uncomment when tickets go live
      <div class="ticket-tabs" role="tablist" aria-label="Ticket categories">
        <button
          v-for="(category, index) in categories"
          :key="category.key"
          type="button"
          class="ticket-tab"
          :class="{ active: index === activeCategoryIndex }"
          :aria-selected="index === activeCategoryIndex"
          role="tab"
          @click="selectCategory(index)"
        >
          {{ category.label }}
        </button>
      </div>

      <div class="ticket-grid" aria-live="polite">
        <article v-for="card in activeCategory.cards" :key="card.title" class="ticket-card">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-copy">{{ card.copy }}</p>
          <div class="card-pricing">
            <p class="price-new">{{ card.price }}</p>
          </div>
          <a class="card-cta" :href="card.ctaUrl || '#'">Get Ticket →</a>
        </article>
      </div>
      -->
    </div>
  </section>
</template>

<script setup>
// TODO: Uncomment and populate when tickets go live
// import { computed, ref } from 'vue';
// const categories = [];
// const activeCategoryIndex = ref(0);
// const activeCategory = computed(() => categories[activeCategoryIndex.value]);
// function selectCategory(index) { activeCategoryIndex.value = index; }
</script>

<style scoped>
.tickets-section {
  background: #1e2223;
  padding: 3rem 0 4.5rem;
  color: #eef1f2;
}

.tickets-wrap {
  text-align: center;
}

.tickets-wrap h2 {
  margin: 0;
  color: #f3f3f3;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-size: clamp(2.2rem, 4.2vw, 3.5rem);
  line-height: 0.95;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.tickets-subtitle {
  margin: 0.75rem auto 0;
  max-width: 760px;
  color: #d7dbde;
  font-size: clamp(1.1rem, 1.7vw, 1.38rem);
  line-height: 1.25;
}

.coming-soon-card {
  max-width: 600px;
  margin: 2rem auto 0;
  padding: 3rem 2rem;
  text-align: center;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.05);
}

.coming-soon-emoji {
  margin: 0;
  font-size: 3rem;
}

.coming-soon-card h3 {
  margin: 0.5rem 0 0;
  font-size: 1.8rem;
  color: #f2f4f7;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
}

.coming-soon-card p {
  margin: 0.5rem 0 0;
  color: #cfd7dd;
  font-size: 1.05rem;
  line-height: 1.5;
}

@media (max-width: 760px) {
  .tickets-section { padding: 2.4rem 0 3.6rem; }
  .coming-soon-card { padding: 2rem 1.5rem; }
}
</style>
