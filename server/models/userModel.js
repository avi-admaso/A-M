const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    firstName: { type: String, required },
    lastName: { type: String, required },
    email: { type: String, required, unique: true },
    image:{type: String , default:""},
    phoneNumber:{type: String, required},
    isAdmin:{type: Boolean},
    historyAppointment:{type: Array},
    nextAppointment:{type: Array},
    businessName:{type: String, default:""},
    password:{type: String, required}
  },
  { timestamps: true }
);
module.exports=mongoose.model('User',User);