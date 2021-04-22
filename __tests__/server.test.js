"use strict";

const { server } = require("../src/server.js"); // bring in your server for testing (because it is a module)
const supertest = require("supertest"); // pull in npm package of supertest for making requests and mocking a server env
const mockRequest = supertest(server); // mock the server for us

describe("API SERVER:", () => {
  it("should create a new item in the db", async () => {
    const response = await mockRequest.post("/food").send({ name: "apple" });
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual("apple");
  });

  it("should retrieve an item from the db", async () => {
    const response = await mockRequest.get("/food/2");
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it("should retrieve all items from the db", async () => {
    const response = await mockRequest.get("/food");
    expect(response.status).toBe(200);
  });

  it("should delete an item from the db", async () => {
    const response = await mockRequest.delete("/food/1");
    expect(response.status).toBe(200);
    console.log("deleted", response.body);
  });
  it("should update an item from the db", async () => {
    const response = await mockRequest.put("/food/1");
    expect(response.status).toBe(200);
    console.log("updated", response.body);
  });

  ////////////////////////////////////////////////////
  it("should create a new shirt in the db", async () => {
    const response = await mockRequest.post("/shirt").send({ name: "SUPREME" });
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual("SUPREME");
  });

  it("should retrieve an shirt from the db", async () => {
    const response = await mockRequest.get("/shirt/2");
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it("should retrieve all shirts from the db", async () => {
    const response = await mockRequest.get("/shirt");
    expect(response.status).toBe(200);
  });

  it("should delete an shirt from the db", async () => {
    const response = await mockRequest.delete("/shirt/1");
    expect(response.status).toBe(200);
    console.log("deleted", response.body);
  });
  it("should update an shirt from the db", async () => {
    const response = await mockRequest.put("/shirt/1");
    expect(response.status).toBe(200);
    console.log("updated", response.body);
  });
});
