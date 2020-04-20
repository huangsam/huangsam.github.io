import Website from './website';

beforeAll(() => {
  document.body.innerHTML = '<body><p></p><pre></pre></body>';
});

describe('Website', () => {
  let website;

  beforeAll(() => {
    website = new Website();
  });

  test('is set as default', () => {
    website.setTheme('default');
    expect(document.body.classList.length).toBe(0);
  });

  test('is set as github', () => {
    website.setTheme('github');
    expect(document.body.classList.contains('github')).toBeTruthy();
    expect(document.body.classList.length).toBe(1);
  });

  test('is set as github-linkedin', () => {
    website.setTheme('github');
    website.setTheme('linkedin');
    expect(document.body.classList.contains('github')).toBeFalsy();
    expect(document.body.classList.contains('linkedin')).toBeTruthy();
    expect(document.body.classList.length).toBe(1);
  });

  test('is set as github-default', () => {
    website.setTheme('github');
    website.setTheme('default');
    expect(document.body.classList.length).toBe(0);
  });

  test('is set as github-default-linkedin', () => {
    website.setTheme('github');
    website.setTheme('default');
    website.setTheme('linkedin');
    expect(document.body.classList.contains('github')).toBeFalsy();
    expect(document.body.classList.contains('linkedin')).toBeTruthy();
    expect(document.body.classList.length).toBe(1);
  });
});
