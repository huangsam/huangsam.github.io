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
  <link
    rel="preload"
    href="/fonts/FjallaOne-Regular.ttf"
    as="font"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/Merriweather-Regular.ttf"
    as="font"
    type="font/ttf"
    crossorigin="anonymous"
  />
  <meta
    name="description"
    content="Engineer at day. Artist at night. Software engineer, photographer, and musician."
  />
  <meta property="og:title" content="Sam Huang" />
  <meta
    property="og:description"
    content="Engineer at day. Artist at night. Software engineer, photographer, and musician."
  />
  <meta property="og:image" content="https://huangsam.github.io/profile.jpg" />
  <meta property="og:url" content="https://huangsam.github.io" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sam Huang" />
  <meta
    name="twitter:description"
    content="Engineer at day. Artist at night. Software engineer, photographer, and musician."
  />
  <meta name="twitter:image" content="https://huangsam.github.io/profile.jpg" />
</svelte:head>

<div class="layout">
  <header>
    <a href="/">Sam's website</a>
    <nav class="right">
      <a
        href="https://github.com/huangsam/huangsam.github.io"
        rel="noopener noreferrer"
        target="_blank">Source code</a
      >
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
</div>
