const mongoose = require("mongoose");
const  Business = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    image:{type: String ,default:"" },
    phoneNumber:{type: String, require: true},
    isAdmin:{type: Boolean},
    businessName:{type: String, require: true},
    businessNumber:{type: String, require: true},
    password:{type: String, require: true}

  },

  { timestamps: true }
);
module.exports=mongoose.model('Business',Business);