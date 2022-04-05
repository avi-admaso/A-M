const mongoose = require("mongoose");
const  Business = new mongoose.Schema(
  {
    image:{type: String ,default:"" },
    phoneNumber:{type: String, require: true},
    isAdmin:{type: Boolean},
    businessName:{type: String, require: true},
    businessNumber:{type: String, require: true},
    
  },

  { timestamps: true }
);
module.exports=mongoose.model('Business',Business);