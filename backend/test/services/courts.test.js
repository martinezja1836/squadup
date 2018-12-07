const app = require('../../src/app');

describe('\'courts\' service', () => {
  it('registered the service', () => {
    const service = app.service('courts');
    expect(service).toBeTruthy();
  });
});
