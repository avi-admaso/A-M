const userRoutes = require("express").Router();

const { GetUserById, Updateuser, Deleteuser, Adduser, GetUsers,login,register } = require("../controllers/userController");

userRoutes.get("/users", GetUsers);
userRoutes.get("/users/:id", GetUserById);
userRoutes.post("/users", Adduser);
userRoutes.put("/users/:id", Updateuser);
userRoutes.delete("/users/:id", Deleteuser);
userRoutes.post("/register", register);
userRoutes.post("/login", login);
module.exports = userRoutes;