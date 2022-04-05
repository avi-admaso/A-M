const mongoose = require("mongoose");
const  Appointment = new mongoose.Schema(
  {
    title:{type:String, require:true},
    businessName:{type:String, require:true},
    start:{type:Date, require:true},
    end:{type:Date, require:true},
    orderName:{type:String, require:true},
  },

  { timestamps: true }
);
module.exports=mongoose.model('Appointment',Appointment);