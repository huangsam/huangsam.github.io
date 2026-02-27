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
    margin-left: var(--space-md);
    padding: 1.25em;
    border-radius: 1em;
    background-color: var(--color-primary-bg);
    color: var(--color-text-inverse);
    text-decoration: none;
    transition:
      background var(--transition-normal),
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
  @media (max-width: 768px) {
    .social-links {
      flex-direction: column;
      margin-left: 0;
      padding: 1em 2em;
    }
    .social-link {
      margin-left: 0;
      margin-bottom: var(--space-lg);
    }
  }
</style>
