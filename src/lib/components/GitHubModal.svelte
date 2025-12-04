<!--
  GitHubModal component: Displays a modal with the top GitHub repositories for a user.
  Fetches repository data from GitHub API and shows details like stars, language, and topics.
-->
<script lang="ts">
  import Modal from './Modal.svelte';
  import { fetchRepos } from '$lib/utils/github';

  export let open = false;
  export let onClose: () => void;

  // Interface for GitHub repository data fetched from the API
  interface Repo {
    name: string;
    stargazers_count: number;
    html_url: string;
    language: string | null;
    description: string | null;
    topics: string[];
  }

  let repos: Repo[] = [];
  let loading = true;
  let error: string | null = null;

  async function loadRepos() {
    loading = true;
    error = null;
    try {
      const data = await fetchRepos('huangsam');
      repos = data.items.slice(0, 5);
      if (repos.length === 0) throw new Error('No repositories found');
    } catch (e) {
      error = e instanceof Error ? e.message : 'An unknown error occurred';
    } finally {
      loading = false;
    }
  }

  // Load repositories when the modal opens
  $: if (open) loadRepos();
</script>

<Modal {open} title="Top GitHub Repositories" {onClose}>
  <!-- Display loading message while fetching data -->
  {#if loading}
    <p>Loading GitHub stats...</p>
    <!-- Display error message if fetch fails -->
  {:else if error}
    <p>Error: {error}</p>
    <!-- Display list of repositories -->
  {:else}
    <ul>
      {#each repos as repo (repo.name)}
        <li>
          <div class="repo-header">
            <a href={repo.html_url} target="_blank" rel="noopener"><strong>{repo.name}</strong></a>
            {#if repo.language}<span class="language">{repo.language}</span>{/if}
            <span class="stars">⭐ {repo.stargazers_count}</span>
          </div>
          {#if repo.description}<p class="description">{repo.description}</p>{/if}
          {#if repo.topics.length > 0}
            <div class="topics">
              {#each repo.topics.slice(0, 5) as topic (topic)}
                <span class="topic">{topic}</span>
              {/each}
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</Modal>

<style>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0.5rem 0;
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  li:last-child {
    border-bottom: none;
  }
  .repo-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .language {
    background-color: var(--primary-bg-color);
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
  }
  .stars {
    font-size: 0.9rem;
  }
  .description {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: inherit;
  }
  .topics {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }
  .topic {
    background-color: rgba(255, 255, 255, 0.2);
    color: inherit;
    padding: 0.1rem 0.3rem;
    border-radius: 0.2rem;
    font-size: 0.75rem;
  }
  a {
    color: white;
  }
  a:hover,
  a:focus {
    color: lightgray;
  }
</style>
