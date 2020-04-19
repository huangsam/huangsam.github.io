import Theme from './theme';
import Website from './website';

beforeAll(() => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
});

describe('Website', () => {
  let website;

  beforeAll(() => {
    website = new Website();
  });

  test('can be set to original', () => {
    website.setTheme(Theme.OriginalTheme());
    expect(document.body.style.backgroundColor).toBe('white');

    const paraNodes = Array.from(document.getElementsByTagName('p'));
    paraNodes.forEach((node) => {
      expect(node.style.color).toBe('');
    });

    const preNodes = Array.from(document.getElementsByTagName('pre'));
    preNodes.forEach((node) => {
      expect(node.style.backgroundColor).toBe('');
    });
  });

  test('can be set to anything', () => {
    website.setTheme(new Theme('red', 'white', 'blue', 'black'));
    expect(document.body.style.backgroundColor).toBe('red');

    const paraNodes = Array.from(document.getElementsByTagName('p'));
    paraNodes.forEach((node) => {
      expect(node.style.color).toBe('white');
    });

    const preNodes = Array.from(document.getElementsByTagName('pre'));
    preNodes.forEach((node) => {
      expect(node.style.backgroundColor).toBe('blue');
    });
  });
});
