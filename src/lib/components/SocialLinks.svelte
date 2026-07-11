<script lang="ts">
  export let profiles: Array<{ name: string; url: string }> = [];
</script>

<div class="social-links">
  {#each profiles as profile (profile.name)}
    <a id={profile.name.toLowerCase()} href={profile.url} class="social-link">{profile.name}</a>
  {/each}
</div>

<style>
  /* Social links styling */
  .social-links {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 2em 0;
  }
  .social-link {
    margin-bottom: var(--space-md);
    margin-left: var(--space-xl);
    padding: 1.25em 1.75em;
    border-radius: 1em;
    background-color: var(--color-primary-bg);
    color: var(--color-text-inverse);
    text-decoration: none;
    transition:
      background-color var(--transition-normal),
      color var(--transition-normal);
  }
  .social-link:first-child {
    margin-left: 0;
  }
  .social-link:hover,
  .social-link:focus {
    background-color: var(--color-secondary-bg);
    color: var(--color-text);
  }
  @media (max-width: 480px) {
    .social-links {
      flex-direction: column;
      margin: 2em 0;
      padding: 0 2.5em;
      box-sizing: border-box;
    }
    .social-link {
      margin-left: 0;
      margin-bottom: var(--space-lg);
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
  }
</style>
