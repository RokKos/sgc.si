<template>
  <section class="tickets-section" id="tickets" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">Tickets for visitors</h2>
      <p class="tickets-subtitle">
        Secure your place at Slovenia Games Conference 2027.
      </p>

      <div class="ticket-bubble">
        <div class="bubble-cols">
          <div class="bubble-section">
            <h3 class="info-title">Event Highlights:</h3>
            <ul class="info-list">
              <li><span class="info-icon" aria-hidden="true">🎤</span><span><strong>10+ Expert Lectures:</strong> Split across two dedicated tracks—Technical and Art.</span></li>
              <li><span class="info-icon" aria-hidden="true">🛠️</span><span><strong>2+ Hands-On Workshops:</strong> Deepen your skills with interactive game dev sessions.</span></li>
              <li><span class="info-icon" aria-hidden="true">🗣️</span><span><strong>Featured Round Table:</strong> A panel discussion featuring 3 industry guest speakers.</span></li>
              <li><span class="info-icon" aria-hidden="true">🕹️</span><span><strong>Indie Showcase:</strong> Dedicated space for independent developers to show off their games.</span></li>
              <li><span class="info-icon" aria-hidden="true">📣</span><span><strong>Sponsor Expo:</strong> Explore booths and connect with event sponsors.</span></li>
              <li><span class="info-icon" aria-hidden="true">📄</span><span><strong>Portfolio &amp; CV Reviews:</strong> Get direct feedback on your resume from hiring sponsors.</span></li>
              <li><span class="info-icon" aria-hidden="true">🎉</span><span><strong>Evening Party:</strong> Network, unwind, and celebrate with fellow creators.</span></li>
            </ul>
          </div>

          <div class="bubble-divider-v" aria-hidden="true"></div>

          <div class="bubble-section">
            <h3 class="info-title">Your Ticket Includes:</h3>
            <ul class="info-list">
              <li><span class="info-icon" aria-hidden="true">🎫</span><span><strong>Full Access:</strong> Entry to all Slovenia Games Conference 2027 tracks, panels, and showcases</span></li>
              <li><span class="info-icon" aria-hidden="true">🍽️</span><span><strong>Catering:</strong> Complete lunch at the faculty cafeteria (meat and vegan options available)</span></li>
              <li><span class="info-icon" aria-hidden="true">☕</span><span><strong>Coffee Break:</strong> Fresh coffee or tea accompanied by a croissant</span></li>
              <li><span class="info-icon" aria-hidden="true">🥳</span><span><strong>Afterparty:</strong> Full admission to the official evening networking party</span></li>
            </ul>
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
  </section>
</template>

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
  font-family: "Funnel Sans", "Segoe UI", sans-serif;
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

.tickets-link {
  display: block;
  width: fit-content;
  margin: 2rem auto 0;
  padding: 0.8rem 1.8rem;
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
