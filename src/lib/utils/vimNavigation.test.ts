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
});
