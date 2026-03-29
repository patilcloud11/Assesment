const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return 200 and "Hello, DevOps World!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, DevOps World!');
  });
});

describe('GET /health', () => {
  it('should return 200 and JSON with status "UP"', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'UP' });
  });
});

describe('GET /metrics', () => {
  it('should return 200 and some Prometheus metrics', async () => {
    const response = await request(app).get('/metrics');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('http_request_duration_seconds_bucket');
  });
});
