const { getAllUsers, getUserByCode, userLogin, newUser, editUser, deleteUser } = require("../controller/users");

module.exports = (server) => {
  server.get("/user", getAllUsers);

  server.get("/user/:codeUser", getUserByCode);

  server.post("/user/login", userLogin);

  server.post("/user/new", newUser);

  server.post("/user/edit", editUser);

  server.del("/user", deleteUser);
};