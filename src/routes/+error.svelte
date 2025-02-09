<script lang="ts">
  import { page } from '$app/stores';
  import type { Page } from '@sveltejs/kit';

  $: error = ($page as Page).error;
</script>

<div class="error">
  {#if error}
    <h1>{error.message}</h1>
  {:else}
    <h1>Unknown error</h1>
  {/if}
  <p>Please return to the <a href="/">home page</a>.</p>
</div>

<style>
  div.error {
    padding: 1em 1.25em;
  }
</style>
