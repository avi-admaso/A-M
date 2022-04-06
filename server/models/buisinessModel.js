const mongoose = require("mongoose");
const  Business = new mongoose.Schema(
  {
    image:{type: String ,default:"https://pixabay.com/vectors/social-media-connections-networking-3846597/" },
    phoneNumber:{type: String, required: true},
    isAdmin:{type: Boolean},
    businessName:{type: String, required: true,unique: true},
    businessNumber:{type: String, required: true},
    
  },

  { timestamps: true }
);
module.exports=mongoose.model('Business',Business);