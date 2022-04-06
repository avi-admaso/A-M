const mongoose = require("mongoose");
const  Business = new mongoose.Schema(
  {
    image:{type: String ,default:"" },
    phoneNumber:{type: String, required},
    isAdmin:{type: Boolean},
    businessName:{type: String, required},
    businessNumber:{type: String, required},
    
  },

  { timestamps: true }
);
module.exports=mongoose.model('Business',Business);