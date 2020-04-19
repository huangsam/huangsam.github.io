import services from './services';

describe('Service colors', () => {
  test.each(services.getServices())('color exists for %s', (svc) => {
    const color = services.getServiceColor(svc);
    expect(color).toBeTruthy();
    expect(color).toMatch(/#[a-zA-Z0-9]{6}/);
  });

  test('bogus color throws TypeError', () => {
    expect(() => {
      services.getServiceColor('bogus');
    }).toThrow(TypeError);
  });
});

describe('Service urls', () => {
  test.each(services.getServices())('url exists for %s', (svc) => {
    const url = services.getServiceUrl(svc);
    expect(url).toBeTruthy();
    expect(url).toMatch(/https?:\/\/.*/);
  });

  test('bogus url throws TypeError', () => {
    expect(() => {
      services.getServiceUrl('bogus');
    }).toThrow(TypeError);
  });
});
