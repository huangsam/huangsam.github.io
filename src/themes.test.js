import themes from './themes';

describe('themes', () => {
  beforeEach(() => {
    document.body.innerHTML = '<body><p></p><pre></pre></body>';
  });

  test('set as original', () => {
    themes.originalTheme();
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

  test('set as custom', () => {
    themes.customTheme('red');
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
