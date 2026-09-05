<!--
  KeyboardShortcutsModal component: Displays a cheat-sheet modal for Vim hotkey navigation.
  Explains available keyboard shortcuts for visitors navigating the website.
-->
<script lang="ts">
  import Modal from './Modal.svelte';

  interface Props {
    open?: boolean;
    onClose?: () => void;
  }

  let { open = false, onClose }: Props = $props();

  function handleWindowKeydown(e: KeyboardEvent) {
    if (open && (e.key === '?' || (e.key === '/' && e.shiftKey))) {
      e.preventDefault();
      onClose?.();
    }
  }

  interface ShortcutItem {
    keys: string[];
    description: string;
  }

  const shortcuts: ShortcutItem[] = [
    { keys: ['j', 'k'], description: 'Scroll down / up' },
    { keys: ['h', 'l'], description: 'Previous / next interactive element' },
    { keys: ['0', '$'], description: 'Jump to first / last element' },
    { keys: ['?'], description: 'Show keyboard shortcuts' },
    { keys: ['Esc'], description: 'Close modal' },
  ];
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<Modal {open} title="Keyboard Navigation" {onClose}>
  <div class="shortcuts-container">
    <p class="intro">Navigate the site quickly without a mouse using Vim hotkeys.</p>
    <div class="shortcuts-list">
      {#each shortcuts as { keys, description } (description)}
        <div class="shortcut-row">
          <div class="shortcut-keys">
            {#each keys as key, i (key)}
              {#if i > 0}
                <span class="separator">/</span>
              {/if}
              <kbd>{key}</kbd>
            {/each}
          </div>
          <div class="shortcut-desc">{description}</div>
        </div>
      {/each}
    </div>
  </div>
</Modal>

<style>
  .shortcuts-container {
    max-width: 520px;
    margin: 0 auto;
  }

  .intro {
    font-size: var(--font-size-sm);
    color: var(--color-text-inverse);
    opacity: 0.85;
    margin: 0 0 var(--space-md) 0;
    line-height: 1.5;
  }

  .shortcuts-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .shortcut-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.65rem 0.9rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 0.5rem;
    transition:
      background var(--transition-fast),
      border-color var(--transition-fast);
  }

  .shortcut-row:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .shortcut-keys {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  .separator {
    color: var(--color-text-inverse);
    opacity: 0.6;
    font-size: 0.9rem;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.75rem;
    padding: 0.2rem 0.55rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.2;
    color: var(--color-secondary-bg);
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-bottom-width: 2px;
    border-radius: 4px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .shortcut-desc {
    font-size: var(--font-size-sm);
    color: var(--color-text-inverse);
    opacity: 0.9;
    text-align: right;
  }

  @media (max-width: 480px) {
    .shortcut-row {
      padding: 0.5rem 0.75rem;
    }

    .shortcut-desc {
      font-size: var(--font-size-xs);
    }
  }
</style>
