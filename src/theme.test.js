import Theme from './theme';

describe('Theme', () => {
  test('is created without params', () => {
    let theme = new Theme();
    expect(theme.getBodyBgColor()).toBe('');
    expect(theme.getParaColor()).toBe('');
    expect(theme.getPreBgColor()).toBe('');
    expect(theme.getPreBorder()).toBe('');
  });

  test('is created with all params', () => {
    let theme = new Theme('white', 'white', 'white', 'white');
    expect(theme.getBodyBgColor()).toBe('white');
    expect(theme.getParaColor()).toBe('white');
    expect(theme.getPreBgColor()).toBe('white');
    expect(theme.getPreBorder()).toBe('white');
  });
});
