const appointment = require("../models/appointmentModel");

module.exports = {
    GetAppointments: async (req, res) => {
        try {
            const data = await appointment.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no appointment found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    GetAppointmentById: async (req, res) => {
        try {
            const user = await appointment.findOne({ _id: req.params.id });
            if (user) return res.status(200).json({ success: true, user });
            res.status(404).json({ success: false, message: "no user found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    AddAppointment: async (req, res) => {
        try {
            const { appointmentName, title, start, end, orderName } = req.body;
            const user = new appointment({ appointmentName, title, start, end,orderName });
            if (!user) return res.status(400).json({ success: false, message: "user not valid" })

            await appointment.create(user)
                .then(() => res.status(201).json({ success: true, message: "user successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    UpdateAppointment: async (req, res) => {
        try {
            if (await appointment.exists({ _id: req.params.id })) {
                return await appointment.findByIdAndUpdate(req.params.id, req.body)
                    .then(() => res.status(200).json({ success: true, message: "user updated successfully" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no user found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    DeleteAppointment: async (req, res) => {
        try {
            if (await appointment.exists({ _id: req.params.id })) {
                return await appointment.findByIdAndRemove(req.params.id)
                    .then(() => res.status(200).json({ success: true, message: "user deleted successfully" }))
                    .catch(err => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no user found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        };
    }
};