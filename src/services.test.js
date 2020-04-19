import services from './services';

describe('Service colors', () => {
  test.each(services.getServices())('exist for %s', (svc) => {
    const colors = services.getServiceColors(svc);
    expect(typeof colors).toBe('object');
    for (const [name, color] of Object.entries(colors)) {
      expect(color).toMatch(/#[a-zA-Z0-9]{6}/);
    }
  });

  test('do not exist for bogus', () => {
    expect(() => {
      services.getServiceColors('bogus');
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
