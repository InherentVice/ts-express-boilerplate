import request from 'supertest';
import createMockServer from '../../helpers/createMockServer';

import { Express } from 'express-serve-static-core';

let server: Express;

beforeAll(async () => {
  server = await createMockServer();
});

describe('GET /hello', () => {
  it('should return 200 & valid response', async (done) => {
    request(server)
      .get(`/hello`)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: 'Hello World!' });
        done();
      });
  });
});
