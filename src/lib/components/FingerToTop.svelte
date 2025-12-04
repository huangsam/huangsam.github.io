<script lang="ts">
  // Emits a click event and scrolls to top
  export let ariaLabel: string = 'Go to top';
  function handleClick(e: Event) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    (e.currentTarget as HTMLButtonElement).blur();
  }
</script>

<button
  type="button"
  class="wiggle-finger finger-btn"
  aria-label={ariaLabel}
  on:click={handleClick}
>
  ☝️
</button>

<style>
  /* Finger emoji button styling */
  .wiggle-finger {
    display: inline-block; /* Make button behave like inline element */
    cursor: pointer; /* Show pointer on hover */
    transition: transform 0.2s; /* Smooth transform transitions */
    background: none; /* Remove default button background */
    border: none; /* Remove default button border */
    padding: 0; /* Remove default button padding */
    font: inherit; /* Inherit font from parent */
    color: inherit; /* Inherit color from parent */
  }

  /* Wiggle animation on hover/focus */
  .wiggle-finger:hover,
  .wiggle-finger:focus {
    animation: wiggle 0.7s;
  }

  /* Keyframes for wiggle effect */
  @keyframes wiggle {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-20deg);
    }
    40% {
      transform: rotate(20deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    80% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
