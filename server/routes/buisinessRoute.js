const buisinessRoutes = require("express").Router();

const { GetBuisiness,GetBuisinessById, AddBuisiness, UpdateBuisiness, DeleteBuisiness,register,login } = require("../controllers/buisinessController");

buisinessRoutes.get("/", GetBuisiness);
buisinessRoutes.get("/:id", GetBuisinessById);
buisinessRoutes.post("/", AddBuisiness);
buisinessRoutes.put("/:id", UpdateBuisiness);
buisinessRoutes.delete("/:id", DeleteBuisiness);
userRoutes.post("/register", register);
userRoutes.post("/login", login);

module.exports = buisinessRoutes;