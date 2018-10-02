const request = require("supertest");
const server = require("../../src/server");

describe("Routes for users", () => {
  test("Capturing all users", () => {
    return request(server)
      .get("/user")
      .expect(200);
  });

  test("Capturing user by code_user", () => {
    return request(server)
      .get("/user/2")
      .expect(200);
  });
});

describe("Routes for login", () => {
  test("User success login", () => {
    return request(server)
      .post("/user/login")
      .send({ email: "gustavo@email.com", password: "123456" })
      .expect(200);
  });

  test("User bad login", () => {
    return request(server)
      .post("/user/login")
      .send({ email: "gustavo@email.com", password: "12345621" })
      .expect(203);
  });
});

describe("Routes for sign up", () => {
  test("New user success", () => {
    return request(server)
      .post("/user/new")
      .send({ email: "my@email.com", name: "my", password: "123456" })
      .expect(201);
  });

  test("New user fail", () => {
    return request(server)
      .post("/user/new")
      .send({ name: "Leticia", password: "123456" })
      .expect(200);
  });
});

describe("Routes for editing", () => {
  test("User success edit name", () => {
    return request(server)
      .post("/user/edit")
      .send({ email: "my@email.com", name: "i", password: "123456" })
      .expect(200);
  });

  test("User fail edit name", () => {
    return request(server)
      .post("/user/edit")
      .send({ email: "my@eemail.com", name: "i", password: "123456" })
      .expect(203);
  });

  test("User edit success password", () => {
    return request(server)
      .post("/user/edit")
      .send({ email: "my@email.com", name: "i", password: "12343" })
      .expect(200);
  });

  test("User edit fail password", () => {
    return request(server)
      .post("/user/edit")
      .send({ email: "my@eemail.com", name: "i", password: "123" })
      .expect(203);
  });
});

describe("Routes for deleting", () => {
  test("Delete success user", () => {
    return request(server)
      .del("/user")
      .send({ email: "leticia@email.com", password: "123" })
      .expect(200);
  });

  test("Delete fail user", () => {
    return request(server)
      .del("/user")
      .send({ email: "leticia@email.com", password: "1234" })
      .expect(200);
  });
});
