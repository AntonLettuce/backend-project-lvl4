import app from '../server/index.js';
import faker from 'faker';

describe('requests', () => {
  let server;

  beforeAll(() => {
    server = app();
  });

  it('GET 200', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/',
    });
    expect(res.statusCode).toBe(200);
  });

  it('GET 404', async () => {
    const res = await server.inject({
      method: 'GET',
      url: '/wrong-path',
    });
    expect(res.statusCode).toBe(404);
  });

  it('User Registration', async () => {
    const res = await server.inject({
      method: 'POST',
      url: '/users',
      payload: { 
        email: faker.internet.email(),
        password: faker.internet.password(),
      }
    });
    expect(res.statusCode).toBe(302);
  });

  afterAll(() => {
    server.close();
  });
});
