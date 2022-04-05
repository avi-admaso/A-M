const userRoutes = require("express").Router();

const { GetUserById, Updateuser, Deleteuser, Adduser, GetUsers } = require("../controllers/userController");

userRoutes.get("/", GetUsers);
userRoutes.get("/:id", GetUserById);
userRoutes.post("/", Adduser);
userRoutes.put("/:id", Updateuser);
userRoutes.delete("/:id", Deleteuser);

module.exports = userRoutes;