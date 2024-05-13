<script>
  import './style.css';
  let now = new Date();
</script>

<svelte:head>
  <title>Sam Huang</title>
  <meta name="description" content="Website for Sam Huang" />
</svelte:head>

<header>
  <a href="/">Sam's website</a>
  <nav class="right">
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <div>&copy; 2016-{now.getFullYear()} Made with &hearts; by @huangsam.</div>
</footer>
