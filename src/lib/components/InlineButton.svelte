<script lang="ts">
  export let label: string;
  export let active: boolean;
  export let ariaLabel: string = '';
  function handleClick() {
    active = true;
  }
</script>

<button class="inline-btn" aria-label={ariaLabel || label} on:click={handleClick}>
  {label}
</button>

<style>
  .inline-btn {
    margin-left: 0.5rem;
    padding: 0.35rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.35);
    background: transparent;
    color: white;
    cursor: pointer;
  }
  .inline-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
