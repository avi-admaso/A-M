const mongoose = require("mongoose");
const  Business = new mongoose.Schema(
  {
    image:{type: String ,default:"https://pixabay.com/vectors/social-media-connections-networking-3846597/" },
    isAdmin:{type: Boolean,default:true},
    businessName:{type: String, required: true,unique: true},
    businessNumber:{type: String, required: true},
    serviceOptions:{type: Array },
    openingHours:{type: Array },
    serviceDuretion:{type: Number },
    userId:{type: mongoose.Schema.Types.ObjectId}
  },

  { timestamps: true }
);
module.exports=mongoose.model('Business',Business);