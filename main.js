document.addEventListener('DOMContentLoaded', () => {
  const content = window.portfolioContent;

  if (!content) return;

  document.title = content.siteTitle;

  const body = document.body;
  body.innerHTML = `
    <header>
      <nav aria-label="Primary navigation">
        <span class="nav-mono">${content.brand}</span>
        <ul class="nav-links">
          ${content.navLinks.map(link => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
        </ul>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-grid-bg"></div>
        <div class="hero-inner">
          <p class="hero-tag">${content.hero.tag}</p>
          <h1 id="hero-title">${content.hero.title}</h1>
          <p class="hero-desc">${content.hero.description}</p>
          <div class="hero-stats">
            ${content.hero.stats.map(stat => `
              <div class="hero-stat">
                <div class="hero-stat-num">${stat.value}</div>
                <div class="hero-stat-label">${stat.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="how" aria-labelledby="how-title">
        <p class="sec-label">${content.sections.how.label}</p>
        <h2 id="how-title" class="sec-title">${content.sections.how.title}</h2>
        <div class="how-grid">
          ${content.sections.how.items.map(item => `
            <article class="how-cell">
              <div class="how-cell-num">${item.number}</div>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <span class="tag">${item.tag}</span>
            </article>
          `).join('')}
        </div>
      </section>

      <section id="work" aria-labelledby="work-title">
        <p class="sec-label">${content.sections.work.label}</p>
        <h2 id="work-title" class="sec-title">${content.sections.work.title}</h2>
        <div class="work-terminal">
          <div class="terminal-bar">
            <div class="dot dot-r"></div>
            <div class="dot dot-y"></div>
            <div class="dot dot-g"></div>
          </div>
          <div class="terminal-body">
            ${content.sections.work.entries.map(entry => `
              <article class="work-entry">
                <div class="work-entry-meta">
                  <div class="work-entry-org">${entry.org}</div>
                  <div class="work-entry-period">${entry.period}</div>
                  <div class="work-entry-domain">${entry.domain}</div>
                </div>
                <div class="work-entry-content">
                  <h3>${entry.title}</h3>
                  <p>${entry.description}</p>
                  <span class="work-entry-result">${entry.result}</span>
                </div>
              </article>
            `).join('')}
          </div>
        </div>
      </section>

      <section id="principles" aria-labelledby="principles-title">
        <p class="sec-label">${content.sections.principles.label}</p>
        <h2 id="principles-title" class="sec-title">${content.sections.principles.title}</h2>
        <div class="principles-list">
          ${content.sections.principles.items.map(item => `
            <div class="principle-row">
              <div class="principle-key">${item.key}</div>
              <div class="principle-val">${item.value}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <section id="thinking" aria-labelledby="thinking-title">
        <p class="sec-label">${content.sections.thinking.label}</p>
        <h2 id="thinking-title" class="sec-title">${content.sections.thinking.title}</h2>
        <div class="writing-grid">
          ${content.sections.thinking.items.map(item => `
            <article class="writing-card">
              <div class="writing-card-tag">${item.tag}</div>
              <h3>${item.title}</h3>    
              <p>${item.description}</p>
              <div class="status">${item.status}</div>
            </article>
          `).join('')}
        </div>
      </section>

      <section id="word" aria-labelledby="word-title">
        <p class="sec-label">${content.sections.word.label}</p>
        <div class="word-layout">
          <div class="word-copy">
            <h2 id="word-title" class="sec-title">${content.sections.word.title}</h2>
            <p class="word-description">${content.sections.word.description}</p>
          </div>
          <div class="word-visual">
            <iframe class="word-iframe" src="word.html" title="Leadership qualities word cloud"></iframe>
          </div>
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-title">
        <p class="sec-label">${content.sections.contact.label}</p>
        <h2 id="contact-title" class="sec-title">${content.sections.contact.title}</h2>
        <div class="contact-split">
          <div class="contact-left">
            ${content.sections.contact.intro.map(paragraph => `<p>${paragraph}</p>`).join('')}
            <div class="stack">
              ${content.sections.contact.skills.map(skill => `<span class="stack-tag">${skill}</span>`).join('')}
            </div>
          </div>
          <div class="contact-right">
            ${content.sections.contact.links.map(link => `
              <a href="${link.href}" target="_blank" class="contact-item">
                <div class="contact-item-inner">
                  <div class="contact-item-label">${link.label}</div>
                  <div class="contact-item-val">${link.value}</div>
                </div>
                <span class="contact-arrow">→</span>
              </a>
            `).join('')}
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>${content.footer.text}</p>
      <span class="footer-status"><span class="status-dot"></span>${content.footer.status}</span>
    </footer>
  `;
});
