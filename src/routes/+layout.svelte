<script lang="ts">
  import './style.css';
  let now: Date = new Date();
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
  <span>Made with &hearts; by @huangsam.</span>
</footer>
