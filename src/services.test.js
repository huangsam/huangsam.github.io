import services from './services';

describe('Service colors should work as expected', () => {
  test.each(services.getServices())('%s color is valid', (svc) => {
    const color = services.getServiceColor(svc);
    expect(color).toBeTruthy();
    expect(color).toMatch(/#[a-zA-Z0-9]{6}/);
  });

  test('bogus color throws error', () => {
    expect(() => {
      services.getServiceColor('bogus');
    }).toThrow(TypeError);
  });
});

describe('Service URLs should work as expected', () => {
  test.each(services.getServices())('%s url is valid', (svc) => {
    const url = services.getServiceUrl(svc);
    expect(url).toBeTruthy();
    expect(url).toMatch(/https?:\/\/.*/);
  });

  test('bogus url throws error', () => {
    expect(() => {
      services.getServiceUrl('bogus');
    }).toThrow(TypeError);
  });
});
