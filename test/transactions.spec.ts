import request from 'supertest';
import { afterAll, beforeAll, it, vi } from 'vitest';

import { app } from '../src/app';


beforeAll(async() => {
    await app.ready()
})

afterAll(async() => {
    await app.close()
})

vi.mock('../src/middlewares/check-session-id-exists', () => ({
    checkSessionIdExists: vi.fn().mockImplementation((req, res, next) => next()),
  }));

it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New trasaction',
        amount: 5000,
        type: 'credit',
      })
      
      .expect(201)
  })