<script>
  import './style.css';
  let now = new Date();
  let title = "Sam's website";
  let description = 'Website for huangsam';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<header>
  <a href="/">{title}</a>
  <nav class="right">
    <a href="/about">About</a>
  </nav>
</header>

<main class="content">
  <slot />
</main>

<footer>
  <div>&copy; 2016-{now.getFullYear()} Made with &hearts; by @huangsam.</div>
</footer>
