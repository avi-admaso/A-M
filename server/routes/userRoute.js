const userRoutes = require("express").Router();

const { GetUserById, Updateuser, Deleteuser, Adduser, GetUsers } = require("../controllers/userController");

userRoutes.get("/users", GetUsers);
userRoutes.get("/users/:id", GetUserById);
userRoutes.post("/users", Adduser);
userRoutes.put("/users/:id", Updateuser);
userRoutes.delete("/users/:id", Deleteuser);

module.exports = userRoutes;