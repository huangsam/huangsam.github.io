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
    margin-bottom: 1rem;
    margin-left: 1rem;
    padding: 1.25em;
    border-radius: 1em;
    background-color: var(--primary-bg-color);
    color: white;
    text-decoration: none;
    transition:
      background 0.2s,
      color 0.2s;
  }
  .social-link:first-child {
    margin-left: 0;
  }
  .social-link:hover,
  .social-link:focus {
    background-color: var(--secondary-bg-color);
    color: var(--primary-text-color);
  }
  @media (max-width: 768px) {
    .social-links {
      flex-direction: column;
      margin-left: 0;
      padding: 1em 2em;
    }
    .social-link {
      margin-left: 0;
      margin-bottom: 1.25rem;
    }
  }
</style>
