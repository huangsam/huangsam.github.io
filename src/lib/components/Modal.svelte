<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { scale, fade } from 'svelte/transition';
  export let open = false;
  export let title = '';
  export let onClose: () => void;

  let dialogEl: HTMLDivElement | null = null;
  let modalEl: HTMLDivElement | null = null;
  let previousFocus: HTMLElement | null = null;

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose?.();
    }
    if (e.key === 'Tab' && modalEl) {
      const focusable = modalEl.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  }

  function clickBackdrop(e: MouseEvent) {
    if (e.target === dialogEl) {
      onClose?.();
    }
  }

  function handleBackdropKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      onClose?.();
    }
  }

  onMount(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKey);
    }
  });
  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', handleKey);
    }
  });

  $: if (open && modalEl && typeof document !== 'undefined') {
    previousFocus = document.activeElement as HTMLElement;
    const focusable = modalEl.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ) as HTMLElement;
    if (focusable) focusable.focus();
  } else if (!open && previousFocus && typeof document !== 'undefined') {
    previousFocus.focus();
  }
</script>

{#if open}
  <div
    bind:this={dialogEl}
    class="modal-backdrop"
    role="dialog"
    aria-modal="true"
    aria-label={title}
    tabindex="-1"
    on:click={clickBackdrop}
    on:keydown={handleBackdropKey}
    transition:fade={{ duration: 200 }}
  >
    <div bind:this={modalEl} class="modal" transition:scale={{ duration: 200, start: 0.95 }}>
      <div class="modal-header">
        <h3>{title}</h3>
        <button
          class="close"
          aria-label="Close"
          on:click={onClose}
          on:keydown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onClose();
            }
          }}>✕</button
        >
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .modal {
    width: min(800px, 90vw);
    max-height: 80vh;
    overflow: auto;
    background: var(--primary-bg-color);
    color: white;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    padding: 1rem 1rem 1.25rem;
  }
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
    margin-bottom: 0.75rem;
  }
  .close {
    background: transparent;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
  }
  .close:hover,
  .close:focus {
    color: lightgray;
  }
  .modal-content {
    line-height: 1.7;
  }
</style>
