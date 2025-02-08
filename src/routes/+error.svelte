<script lang="ts">
  import { page } from '$app/stores';
  import type { Page } from '@sveltejs/kit';

  $: error = ($page as Page).error;
</script>

<h1>{error.message}</h1>

<p>Please return to the <a href="/">home page</a>.</p>
