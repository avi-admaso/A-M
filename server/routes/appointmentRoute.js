const AppointmentsRoutes = require("express").Router();

const { GetAppointments,GetAppointmentById,GetAppointmentOfBusiness, AddAppointment, UpdateAppointment, DeleteAppointment } = require("../controllers/AppointmentController");

AppointmentsRoutes.get("/appointment", GetAppointments);
AppointmentsRoutes.get("/appointment/:id", GetAppointmentById);
AppointmentsRoutes.get("/appointment/Business/:BusinessName", GetAppointmentOfBusiness);
AppointmentsRoutes.post("/appointment", AddAppointment);
AppointmentsRoutes.put("/appointment/:id", UpdateAppointment);
AppointmentsRoutes.delete("/appointment/:id", DeleteAppointment);

module.exports = AppointmentsRoutes;