import { Website } from './website';
import { Theme } from './theme';

beforeAll(() => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
});

describe('Website', () => {
  let website;

  beforeAll(() => {
    website = new Website();
  });

  test('can be set to original', () => {
    const theme = Theme.OriginalTheme();
    website.setTheme(theme);
    expect(document.body.style.backgroundColor).toBe('white');

    const paraNodes = Array.from(document.getElementsByTagName('p'));
    paraNodes.forEach((node) => {
      expect(node.style.color).toBe('');
    });

    const preNodes = Array.from(document.getElementsByTagName('pre'));
    preNodes.forEach((node) => {
      expect(node.style.border).toBe('');
    });
  });
});
