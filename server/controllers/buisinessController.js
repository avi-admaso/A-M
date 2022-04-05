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
    },
    register: async (req, res) => {
        try {
            if (await users.exists({ email: req.body.email })) {
                return res.status(400).json({ success: false, message: "user with that email already exists" });
            };
            let { firstName, lastName, phoneNumber, email, password,businessName,image,businessNumber } = req.body;
            bcrypt.hash(password, 10, async (err, hashPassword) => {
                console.log(password, hashPassword);
                if (err) return res.status(400).json({ success: false, message: err.message });
                password = hashPassword;
                const user = new users({ firstName, lastName, phoneNumber, email, password, image,businessName,image,businessNumber })
                await users.create(user)
                    .then(() => res.status(200).json({ success: true, message: "user added successfully" }))
                    .catch(err => res.status(500).json({ success: false, message: err.message }))
            })
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    },
    login: async (req, res) => {
        try {
            const user = await users.findOne({ email: req.body.email });
            if (!user) return res.status(400).json({ success: false, message: "no user found" });

            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) return res.status(500).json({ success: false, message: err.message });
                if (!isMatch) return res.status(400).json({ success: false, message: "password or email incorrect" });

                const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: "3h" });
                return res.status(200).json({ success: true, message: "login successful", token });
            });
        }
        catch (err) {
            res.status(500).json({ success: false, message: err.message });
        };
    },
};