<script lang="ts">
  interface Project {
    title: string;
    url: string;
    description: string;
    highlight: string;
    tags: string[];
  }

  const PROJECTS: Project[] = [
    {
      title: 'Ultimate Python',
      url: 'https://ultimatepython.org',
      highlight: 'Interactive Python Study Guide',
      description:
        'A zero-dependency, hands-on learning platform for mastering Python by example. Features heavily-commented, executable lessons designed for both newcomers and professionals, covering standard library fundamentals through advanced concurrency patterns.',
      tags: ['Python', 'Astro', 'TypeScript', 'Responsive Design', 'Open Source'],
    },
    {
      title: 'Systology',
      url: 'https://sambyte.net/systology/',
      highlight: 'Systems Architecture & Principles',
      description:
        'A curated knowledge base and digital garden dedicated to systems engineering at scale. Documents architectural designs, distributed algorithms, caching strategies, and core engineering principles derived from real-world systems.',
      tags: ['Systems', 'Hugo', 'Distributed Systems', 'Go', 'Cassandra'],
    },
    {
      title: 'Rustoku',
      url: 'https://sambyte.net/rustoku/',
      highlight: 'Rust & WebAssembly Sudoku Engine',
      description:
        'A high-performance interactive Sudoku solver and generator running entirely in the browser. Powered by Rust compiled to WebAssembly (WASM), demonstrating low-level systems logic, memory-efficient backtracking, and real-time UI synchronization.',
      tags: ['Rust', 'WebAssembly', 'WASM', 'Svelte', 'Vite', 'Algorithms'],
    },
  ];
</script>

<section class="featured-work">
  <h2>Featured Projects</h2>

  <div class="projects-grid">
    {#each PROJECTS as project (project.title)}
      <a href={project.url} target="_blank" rel="noopener noreferrer" class="project-card">
        <div class="card-header">
          <div class="title-row">
            <h3>{project.title}</h3>
            <span class="arrow">↗</span>
          </div>
          <span class="highlight-badge">{project.highlight}</span>
        </div>

        <p class="description">{project.description}</p>

        <div class="tag-pills">
          {#each project.tags as tag (tag)}
            <span class="tag-pill">{tag}</span>
          {/each}
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  /* Featured Work Section */
  .featured-work {
    padding: 4em 10em;
    background-color: var(--color-primary-bg);
    color: var(--color-text-inverse);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  /* Section Title */
  .featured-work h2 {
    text-align: center;
    margin-bottom: 2em;
    font-size: var(--font-size-2xl);
    color: var(--color-text-inverse);
  }

  /* Grid Layout */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5em;
  }

  /* Interactive Cards */
  .project-card {
    text-decoration: none;
    color: inherit;
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 0.75em;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition:
      transform var(--transition-bounce),
      box-shadow var(--transition-normal),
      border-color var(--transition-normal),
      background-color var(--transition-normal);
  }

  .project-card:hover {
    transform: translateY(-6px);
    background-color: rgba(255, 255, 255, 0.04);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
    border-color: var(--color-accent);
  }

  /* Card Header */
  .card-header {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin-bottom: 1.25em;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-row h3 {
    margin: 0;
    font-size: var(--font-size-lg);
    color: var(--color-accent);
    transition: color var(--transition-fast);
  }

  .arrow {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.4);
    transition:
      transform var(--transition-bounce),
      color var(--transition-fast);
  }

  .project-card:hover .arrow {
    transform: translate(2px, -2px);
    color: var(--color-accent);
  }

  .highlight-badge {
    font-size: var(--font-size-xs);
    font-family: 'Outfit', sans-serif;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  /* Description */
  .description {
    font-size: var(--font-size-sm);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 2em 0;
    flex-grow: 1;
    font-family: 'Source Serif 4', 'Merriweather', Georgia, serif;
  }

  /* Tag Container */
  .tag-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
  }

  /* Tech tags */
  .tag-pill {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    padding: 0.35em 0.85em;
    border-radius: 2em;
    font-size: var(--font-size-xs);
    transition:
      background-color var(--transition-fast),
      border-color var(--transition-fast),
      color var(--transition-fast);
  }

  .project-card:hover .tag-pill {
    border-color: rgba(245, 203, 83, 0.2);
  }

  .tag-pill:hover {
    background-color: rgba(245, 203, 83, 0.12);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .featured-work {
      padding: 4em 4em;
    }
  }

  @media (max-width: 768px) {
    .featured-work {
      padding: 3em 2em;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5em;
    }
  }
</style>
