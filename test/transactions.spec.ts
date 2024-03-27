import request from "supertest";
import { afterAll, beforeAll, it, vi, describe, expect } from "vitest";

import { app } from "../src/app";

describe("Transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  vi.mock("../src/middlewares/check-session-id-exists", () => ({
    checkSessionIdExists: vi
      .fn()
      .mockImplementation((req, res, next) => next()),
  }));

  it("should be able to create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "New trasaction",
        amount: 5000,
        type: "credit",
      })
      .expect(201);
  });

  it('should be able to list all transactions', async() => {
    const createTransactionResponse = await request(app.server)
    .post("/transactions")
    .send({
      title: "New trasaction",
      amount: 5000,
      type: "credit",
    })

    const cookies = createTransactionResponse.headers['set-cookie'][0];
    

    const listTransactionsResponse = await request(app.server)
    .get('/transactions')
    .set('Cookie', cookies)
    .expect(200)

    // expect(listTransactionsResponse).toEqual([
    //   {
    //     id: expect.any(String),

    //   }
    // ])

    expect(listTransactionsResponse.body.transactions).toEqual([
     expect.objectContaining({
      title: "New trasaction",
      amount: 5000,
     })
    ])
  })


});
