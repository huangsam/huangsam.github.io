<script lang="ts">
  import { SKILLS } from '$lib/index';
</script>

<section class="skills">
  <h2>Skills</h2>
  <div class="skills-grid">
    {#each SKILLS as skill (skill.name)}
      <div class="skill">
        <div class="skill-name">{skill.name}</div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: {skill.level}%"></div>
        </div>
        <div class="skill-level">{skill.level}%</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .skills {
    padding: 2em 10em;
    background-color: var(--secondary-bg-color);
    color: var(--primary-text-color);
  }

  .skills h2 {
    text-align: center;
    margin-bottom: 2em;
    color: var(--primary-text-color);
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
  }

  .skill {
    background-color: var(--primary-bg-color);
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .skill-name {
    font-weight: bold;
    margin-bottom: 0.5em;
    color: white;
  }

  .skill-bar {
    background-color: rgba(255, 255, 255, 0.2);
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.5em;
  }

  .skill-fill {
    background-color: var(--accent-color);
    height: 100%;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .skill-fill::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
  }

  .skill:hover .skill-fill::before {
    left: 100%;
    transition: left 1s ease;
  }

  .skill-level {
    text-align: right;
    font-size: 0.8em;
    color: white;
  }

  @media (max-width: 768px) {
    .skills {
      padding: 2em;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
