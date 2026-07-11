<script lang="ts">
  // Import focus areas from the main index file
  import { FOCUS_AREAS } from '$lib/index';
</script>

<section class="focus-areas">
  <h2>Focus Areas</h2>

  <div class="focus-areas-grid">
    {#each FOCUS_AREAS as area (area.name)}
      <div class="focus-area-card">
        <div class="card-header">
          <h3>{area.name}</h3>
        </div>
        <p class="card-description">{area.description}</p>
        <div class="tech-pills">
          {#each area.technologies as tech (tech)}
            <span class="tech-pill">{tech}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  /* Focus areas section - themed background with secondary color */
  .focus-areas {
    padding: 3em 10em;
    background-color: var(--color-secondary-bg);
    color: var(--color-text);
  }

  /* Section title */
  .focus-areas h2 {
    text-align: center;
    margin-bottom: 2em;
    color: var(--color-text);
    font-size: var(--font-size-2xl);
  }

  /* Grid layout for focus area cards */
  .focus-areas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2em;
  }

  /* Individual card */
  .focus-area-card {
    background-color: var(--color-primary-bg);
    color: var(--color-text-inverse);
    padding: 2em;
    border-radius: 0.75em;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition:
      transform var(--transition-bounce),
      box-shadow var(--transition-normal),
      border-color var(--transition-normal);
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .focus-area-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(245, 203, 83, 0.4);
  }

  /* Card Header */
  .card-header h3 {
    margin: 0 0 1rem 0;
    font-size: var(--font-size-lg);
    color: var(--color-accent);
  }

  /* Description text */
  .card-description {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 1.5em 0;
    flex-grow: 1;
  }

  /* Tech tags container */
  .tech-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  /* Individual tech tag */
  .tech-pill {
    background-color: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.9);
    padding: 0.35em 0.85em;
    border-radius: 2em;
    font-size: var(--font-size-xs);
    font-family: 'Merriweather', sans-serif;
    transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast),
      transform var(--transition-fast);
  }

  .focus-area-card:hover .tech-pill {
    border-color: rgba(245, 203, 83, 0.2);
  }

  .tech-pill:hover {
    background-color: rgba(245, 203, 83, 0.15);
    border-color: var(--color-accent);
    color: var(--color-accent);
    transform: scale(1.05);
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .focus-areas {
      padding: 3em 4em;
    }
  }

  @media (max-width: 768px) {
    .focus-areas {
      padding: 2em;
    }

    .focus-areas-grid {
      grid-template-columns: 1fr;
      gap: 1.5em;
    }
  }
</style>
