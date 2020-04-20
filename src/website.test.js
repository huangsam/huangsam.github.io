import Website from './website';

beforeAll(() => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
});

describe('Website', () => {
  let website;

  beforeAll(() => {
    website = new Website();
  });

  test('can be set to default', () => {
    website.setTheme('default');
    expect(document.body.classList.length).toBe(0);
  });

  test('can be set to github', () => {
    website.setTheme('github');
    expect(document.body.classList.contains('github')).toBeTruthy();
    expect(document.body.classList.length).toBe(1);
  });

  test('can be set to github-linkedin', () => {
    website.setTheme('github');
    website.setTheme('linkedin');
    expect(document.body.classList.contains('github')).toBeFalsy();
    expect(document.body.classList.contains('linkedin')).toBeTruthy();
    expect(document.body.classList.length).toBe(1);
  });

  test('can be set to github-default', () => {
    website.setTheme('github');
    website.setTheme('default');
    expect(document.body.classList.length).toBe(0);
  });

  test('can be set to github-default-linkedin', () => {
    website.setTheme('github');
    website.setTheme('default');
    website.setTheme('linkedin');
    expect(document.body.classList.contains('github')).toBeFalsy();
    expect(document.body.classList.contains('linkedin')).toBeTruthy();
    expect(document.body.classList.length).toBe(1);
  });
});
