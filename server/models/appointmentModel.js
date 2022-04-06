const mongoose = require("mongoose");
const  Appointment = new mongoose.Schema(
  {
    title:{type:String, required: true},
    businessName:{type:String, required: true},
    start:{type:Date, required: true},
    end:{type:Date, required: true},
    orderName:{type:String, required: true},
  },

  { timestamps: true }
);
module.exports=mongoose.model('Appointment',Appointment);