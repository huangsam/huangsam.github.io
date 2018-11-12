import {originalTheme, serviceTheme} from './themes';

describe('Original theme should work as expected', () => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
  test('original theme works', () => {
    originalTheme();
    expect(document.body.style.backgroundColor).toBe('white');
    let pNodes = document.getElementsByTagName('p');
    for (let node of pNodes) {
      expect(node.style.color).toBe('');
    }
    let preNodes = document.getElementsByTagName('pre');
    for (let node of preNodes) {
      expect(node.style.border).toBe('');
    }
  });
});

describe('Service themes should work as expected', () => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
  test('original theme works', () => {
    serviceTheme('red');
    expect(document.body.style.backgroundColor).toBe('red');
    let pNodes = document.getElementsByTagName('p');
    for (let node of pNodes) {
      expect(node.style.color).toBe('white');
    }
    let preNodes = document.getElementsByTagName('pre');
    for (let node of preNodes) {
      expect(node.style.border).toBe('.3em solid white');
    }
  });
});
