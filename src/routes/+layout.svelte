<script lang="ts">
  import './style.css';
  import { onMount } from 'svelte';
  import { initVimNavigation } from '$lib/utils/vimNavigation';
  let now: Date = new Date();

  onMount(() => {
    initVimNavigation();
  });
</script>

<svelte:head>
  <title>Sam Huang</title>
  <meta name="description" content="Website for Sam Huang" />
</svelte:head>

<header>
  <a href="/">Sam's website</a>
  <nav class="right">
    <a href="https://github.com/huangsam/huangsam.github.io">Source code</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <span>&copy;</span>
  <span>2016-{now.getFullYear()}</span>
  <span> | </span>
  <span>Made with &hearts; by @huangsam.</span>
</footer>
