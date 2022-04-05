const buisinessRoutes = require("express").Router();

const { GetBuisiness,GetBuisinessById, AddBuisiness, UpdateBuisiness, DeleteBuisiness,register,login } = require("../controllers/buisinessController");

buisinessRoutes.get("/buisiness", GetBuisiness);
buisinessRoutes.get("/buisiness/:id", GetBuisinessById);
buisinessRoutes.post("/buisiness", AddBuisiness);
buisinessRoutes.put("/buisiness/:id", UpdateBuisiness);
buisinessRoutes.delete("/buisiness/:id", DeleteBuisiness);
buisinessRoutes.post("/register", register);
buisinessRoutes.post("/login", login);

module.exports = buisinessRoutes;