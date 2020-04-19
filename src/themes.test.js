import themes from './themes';

beforeAll(() => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
});

describe('Site themes', () => {
  describe('Original theme', () => {
    beforeAll(() => {
      themes.originalTheme();
    });

    test('has white bg', () => {
      expect(document.body.style.backgroundColor).toBe('white');
    });

    test('has plain text', () => {
      const pNodes = Array.from(document.getElementsByTagName('p'));
      pNodes.forEach((node) => {
        const { style } = node;
        expect(style.color).toBe('');
      });
    });

    test('has plain borders', () => {
      const preNodes = Array.from(document.getElementsByTagName('pre'));
      preNodes.forEach((node) => {
        const { style } = node;
        expect(style.border).toBe('');
      });
    });
  });

  describe('Custom theme', () => {
    beforeAll(() => {
      themes.customTheme('red');
    });

    test('has red bg', () => {
      expect(document.body.style.backgroundColor).toBe('red');
    });

    test('has white text', () => {
      const pNodes = Array.from(document.getElementsByTagName('p'));
      pNodes.forEach((node) => {
        const { style } = node;
        expect(style.color).toBe('white');
      });
    });

    test('has white borders', () => {
      const preNodes = Array.from(document.getElementsByTagName('pre'));
      preNodes.forEach((node) => {
        const { style } = node;
        expect(style.border).toBe('.3em solid white');
      });
    });
  });
});
