const buisinessRoutes = require("express").Router();

const { GetBuisiness,GetBuisinessById, AddBuisiness, UpdateBuisiness, DeleteBuisiness } = require("../controllers/buisinessController");

buisinessRoutes.get("/", GetBuisiness);
buisinessRoutes.get("/:id", GetBuisinessById);
buisinessRoutes.post("/", AddBuisiness);
buisinessRoutes.put("/:id", UpdateBuisiness);
buisinessRoutes.delete("/:id", DeleteBuisiness);

module.exports = buisinessRoutes;