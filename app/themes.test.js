import { originalTheme, serviceTheme } from './themes';

describe('Original theme should work as expected', () => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
  test('original theme works', () => {
    originalTheme();
    expect(document.body.style.backgroundColor).toBe('white');
    const pNodes = document.getElementsByTagName('p');
    for (const node of pNodes) {
      expect(node.style.color).toBe('');
    }
    const preNodes = document.getElementsByTagName('pre');
    for (const node of preNodes) {
      expect(node.style.border).toBe('');
    }
  });
});

describe('Service themes should work as expected', () => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
  test('original theme works', () => {
    serviceTheme('red');
    expect(document.body.style.backgroundColor).toBe('red');
    const pNodes = document.getElementsByTagName('p');
    for (const node of pNodes) {
      expect(node.style.color).toBe('white');
    }
    const preNodes = document.getElementsByTagName('pre');
    for (const node of preNodes) {
      expect(node.style.border).toBe('.3em solid white');
    }
  });
});
