<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<blockquote transition:fade={{ duration: 1000 }}>
  {#if children}
    {@render children()}
  {:else}
    No content at the moment.
  {/if}
</blockquote>

<style>
  blockquote {
    margin: 1em 2em;
    font-style: italic;
    font-size: var(--font-size-lg);
    color: inherit;
  }
</style>
