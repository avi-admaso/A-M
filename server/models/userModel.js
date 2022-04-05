const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image:{type: String , default:""},
    phoneNumber:{type: String, require: true},
    role:{type: Array, require: true},
    historyAppointment:{type: Array},
    nextAppointment:{type: Array},
    businessName:{type: String, require: true},
  },
  { timestamps: true }
);
module.exports=mongoose.model('User',User);