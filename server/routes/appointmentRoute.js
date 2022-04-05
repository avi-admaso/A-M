const AppointmentsRoutes = require("express").Router();

const { GetAppointments,GetAppointmentById, AddAppointment, UpdateAppointment, DeleteAppointment } = require("../controllers/AppointmentController");

AppointmentsRoutes.get("/", GetAppointments);
AppointmentsRoutes.get("/:id", GetAppointmentById);
AppointmentsRoutes.post("/", AddAppointment);
AppointmentsRoutes.put("/:id", UpdateAppointment);
AppointmentsRoutes.delete("/:id", DeleteAppointment);

module.exports = AppointmentsRoutes;