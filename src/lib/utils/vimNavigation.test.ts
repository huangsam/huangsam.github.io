import { describe, it, expect, vi, beforeEach } from 'vitest';
import { initVimNavigation } from './vimNavigation';

// Mock hotkeys-js
vi.mock('hotkeys-js', () => ({
  default: vi.fn(),
}));

import hotkeys from 'hotkeys-js';

describe('vimNavigation', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('registers all Vim navigation hotkeys', () => {
    initVimNavigation();

    expect(hotkeys).toHaveBeenCalledTimes(6);

    // Check each key binding
    expect(hotkeys).toHaveBeenCalledWith('h', expect.any(Function));
    expect(hotkeys).toHaveBeenCalledWith('j', expect.any(Function));
    expect(hotkeys).toHaveBeenCalledWith('k', expect.any(Function));
    expect(hotkeys).toHaveBeenCalledWith('l', expect.any(Function));
    expect(hotkeys).toHaveBeenCalledWith('0', expect.any(Function));
    expect(hotkeys).toHaveBeenCalledWith('shift+4', expect.any(Function));
  });
});
