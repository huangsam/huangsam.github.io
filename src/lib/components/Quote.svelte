<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<blockquote transition:fade={{ duration: 1000 }}>
  <slot>No content at the moment.</slot>
</blockquote>

<style>
  blockquote {
    margin: 1em 2em;
    font-style: italic;
    font-size: var(--font-size-lg);
    color: inherit;
  }
</style>
