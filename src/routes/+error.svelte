<script lang="ts">
  import { page } from '$app/stores';
  import type { Page } from '@sveltejs/kit';

  $: error = ($page as Page).error;
</script>

{#if error}
  <h1>{error.message}</h1>
{:else}
  <h1>Unknown error</h1>
{/if}
<p>Please return to the <a href="/">home page</a>.</p>
