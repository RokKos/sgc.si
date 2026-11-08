<template>
  <section class="tickets-section" id="tickets" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">Tickets</h2>

      <div class="tickets-grid">
        <ul class="info-list">
          <li><span class="info-marker" aria-hidden="true"></span><span><strong>Full Access</strong> — Entry to all Slovenia Games Conference 2027 tracks, panels, and showcases.</span></li>
          <li><span class="info-marker" aria-hidden="true"></span><span><strong>Catering</strong> — Complete lunch at the faculty cafeteria (meat and vegan options available).</span></li>
          <li><span class="info-marker" aria-hidden="true"></span><span><strong>Coffee Break</strong> — Fresh coffee or tea accompanied by a croissant to keep you powered through the day.</span></li>
          <li><span class="info-marker" aria-hidden="true"></span><span><strong>Afterparty</strong> — Full admission to the official evening networking party.</span></li>
        </ul>

        <div class="tickets-pricing">
          <div class="price-cards">
            <div class="price-card">
              <span class="price-amount">35€</span>
              <span class="price-label">Regular</span>
            </div>
            <div class="price-card">
              <span class="price-amount">20€</span>
              <span class="price-label">Student</span>
            </div>
          </div>
          <a
            href="https://olaii.com/event/11304/slovenia-games-conference-2027/"
            target="_blank"
            rel="noopener noreferrer"
            class="tickets-link"
          >Get tickets →</a>
        </div>
      </div>
    </div>
  </section>

  <section class="indie-dev-section" id="indies" aria-labelledby="indie-dev-title">
    <div class="container indie-dev-wrap">
      <h2 id="indie-dev-title">Indie Developers</h2>

      <div class="indie-dev-grid">
        <div class="indie-dev-col">
          <h3>Showcase Your Game</h3>
          <p>
            Are you working on a game as a studio or a solo dev? Bring your game to
            SGC 2027 and connect with fellow developers and the broader game
            development community.
          </p>
        </div>
        <div class="indie-dev-col">
          <h3>Who Can Apply</h3>
          <p>
            Independent developers and studios with a playable game — from an early
            prototype to a released title.
          </p>
        </div>
        <div class="indie-dev-col">
          <h3>Registration</h3>
          <p>
            Registration opens before 20 January 2027. Our team will review your
            submission and confirm your inclusion if there are free slots.
          </p>
        </div>
      </div>

      <div class="indie-dev-actions">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfEXcg5rVaIoENJwr-kdw7fjCBxa_j8pXiTyDIJsSvVyDmoww/viewform"
          target="_blank"
          rel="noopener noreferrer"
          class="indie-dev-link"
        >Register now →</a>
        <a href="/indies" class="indie-dev-link indie-dev-link-secondary">Meet the indies →</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tickets-section {
  background: #1e2223;
  padding: 3rem 0 4.5rem;
  color: #eef1f2;
  /* Offset the anchor jump so the heading clears the floating header. */
  scroll-margin-top: 7rem;
}

.tickets-wrap {
  text-align: left;
}

.tickets-wrap h2 {
  margin: 0 0 2rem;
  color: #f3f3f3;
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
  font-size: clamp(2.2rem, 4.2vw, 3.5rem);
  line-height: 0.95;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.tickets-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: clamp(1.5rem, 4vw, 3.5rem);
  align-items: start;
}

.tickets-pricing {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.price-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.price-card {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1.1rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
}

.price-amount {
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  font-weight: 700;
  line-height: 1;
  color: #ffffff;
}

.price-label {
  font-size: 0.98rem;
  color: #aeb6bd;
  font-weight: 600;
}

@media (max-width: 760px) {
  .tickets-grid { grid-template-columns: 1fr; }
}

.ticket-bubble {
  width: 100%;
  max-width: 1120px;
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
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
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

/* Sharp orange square marker replaces the old emoji icons. */
.info-marker {
  flex: none;
  width: 12px;
  height: 12px;
  margin-top: 0.4rem;
  background: #ff4d10;
}

/* "Your Ticket Includes" is now the full width of the bubble, so lay it out
   in two columns on wider screens. */
.info-list-cols {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem 2.4rem;
}

@media (max-width: 640px) {
  .info-list-cols { grid-template-columns: 1fr; }
}

.tickets-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  background: #ff4d10;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.16s ease, transform 0.16s ease;
}

.tickets-link:hover {
  background: #e03d00;
  transform: translateY(-1px);
}

/* Indie developers registration — blue call-to-action band. */
.indie-dev-section {
  background: #1e3fae;
  padding: clamp(3rem, 6vw, 4.6rem) 0;
  color: #eef2ff;
  /* Offset the anchor jump so the heading clears the floating header. */
  scroll-margin-top: 7rem;
}

.indie-dev-wrap {
  text-align: left;
}

.indie-dev-wrap h2 {
  margin: 0 0 2.2rem;
  color: #ffffff;
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 0.98;
  font-weight: 600;
  letter-spacing: -0.03em;
}

.indie-dev-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
}

.indie-dev-col h3 {
  margin: 0 0 0.6rem;
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
}

.indie-dev-col p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1.02rem;
  line-height: 1.5;
}

.indie-dev-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.4rem;
}

.indie-dev-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.82rem 1.7rem;
  border-radius: 999px;
  background: #ff4d10;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.16s ease, color 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease;
}

.indie-dev-link:hover {
  background: #ffffff;
  color: #ff4d10;
  box-shadow: inset 0 0 0 2px #ffffff;
  transform: translateY(-1px);
}

/* Secondary action — outline button on the blue band. */
.indie-dev-link-secondary {
  background: transparent;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.55);
}

.indie-dev-link-secondary:hover {
  background: #ffffff;
  color: #1e3fae;
  box-shadow: inset 0 0 0 2px #ffffff;
}

@media (max-width: 860px) {
  .indie-dev-grid { grid-template-columns: 1fr; gap: 1.6rem; }
}

@media (max-width: 760px) {
  .tickets-section { padding: 2.4rem 0 3.6rem; }
  .exhibitors-section { padding: 0 0 3.6rem; }
  .exhibitors-card { padding: 2.25rem 1.5rem 2.5rem; }
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
