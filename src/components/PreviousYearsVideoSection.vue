<template>
  <section class="tickets-section" id="tickets" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">TICKETS</h2>
      <p class="tickets-subtitle">
        Ticket sales will open soon. Sign up below to be notified when they go live.
      </p>

      <div class="ticket-bubble">
        <div class="bubble-cols">
          <div class="bubble-section">
            <h3 class="info-title">What to expect?</h3>
            <ul class="info-list">
              <li><span class="info-icon" aria-hidden="true">🎤</span>At least ten lectures on game development topics divided in two tracks — technical and art.</li>
              <li><span class="info-icon" aria-hidden="true">🛠️</span>At least two game development workshops</li>
              <li><span class="info-icon" aria-hidden="true">🗣️</span>One round table with three guests on a game development related topic</li>
              <li><span class="info-icon" aria-hidden="true">🕹️</span>Space for indie developers to showcase their work</li>
              <li><span class="info-icon" aria-hidden="true">📣</span>Booth space for sponsor presentations</li>
              <li><span class="info-icon" aria-hidden="true">📄</span>CV reviews from our sponsors</li>
            </ul>
          </div>

          <div class="bubble-divider-v" aria-hidden="true"></div>

          <div class="bubble-section">
            <h3 class="info-title">Ticket includes:</h3>
            <ul class="info-list">
              <li><span class="info-icon" aria-hidden="true">🎫</span>Full access to the Slovenia Games Conference 2027</li>
              <li><span class="info-icon" aria-hidden="true">🍽️</span>Full lunch at faculty cafeteria (meat and vegan options)</li>
              <li><span class="info-icon" aria-hidden="true">☕</span>Coffee break (coffee or tea and croissant)</li>
            </ul>
          </div>
        </div>

        <div class="bubble-divider" aria-hidden="true"></div>

        <div class="coming-soon-inner">
          <p class="coming-soon-emoji" aria-hidden="true">🎟️</p>
          <h3>Coming Soon</h3>
          <p>Ticket details and pricing will be announced shortly. Stay tuned.</p>
          <a href="https://forms.gle/Pu1PB6qJTeaPp1kM7"
            target="_blank"
            rel="noopener noreferrer"
            class="notify-btn">
            Signup for newsletter →
          </a>
        </div>
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

.ticket-bubble {
  max-width: 720px;
  margin: 2.5rem auto 0;
  padding: 2rem 2rem 2.25rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
}

.bubble-cols {
  display: flex;
  align-items: stretch;
  gap: 2rem;
}

.bubble-cols .bubble-section {
  min-width: 0;
}

.bubble-cols .bubble-section:first-of-type {
  flex: 1.55;
}

.bubble-cols .bubble-section:last-of-type {
  flex: 1;
}

.bubble-divider-v {
  flex: none;
  width: 0;
  align-self: stretch;
  border-left: 2px dotted rgba(255, 255, 255, 0.22);
}

.bubble-divider {
  height: 0;
  margin: 1.6rem 0;
  border-top: 2px dotted rgba(255, 255, 255, 0.22);
}

.info-title {
  margin: 0 0 1rem;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-size: 1.35rem;
  color: #f2f4f7;
}

.info-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #d7dbde;
  font-size: 1.02rem;
  line-height: 1.45;
}

.info-icon {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 10px;
  background: rgba(255, 77, 16, 0.14);
  border: 1px solid rgba(255, 77, 16, 0.28);
  font-size: 1.1rem;
  line-height: 1;
}

.coming-soon-inner {
  text-align: center;
}

.coming-soon-emoji {
  margin: 0;
  font-size: 3rem;
}

.coming-soon-inner h3 {
  margin: 0.5rem 0 0;
  font-size: 1.8rem;
  color: #f2f4f7;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
}

.coming-soon-inner p {
  margin: 0.5rem 0 0;
  color: #cfd7dd;
  font-size: 1.05rem;
  line-height: 1.5;
}

.notify-btn {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.75rem;
  background: #ff4d10;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.15s;
}

.notify-btn:hover {
  background: #e03d00;
}

@media (max-width: 760px) {
  .tickets-section { padding: 2.4rem 0 3.6rem; }
  .ticket-bubble { padding: 1.5rem 1.25rem 1.75rem; }
  .bubble-cols { flex-direction: column; gap: 0; }
  .bubble-divider-v {
    width: auto;
    height: 0;
    margin: 1.6rem 0;
    border-left: 0;
    border-top: 2px dotted rgba(255, 255, 255, 0.22);
  }
}
</style>
