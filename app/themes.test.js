import { originalTheme, serviceTheme } from './themes';

describe('Theme logic should work as expected', () => {
  beforeEach(() => {
    document.body.innerHTML = '<body><p></p><pre></pre></body>';
  });

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
