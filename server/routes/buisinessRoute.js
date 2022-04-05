const buisinessRoutes = require("express").Router();

const { GetBuisiness,GetBuisinessById, AddBuisiness, UpdateBuisiness, DeleteBuisiness } = require("../controllers/buisinessController");

buisinessRoutes.get("/buisiness", GetBuisiness);
buisinessRoutes.get("/buisiness/:id", GetBuisinessById);
buisinessRoutes.post("/buisiness", AddBuisiness);
buisinessRoutes.put("/buisiness/:id", UpdateBuisiness);
buisinessRoutes.delete("/buisiness/:id", DeleteBuisiness);

module.exports = buisinessRoutes;