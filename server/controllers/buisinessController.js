const buisiness = require("../models/buisinessModel");

module.exports = {
    GetBuisiness: async (req, res) => {
        try {
            const data = await buisiness.find();
            if (data && data.length >= 1) return res.status(200).json({ success: true, data });
            res.status(404).json({ success: false, message: "no buisiness found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    GetBuisinessById: async (req, res) => {
        try {
            const user = await buisiness.findOne({ _id: req.params.id });
            if (user) return res.status(200).json({ success: true, user });
            res.status(404).json({ success: false, message: "no user found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    AddBuisiness: async (req, res) => {
        try {
            const { firstName, lastName, email, phoneNumber, role, businessName,image } = req.body;
            const user = new buisiness({ firstName, lastName, email, phoneNumber, role, businessName,image });
            if (!user) return res.status(400).json({ success: false, message: "user not valid" })

            await buisiness.create(user)
                .then(() => res.status(201).json({ success: true, message: "user successfully added" }))
                .catch((err) => res.status(400).json({ success: false, message: err.message }))
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    UpdateBuisiness: async (req, res) => {
        try {
            if (await buisiness.exists({ _id: req.params.id })) {
                return await buisiness.findByIdAndUpdate(req.params.id, req.body)
                    .then(() => res.status(200).json({ success: true, message: "user updated successfully" }))
                    .catch((err) => res.status(400).json({ success: false, message: err.message }))
            }
            res.status(404).json({ success: false, message: "no user found" });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    DeleteBuisiness: async (req, res) => {
        try {
            if (await buisiness.exists({ _id: req.params.id })) {
                return await buisiness.findByIdAndRemove(req.params.id)
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