const mongoose = require("mongoose");
const  Appointment = new mongoose.Schema(
  {
    title:{type:String, required},
    businessName:{type:String, required},
    start:{type:Date, required},
    end:{type:Date, required},
    orderName:{type:String, required},
  },

  { timestamps: true }
);
module.exports=mongoose.model('Appointment',Appointment);