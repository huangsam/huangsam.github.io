import services from './services';

describe('Service color', () => {
  test.each(services.getServices())('exists for %s', (svc) => {
    const color = services.getServiceColor(svc);
    expect(color).toBeTruthy();
    expect(color).toMatch(/#[a-zA-Z0-9]{6}/);
  });

  test('does not exist for bogus', () => {
    expect(() => {
      services.getServiceColor('bogus');
    }).toThrow(TypeError);
  });
});

describe('Service url', () => {
  test.each(services.getServices())('exists for %s', (svc) => {
    const url = services.getServiceUrl(svc);
    expect(url).toBeTruthy();
    expect(url).toMatch(/https?:\/\/.*/);
  });

  test('does not exist for bogus', () => {
    expect(() => {
      services.getServiceUrl('bogus');
    }).toThrow(TypeError);
  });
});
