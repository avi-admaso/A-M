const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image:{type: String , default:"https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"},
    phoneNumber:{type: String, required: true},
    isAdmin:{type: Boolean,default:false},
    historyAppointment:{type: Array},
    nextAppointment:{type: Array},
    businessName:{type: String, default:""},
    password:{type: String, required: true}
  },
  { timestamps: true }
);
module.exports=mongoose.model('User',User);