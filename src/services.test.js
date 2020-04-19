import services from './services';
import { Theme } from './theme';

describe('Service metadata', () => {
  test.each(services.getServices())('exists for %s', (svc) => {
    const theme = services.getServiceTheme(svc);
    expect(theme).toBeInstanceOf(Theme);
    const url = services.getServiceUrl(svc);
    expect(url).toMatch(/https?:\/\/.*/);
  });
});

describe('Original theme', () => {
  test('exists', () => {
    const theme = services.getOriginalTheme();
    expect(theme).toBeInstanceOf(Theme);
  });
});
