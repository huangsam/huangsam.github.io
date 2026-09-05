export interface VimNavigationOptions {
  onOpenShortcuts?: () => void;
}

export function initVimNavigation(options?: VimNavigationOptions): () => void {
  // Helper to check if a modal is open
  const isModalOpen = () => document.querySelector('.modal-backdrop') !== null;

  // Helper to check if the user is typing in an input field
  const isTyping = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    const tagName = target?.tagName;
    const isInput =
      tagName === 'INPUT' &&
      !['checkbox', 'radio', 'range', 'button', 'file', 'reset', 'submit', 'color'].includes(
        (target as HTMLInputElement).type,
      );

    return (
      target?.isContentEditable ||
      ((isInput || tagName === 'TEXTAREA' || tagName === 'SELECT') &&
        !(target as HTMLInputElement).readOnly)
    );
  };

  const focusableQuery = 'a:not([tabindex="-1"]), button:not([tabindex="-1"])';

  // Helper to reliably get focusable elements and tracking current focus index
  const getFocusState = () => {
    const rawElements = Array.from(document.querySelectorAll<HTMLElement>(focusableQuery));
    const elements = rawElements.filter(
      (el) => !el.closest('footer') && !el.closest('.modal') && !el.closest('.modal-backdrop'),
    );
    const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
    return { elements, currentIndex };
  };

  const handleKeydown = (event: KeyboardEvent) => {
    // If modal is open or user is typing, ignore Vim shortcuts
    if (isModalOpen() || isTyping(event)) return;

    // Ignore if a modifier key (Cmd, Ctrl, Alt) is pressed, except Shift which we handle
    if (event.metaKey || event.ctrlKey || event.altKey) return;

    const key = event.key;
    const shift = event.shiftKey;

    switch (key) {
      case '?':
      case '/': {
        if (key === '?' || (key === '/' && shift)) {
          event.preventDefault();
          options?.onOpenShortcuts?.();
          window.dispatchEvent(new CustomEvent('open-keyboard-shortcuts'));
        }
        break;
      }
      case 'h': {
        event.preventDefault();
        const { elements, currentIndex } = getFocusState();
        if (currentIndex > 0) {
          elements[currentIndex - 1]?.focus();
        } else if (currentIndex === -1 && elements.length > 0) {
          elements[elements.length - 1]?.focus();
        }
        break;
      }
      case 'j': {
        event.preventDefault();
        window.scrollBy(0, 50);
        break;
      }
      case 'k': {
        event.preventDefault();
        window.scrollBy(0, -50);
        break;
      }
      case 'l': {
        event.preventDefault();
        const { elements, currentIndex } = getFocusState();
        if (currentIndex >= 0 && currentIndex < elements.length - 1) {
          elements[currentIndex + 1]?.focus();
        } else if (currentIndex === -1 && elements.length > 0) {
          elements[0]?.focus();
        }
        break;
      }
      case '0': {
        event.preventDefault();
        const { elements } = getFocusState();
        if (elements.length > 0) {
          elements[0]?.focus();
        }
        break;
      }
      case '$':
      case '4': {
        if (key === '$' || (key === '4' && shift)) {
          event.preventDefault();
          const { elements } = getFocusState();
          if (elements.length > 0) {
            elements[elements.length - 1]?.focus();
          }
        }
        break;
      }
    }
  };

  window.addEventListener('keydown', handleKeydown);
  return () => {
    window.removeEventListener('keydown', handleKeydown);
  };
}
