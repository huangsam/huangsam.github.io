<script lang="ts">
  // Import skills data from the main index file
  import { SKILLS } from '$lib/index';
</script>

<!-- Skills section with themed background and centered title -->
<section class="skills">
  <h2>Skills</h2>

  <!--
    Responsive grid layout for skill items
    Uses CSS Grid with auto-fit columns that adapt to screen size
  -->
  <div class="skills-grid">
    <!--
      Iterate through SKILLS array, using skill.name as unique key
      Each skill displays name, progress bar, and percentage
    -->
    {#each SKILLS as skill (skill.name)}
      <div class="skill">
        <!-- Skill name displayed prominently -->
        <div class="skill-name">{skill.name}</div>

        <!-- Progress bar container -->
        <div class="skill-bar">
          <!--
            Animated fill bar - width controlled by skill.level percentage
            Includes shimmer effect on hover
          -->
          <div class="skill-fill" style="width: {skill.level}%"></div>
        </div>

        <!-- Skill proficiency percentage -->
        <div class="skill-level">{skill.level}%</div>
      </div>
    {/each}
  </div>
</section>

<style>
  /* Skills section - themed background with secondary color */
  .skills {
    padding: 2em 10em;
    background-color: var(--secondary-bg-color);
    color: var(--primary-text-color);
  }

  /* Section title - centered with bottom margin */
  .skills h2 {
    text-align: center;
    margin-bottom: 2em;
    color: var(--primary-text-color);
  }

  /*
    Responsive CSS Grid layout for skill items
    - auto-fit: Creates as many columns as fit in available space
    - minmax(250px, 1fr): Minimum 250px width, maximum 1 fraction of available space
    - gap: 1.5em spacing between grid items
  */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
  }

  /* Individual skill card - themed background with subtle shadow */
  .skill {
    background-color: var(--primary-bg-color);
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Skill name - bold white text */
  .skill-name {
    font-weight: bold;
    margin-bottom: 0.5em;
    color: white;
  }

  /* Progress bar container - semi-transparent background */
  .skill-bar {
    background-color: rgba(255, 255, 255, 0.2);
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 0.5em;
  }

  /*
    Animated progress bar fill
    - Width controlled by skill.level percentage
    - Smooth transition for width changes
    - Position relative for pseudo-element positioning
  */
  .skill-fill {
    background-color: var(--accent-color);
    height: 100%;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  /*
    Shimmer effect pseudo-element
    - Initially positioned off-screen (left: -100%)
    - Linear gradient creates light sweep effect
    - Animates on hover to create "shine" effect
  */
  .skill-fill::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent);
  }

  /* Trigger shimmer animation on skill card hover */
  .skill:hover .skill-fill::before {
    left: 100%;
    transition: left 1s ease;
  }

  /* Skill level percentage - right-aligned small text */
  .skill-level {
    text-align: right;
    font-size: 0.8em;
    color: white;
  }

  /* Responsive design for mobile screens */
  @media (max-width: 768px) {
    .skills {
      padding: 2em; /* Reduced padding on mobile */
    }

    .skills-grid {
      grid-template-columns: 1fr; /* Single column on mobile */
    }
  }
</style>
