<!--
  Modal component: A reusable modal dialog with accessibility features.
  Handles focus management, keyboard navigation, backdrop clicks, and smooth transitions.
  Used as a base for other modals like GitHubModal and TravelModal.
-->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { scale, fade } from 'svelte/transition';

  // Props
  export let open = false; // Controls modal visibility
  export let title = ''; // Modal title for accessibility
  export let onClose: () => void; // Callback when modal should close

  // DOM element references for focus management and event handling
  let dialogEl: HTMLDivElement | null = null;
  let modalEl: HTMLDivElement | null = null;
  let previousFocus: HTMLElement | null = null; // Element that had focus before modal opened

  /**
   * Handles keyboard navigation within the modal
   * - Escape key closes modal
   * - Tab key cycles focus within modal (with Shift+Tab for reverse)
   */
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

  /**
   * Closes modal when clicking on backdrop (outside modal content)
   */
  function clickBackdrop(e: MouseEvent) {
    if (e.target === dialogEl) {
      onClose?.();
    }
  }

  /**
   * Handles keyboard events on backdrop for accessibility
   */
  function handleBackdropKey(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      onClose?.();
    }
  }

  // Set up global keyboard event listener when component mounts
  onMount(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', handleKey);
    }
  });

  // Clean up event listener when component unmounts
  onDestroy(() => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', handleKey);
    }
  });

  /**
   * Reactive statement for focus management
   * When modal opens: save current focus and focus first focusable element
   * When modal closes: restore previous focus
   */
  $: if (open && modalEl && typeof document !== 'undefined') {
    // eslint-disable-next-line no-useless-assignment
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
  <!--
    Modal backdrop - covers entire viewport with semi-transparent overlay
    Includes fade transition for smooth appearance/disappearance
  -->
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
    <!--
      Modal content container with scale transition
      Centers modal and provides backdrop click-to-close functionality
    -->
    <div bind:this={modalEl} class="modal" transition:scale={{ duration: 200, start: 0.95 }}>
      <!-- Modal header with title and close button -->
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
      <!-- Modal content area - slot for custom content -->
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
{/if}

<style>
  /* Backdrop overlay - covers entire viewport with dark semi-transparent background */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* Main modal container - responsive width, scrollable content, themed background */
  .modal {
    width: min(800px, 90vw); /* Max 800px or 90% viewport width */
    max-height: 80vh; /* Max 80% viewport height */
    overflow: auto; /* Scroll if content exceeds height */
    background: var(--primary-bg-color);
    color: white;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    padding: 1rem 1rem 1.25rem;
  }

  /* Modal header - title and close button layout */
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
    margin-bottom: 0.75rem;
  }

  /* Close button - minimal styling, hover effects */
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

  /* Content area - improved line height for readability */
  .modal-content {
    line-height: 1.7;
  }
</style>
