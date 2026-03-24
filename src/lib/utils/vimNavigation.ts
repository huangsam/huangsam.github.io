export function initVimNavigation() {
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

  const focusableQuery = 'a, button';

  // Helper to reliably get focusable elements and tracking current focus index
  const getFocusState = () => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(focusableQuery));
    const currentIndex = elements.indexOf(document.activeElement as HTMLElement);
    return { elements, currentIndex };
  };

  window.addEventListener('keydown', (event) => {
    // If modal is open or user is typing, ignore Vim shortcuts
    if (isModalOpen() || isTyping(event)) return;

    const key = event.key;
    const shift = event.shiftKey;

    switch (key) {
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
  });
}
