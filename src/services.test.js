import services from './services';

describe('Service metadata', () => {
  test.each(services.getServices())('exists for %s', (svc) => {
    const url = services.getServiceUrl(svc);
    expect(url).toMatch(/https?:\/\/.*/);
  });
});
