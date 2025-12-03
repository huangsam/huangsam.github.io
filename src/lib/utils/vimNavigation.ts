// src/lib/utils/vimNavigation.ts
import hotkeys from 'hotkeys-js';

export function initVimNavigation() {
  // Helper to check if a modal is open
  const isModalOpen = () => document.querySelector('.modal-backdrop') !== null;

  hotkeys('h', (event) => {
    if (isModalOpen()) return; // Skip if modal is open
    event.preventDefault();
    const focusableElements = document.querySelectorAll('a, button');
    const activeElement = document.activeElement;
    const currentIndex = Array.from(focusableElements).indexOf(activeElement as Element);
    if (currentIndex > 0) {
      (focusableElements[currentIndex - 1] as HTMLElement).focus();
    } else if (currentIndex === -1 && focusableElements.length > 0) {
      (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
    }
  });

  hotkeys('j', (event) => {
    if (isModalOpen()) return;
    event.preventDefault();
    window.scrollBy(0, 50);
  });

  hotkeys('k', (event) => {
    if (isModalOpen()) return;
    event.preventDefault();
    window.scrollBy(0, -50);
  });

  hotkeys('l', (event) => {
    if (isModalOpen()) return;
    event.preventDefault();
    const focusableElements = document.querySelectorAll('a, button');
    const activeElement = document.activeElement;
    const currentIndex = Array.from(focusableElements).indexOf(activeElement as Element);
    if (currentIndex >= 0 && currentIndex < focusableElements.length - 1) {
      (focusableElements[currentIndex + 1] as HTMLElement).focus();
    } else if (currentIndex === -1 && focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  });

  hotkeys('0', (event) => {
    if (isModalOpen()) return;
    event.preventDefault();
    const focusableElements = document.querySelectorAll('a, button');
    if (focusableElements.length > 0) {
      (focusableElements[0] as HTMLElement).focus();
    }
  });

  hotkeys('shift+4', (event) => {
    if (isModalOpen()) return;
    event.preventDefault();
    const focusableElements = document.querySelectorAll('a, button');
    if (focusableElements.length > 0) {
      (focusableElements[focusableElements.length - 1] as HTMLElement).focus();
    }
  });
}
