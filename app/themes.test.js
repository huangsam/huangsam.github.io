import { originalTheme, serviceTheme } from './themes';

describe('Original theme should work as expected', () => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
  test('original theme works', () => {
    originalTheme();
    expect(document.body.style.backgroundColor).toBe('white');
    const pNodes = Array.from(document.getElementsByTagName('p'));
    pNodes.forEach((node) => {
      const { style } = node;
      expect(style.color).toBe('');
    });
    const preNodes = Array.from(document.getElementsByTagName('pre'));
    preNodes.forEach((node) => {
      const { style } = node;
      expect(style.border).toBe('');
    });
  });
});

describe('Service themes should work as expected', () => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
  test('service theme works', () => {
    serviceTheme('red');
    expect(document.body.style.backgroundColor).toBe('red');
    const pNodes = Array.from(document.getElementsByTagName('p'));
    pNodes.forEach((node) => {
      const { style } = node;
      expect(style.color).toBe('white');
    });
    const preNodes = Array.from(document.getElementsByTagName('pre'));
    preNodes.forEach((node) => {
      const { style } = node;
      expect(style.border).toBe('.3em solid white');
    });
  });
});
