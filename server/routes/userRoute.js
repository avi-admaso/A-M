const userRoutes = require("express").Router();

const { GetUserById, Updateuser, Deleteuser, Adduser, GetUsers,login,register } = require("../controllers/userController");

userRoutes.get("/", GetUsers);
userRoutes.get("/:id", GetUserById);
userRoutes.post("/", Adduser);
userRoutes.put("/:id", Updateuser);
userRoutes.delete("/:id", Deleteuser);
userRoutes.post("/register", register);
userRoutes.post("/login", login);


module.exports = userRoutes;