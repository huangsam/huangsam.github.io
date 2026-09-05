// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import { initVimNavigation } from './vimNavigation';

describe('vimNavigation', () => {
  beforeAll(() => {
    // Only register the global event listener once for all tests
    initVimNavigation();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('handles h (left navigation)', () => {
    // Create a mock DOM to test navigation
    document.body.innerHTML = '<a href="#">Link 1</a><button>Btn 1</button><a href="#">Link 2</a>';
    const elements = document.querySelectorAll('a, button');
    (elements[1] as HTMLElement).focus(); // Focus Btn 1

    const event = new KeyboardEvent('keydown', { key: 'h' });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(document.activeElement).toBe(elements[0]);
  });

  it('handles l (right navigation)', () => {
    document.body.innerHTML = '<a href="#">Link 1</a><button>Btn 1</button><a href="#">Link 2</a>';
    const elements = document.querySelectorAll('a, button');
    (elements[0] as HTMLElement).focus(); // Focus Link 1

    const event = new KeyboardEvent('keydown', { key: 'l' });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(document.activeElement).toBe(elements[1]);
  });

  it('handles j and k (scrolling)', () => {
    window.scrollBy = vi.fn();

    const jEvent = new KeyboardEvent('keydown', { key: 'j' });
    window.dispatchEvent(jEvent);
    expect(window.scrollBy).toHaveBeenCalledWith(0, 50);

    const kEvent = new KeyboardEvent('keydown', { key: 'k' });
    window.dispatchEvent(kEvent);
    expect(window.scrollBy).toHaveBeenCalledWith(0, -50);
  });

  it('handles 0 and $ (first/last navigation)', () => {
    document.body.innerHTML = '<a href="#">Link 1</a><button>Btn 1</button><a href="#">Link 2</a>';
    const elements = document.querySelectorAll('a, button');

    // Test 0
    (elements[1] as HTMLElement).focus();
    const zeroEvent = new KeyboardEvent('keydown', { key: '0' });
    window.dispatchEvent(zeroEvent);
    expect(document.activeElement).toBe(elements[0]);

    // Test $ (shift+4)
    (elements[1] as HTMLElement).focus();
    const shift4Event = new KeyboardEvent('keydown', { key: '$', shiftKey: true });
    window.dispatchEvent(shift4Event);
    expect(document.activeElement).toBe(elements[2]);
  });

  it('ignores hotkeys when typing in input', () => {
    document.body.innerHTML = '<input type="text" id="test-input" /><a href="#">Link 1</a>';
    const input = document.getElementById('test-input') as HTMLInputElement;
    input.focus();

    window.scrollBy = vi.fn();

    // Type 'j' inside input
    const event = new Object(new KeyboardEvent('keydown', { key: 'j' }));
    Object.defineProperty(event, 'target', { value: input, enumerable: true });

    window.dispatchEvent(event as KeyboardEvent);

    // Scroll should NOT be called
    expect(window.scrollBy).not.toHaveBeenCalled();
  });

  it('ignores hotkeys when modifier keys (Cmd/Ctrl/Alt) are pressed', () => {
    document.body.innerHTML = '<a href="#">Link 1</a><button>Btn 1</button><a href="#">Link 2</a>';
    const elements = document.querySelectorAll('a, button');
    (elements[0] as HTMLElement).focus(); // Focus Link 1

    const event = new KeyboardEvent('keydown', { key: 'l', metaKey: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    // Should not have prevented default, and focus should remain on Link 1
    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(document.activeElement).toBe(elements[0]);
  });

  it('handles ? (keyboard shortcuts modal)', () => {
    const listener = vi.fn();
    window.addEventListener('open-keyboard-shortcuts', listener);

    const event = new KeyboardEvent('keydown', { key: '?' });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(listener).toHaveBeenCalledTimes(1);

    window.removeEventListener('open-keyboard-shortcuts', listener);
  });

  it('handles Shift + / for keyboard shortcuts', () => {
    const listener = vi.fn();
    window.addEventListener('open-keyboard-shortcuts', listener);

    const event = new KeyboardEvent('keydown', { key: '/', shiftKey: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(listener).toHaveBeenCalledTimes(1);

    window.removeEventListener('open-keyboard-shortcuts', listener);
  });

  it('calls onOpenShortcuts option when ? is pressed', () => {
    const onOpenShortcuts = vi.fn();
    const cleanup = initVimNavigation({ onOpenShortcuts });

    const event = new KeyboardEvent('keydown', { key: '?' });
    window.dispatchEvent(event);

    expect(onOpenShortcuts).toHaveBeenCalledTimes(1);

    cleanup();
  });

  it('ignores ? when a modal is already open', () => {
    document.body.innerHTML = '<div class="modal-backdrop"></div>';

    const listener = vi.fn();
    window.addEventListener('open-keyboard-shortcuts', listener);

    const event = new KeyboardEvent('keydown', { key: '?' });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(listener).not.toHaveBeenCalled();

    window.removeEventListener('open-keyboard-shortcuts', listener);
    document.body.innerHTML = '';
  });

  it('ignores ? when typing in input', () => {
    document.body.innerHTML = '<input type="text" id="test-input" />';
    const input = document.getElementById('test-input') as HTMLInputElement;
    input.focus();

    const listener = vi.fn();
    window.addEventListener('open-keyboard-shortcuts', listener);

    const event = new Object(new KeyboardEvent('keydown', { key: '?' }));
    Object.defineProperty(event, 'target', { value: input, enumerable: true });

    window.dispatchEvent(event as KeyboardEvent);

    expect(listener).not.toHaveBeenCalled();
    window.removeEventListener('open-keyboard-shortcuts', listener);
  });

  it('ignores ? when modifier keys are pressed', () => {
    const listener = vi.fn();
    window.addEventListener('open-keyboard-shortcuts', listener);

    const event = new KeyboardEvent('keydown', { key: '?', metaKey: true });
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');

    window.dispatchEvent(event);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(listener).not.toHaveBeenCalled();

    window.removeEventListener('open-keyboard-shortcuts', listener);
  });

  it('ignores elements with tabindex="-1"', () => {
    document.body.innerHTML =
      '<a href="#">Link 1</a><button tabindex="-1">Hidden Btn</button><a href="#">Link 2</a>';
    const elements = document.querySelectorAll('a');
    (elements[0] as HTMLElement).focus();

    const event = new KeyboardEvent('keydown', { key: 'l' });
    window.dispatchEvent(event);

    // Should skip the button with tabindex="-1" and go directly to Link 2
    expect(document.activeElement).toBe(elements[1]);
  });

  it('ignores elements inside footer', () => {
    document.body.innerHTML =
      '<a href="#">Link 1</a><footer><button id="footer-btn">Footer Btn</button></footer>';
    const link = document.querySelector('a') as HTMLElement;
    link.focus();

    const event = new KeyboardEvent('keydown', { key: 'l' });
    window.dispatchEvent(event);

    // Should not advance to the footer button
    expect(document.activeElement).toBe(link);
  });

  it('ignores elements inside modals when determining focusable elements', () => {
    document.body.innerHTML =
      '<a href="#">Link 1</a><div class="modal"><button id="modal-close">Close</button></div>';
    const link = document.querySelector('a') as HTMLElement;
    link.focus();

    const event = new KeyboardEvent('keydown', { key: 'l' });
    window.dispatchEvent(event);

    // Should not focus the modal button
    expect(document.activeElement).toBe(link);
  });
});
